import { createContext, useState, useEffect } from "react";
import {
  getTeacherSubject,
  getGradeById,
  calculateGradeApiCall,
  getAllSubjects,
  getAllBatches,
  assignSubject,
} from "./apis";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [pendingData, setPendingData] = useState([]);
  const [completedData, setCompletedData] = useState([]);
  const [grade, setGrade] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [batches, setBatches] = useState([]);

  const fetchTeacherSubjects = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const res = await getTeacherSubject(token, userId, "pending");
    if (res.status === "success") {
      setPendingData(
        res.data.results.map((item) => {
          return {
            name: item.subject.subjectName,
            semester: item.subject.semester,
            batch: item.batch.endYear,
            status: item.status,
            id: item.id,
          };
        })
      );
    }
    console.log(res);
    const res2 = await getTeacherSubject(token, userId, "completed");
    if (res2.status === "success") {
      setCompletedData(
        res2.data.results.map((item) => {
          return {
            name: item.subject.subjectName,
            semester: item.subject.semester,
            batch: item.batch.endYear,
            status: item.status,
            id: item.id,
          };
        })
      );
    }
    console.log(res2);
  };

  const calculateGrade = async (body) => {
    const token = localStorage.getItem("token");
    const res = await calculateGradeApiCall(token, body);
    return res;
  };

  const fetchGrade = async (id) => {
    const token = localStorage.getItem("token");
    const res = await getGradeById(token, id);
    if (res.status === "success") {
      setGrade(res.data);
      console.log(res.data);
    }
  };

  const fetchAllSubjectsAndBatches = async () => {
    const token = localStorage.getItem("token");
    const s = await getAllSubjects(token);
    const b = await getAllBatches(token);
    console.log(s, b);

    if (s.status === "success") {
      const temp = [];
      s.data.results.forEach((item) => {
        temp.push({ value: item.id, name: item.subjectName });
      });
      setSubjects(temp);
      console.log(temp);
    }
    if (b.status === "success") {
      const temp2 = [];
      b.data.results.forEach((item) => {
        temp2.push({ value: item.id, name: item.endYear });
      });
      setBatches(temp2);
    }
  };

  const assignSubjectToTeacher = async (body) => {
    const token = localStorage.getItem("token");
    const res = await assignSubject(token, body);
    if (res.status === "success") {
      fetchTeacherSubjects();
    }
    return res;
  };

  return (
    <TeacherContext.Provider
      value={{
        pendingData,
        setPendingData,
        completedData,
        setCompletedData,
        fetchTeacherSubjects,
        calculateGrade,
        grade,
        setGrade,
        fetchGrade,
        subjects,
        batches,
        fetchAllSubjectsAndBatches,
        assignSubjectToTeacher,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
