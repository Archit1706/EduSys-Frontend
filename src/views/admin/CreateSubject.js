import React, { useContext, useState, useEffect } from "react";
import TableCoPo from "../../components/Dashboard/TableCoPo";
import TableExitSurvey from "../../components/Dashboard/TableExitSurvey";
import TablePt from "../../components/Dashboard/TablePt";
import TableUni from "../../components/Dashboard/TableUni";
import { getFinalAttainment } from "../../Util/Calculations";
import TableFinalAttainment from "../../components/Dashboard/TableFinalAttainment";
import { TeacherContext } from "context/TeacherContext";
import SelectSearch from "react-select-search";
import { transform } from "typescript";
import { AdminContext } from "context/AdminContext";
const sample = "../../../sample.json";
// import "./Dashboard.css";
// import isOpen from "../Sidebar2/Sidebar";

const styles = {
  dash: `m-5 w-[90%]`,
  dashboard: ``,
  buttonDiv: `flex items-center justify-center`,
  button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded`,
  table: `rounded-md mb-5`,
  hr: `p-5`,
};

const customCellStyle = {
  borderRadius: "6px",
  boxShadow: "inset 1px 1px 3px #341f97",
  textAlign: "center",
  fontSize: "0.9rem",

  // color: "#341f97",
};

const CreateSubject = (props) => {
  const { createNewSubject } = useContext(AdminContext);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    {
      title: "CO",
      field: "CO",
      cellStyle: customCellStyle,
    },
    {
      title: "Course Outcome",
      field: "course_outcome",
      cellStyle: customCellStyle,
    },
    {
      title: "PO1",
      field: "PO1",
      cellStyle: customCellStyle,
    },
    {
      title: "PO2",
      field: "PO2",
      cellStyle: customCellStyle,
    },
    {
      title: "PO3",
      field: "PO3",
      cellStyle: customCellStyle,
    },
    {
      title: "PO4",
      field: "PO4",
      cellStyle: customCellStyle,
    },
    {
      title: "PO5",
      field: "PO5",
      cellStyle: customCellStyle,
    },
    {
      title: "PO6",
      field: "PO6",
      cellStyle: customCellStyle,
    },
    {
      title: "PO7",
      field: "PO7",
      cellStyle: customCellStyle,
    },
    {
      title: "PO8",
      field: "PO8",
      cellStyle: customCellStyle,
    },
    {
      title: "PO9",
      field: "PO9",
      cellStyle: customCellStyle,
    },
    {
      title: "PO10",
      field: "PO10",
      cellStyle: customCellStyle,
    },
    {
      title: "PO11",
      field: "PO11",
      cellStyle: customCellStyle,
    },
    {
      title: "PO12",
      field: "PO12",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO1",
      field: "PSO1",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO2",
      field: "PSO2",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO3",
      field: "PSO3",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO4",
      field: "PSO4",
      cellStyle: customCellStyle,
    },
  ]);

  const coUpdateListener = (cos) => {
    setData(cos);
    console.log("cos", cos);
  };

  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [semOptions, setSemOptions] = useState([
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "7", value: "7" },
    { name: "8", value: "8" },
  ]);

  const transform = (d) => {
    return d.map((co) => {
      return {
        co: co.CO,
        description: co.course_outcome,
        data: [
          {
            title: "PO1",
            value: co.PO1 ? co.PO1 : null,
          },
          {
            title: "PO2",
            value: co.PO2 ? co.PO2 : null,
          },
          {
            title: "PO3",
            value: co.PO3 ? co.PO3 : null,
          },
          {
            title: "PO4",
            value: co.PO4 ? co.PO4 : null,
          },
          {
            title: "PO5",
            value: co.PO5 ? co.PO5 : null,
          },
          {
            title: "PO6",
            value: co.PO6 ? co.PO6 : null,
          },
          {
            title: "PO7",
            value: co.PO7 ? co.PO7 : null,
          },
          {
            title: "PO8",
            value: co.PO8 ? co.PO8 : null,
          },
          {
            title: "PO9",
            value: co.PO9 ? co.PO9 : null,
          },
          {
            title: "PO10",
            value: co.PO10 ? co.PO10 : null,
          },
          {
            title: "PO11",
            value: co.PO11 ? co.PO11 : null,
          },
          {
            title: "PO12",
            value: co.PO12 ? co.PO12 : null,
          },
          {
            title: "PSO1",
            value: co.PSO1 ? co.PSO1 : null,
          },
          {
            title: "PSO2",
            value: co.PSO2 ? co.PSO2 : null,
          },
          {
            title: "PSO3",
            value: co.PSO3 ? co.PSO3 : null,
          },
          {
            title: "PSO4",
            value: co.PSO4 ? co.PSO4 : null,
          },
        ],
      };
    });
  };

  const onSaveClickListener = async () => {
    if (
      data.length > 0 &&
      subjectName !== "" &&
      subjectCode !== "" &&
      year !== "" &&
      semester !== ""
    ) {
      const body = {
        year: year,
        semester: semester,
        subjectName: subjectName,
        subjectCode: subjectCode,
        attainment: transform(data),
      };
      const res = await createNewSubject(body);
      if (res.status === "success") {
        alert("Subject Created Successfully");
        props.history.push("/admin/subjects");
      } else {
        alert("Subject Creation Failed");
      }
      console.log(body);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words mb-4 bg-white w-full  shadow-lg rounded">
        <div className="flex flex-wrap my-6">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Year
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g. TE"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Semester
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="e.g. 5"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subject name
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="e.g. Internet Programming"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subject code
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={subjectCode}
                onChange={(e) => setSubjectCode(e.target.value)}
                placeholder="e.g. ITC601"
              />
            </div>
          </div>
        </div>
      </div>
      <TableCoPo
        className={styles.table}
        data={data}
        onUpdate={coUpdateListener}
        columns={columns}
      />

      <div className="flex justify-center mt-10 px-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onSaveClickListener}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default CreateSubject;
