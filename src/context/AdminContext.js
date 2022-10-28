import { data } from "autoprefixer";
import { createContext, useState, useEffect } from "react";
import {
  getAllTeachers,
  getAllBatches,
  getAllSubjects,
  getAllGradesOfBatch,
  createSubject,
  getSubjectById,
} from "./apis";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [batches, setBatches] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);

  const fetchTeachers = async () => {
    const token = localStorage.getItem("token");
    const res = await getAllTeachers(token);
    if (res.status === "success") {
      const temp = [];
      res.data.results.forEach((item) => {
        temp.push({
          name: item.pre + item.name,
          subjects: item.subjects.join(", "),
          id: item.id,
          isActive: item.isActive,
        });
      });
      setTeachers(temp);
    }
  };

  const fetchAllBatches = async () => {
    const token = localStorage.getItem("token");
    const res = await getAllBatches(token);
    if (res.status === "success") {
      setBatches(res.data.results);
    }
  };

  const fetchAllSubjects = async () => {
    const token = localStorage.getItem("token");
    const s = await getAllSubjects(token);
    if (s.status === "success") {
      setSubjects(s.data.results);
    }
  };

  const transformYearToFE = (year, startYear) => {
    const yearMap = {
      1: "FE",
      2: "SE",
      3: "TE",
      4: "BE",
    };
    return (
      yearMap[year] +
      " " +
      (startYear + year - 1).toString().slice(2) +
      "-" +
      (startYear + year).toString().slice(2)
    );
  };

  const fetchAllGradesOfBatch = async (batchId) => {
    const token = localStorage.getItem("token");
    const res = await getAllGradesOfBatch(token, batchId);
    if (res.status === "success" && res.data.results.length > 0) {
      console.log("res", res);
      const start = res.data.results[0].batch.startYear;
      console.log("start", start);
      const temp = [];
      res.data.results.forEach((item) => {
        const sub = item.subject;
        const x = {
          year: transformYearToFE(sub.year, start),
          course: sub.subjectCode,
        };
        item.output.forEach((ele) => {
          x[ele.title] = ele.final;
        });
        temp.push(x);
      });
      setGrades(temp);
      console.log("temp", temp);
    }
  };

  const createNewSubject = async (body) => {
    const token = localStorage.getItem("token");
    const res = await createSubject(token, body);
    return res;
  };

  return (
    <AdminContext.Provider
      value={{
        teachers,
        fetchTeachers,
        setTeachers,
        fetchAllBatches,
        batches,
        setBatches,
        subjects,
        setSubjects,
        fetchAllSubjects,
        grades,
        fetchAllGradesOfBatch,
        createNewSubject,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
