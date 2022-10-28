import { TeacherContext } from "context/TeacherContext";
import React, { useContext, useState, useEffect } from "react";
import SelectSearch from "react-select-search";
import { useHistory } from "react-router-dom";
import "./AssignSubject.css";

const AssignSubject = () => {
  const {
    subjects,
    batches,
    fetchAllSubjectsAndBatches,
    assignSubjectToTeacher,
  } = useContext(TeacherContext);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const history = useHistory();

  useEffect(async () => {
    await fetchAllSubjectsAndBatches();
  }, []);

  const onAssignClickListener = async () => {
    if (selectedSubject === "" || selectedBatch === "") {
      alert("Please select a subject and a batch");
      return;
    }
    const body = {
      subject: selectedSubject,
      batch: selectedBatch,
      teacher: localStorage.getItem("userId"),
    };
    const res = await assignSubjectToTeacher(body);
    if (res.status === "success") {
      alert("Subject assigned successfully");
      history.push("/teacher/dashboard");
    } else {
      const msg = res.message || "Something went wrong";
      alert(msg);
    }
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-10 h-[500px]"
        }
      >
        <div className="rounded-t mb-0 mt-2 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex flex-row justify-between">
              <h3 className={"font-semibold text-lg"}>Assign subject</h3>
            </div>
            <div className="mt-8 w-full">
              <div className=" w-full flex flex-row justify-between items-center px-8 py-4">
                <div>Subject: </div>
                {subjects.length > 0 && (
                  <SelectSearch
                    options={subjects}
                    onChange={(value) => setSelectedSubject(value)}
                    placeholder={"Select subject"}
                    search={true}
                  />
                )}
              </div>
              <div className=" w-full flex flex-row justify-between items-center px-8 py-4">
                <div>Batch: </div>
                {batches.length > 0 && (
                  <SelectSearch
                    options={batches}
                    onChange={(value) => setSelectedBatch(value)}
                    placeholder={"Select batch"}
                    search={true}
                  />
                )}
              </div>
              <div className="w-full items-center justify-center flex mt-4">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={onAssignClickListener}
                >
                  Assign to yourself
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignSubject;
