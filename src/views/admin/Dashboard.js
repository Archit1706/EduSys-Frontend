import React, { useState, useEffect, useContext } from "react";
import { TeacherContext } from "context/TeacherContext";
import SelectSearch from "react-select-search";
import MaterialTable from "material-table";
import data from "./staticData";
import { AdminContext } from "context/AdminContext";

export default function Dashboard() {
  const headingStyle = {
    backgroundColor: "#341f97",
    fontSize: "0.8rem",
    textAlign: "center",
    color: "white",
    padding: "0.5rem 0.1rem",
    overflow: "wrap",
    multiline: "true",
  };
  const [selectedBatch, setSelectedBatch] = useState("");
  const { batches, fetchAllSubjectsAndBatches } = useContext(TeacherContext);
  const { fetchAllGradesOfBatch, grades } = useContext(AdminContext);
  useEffect(async () => {
    await fetchAllSubjectsAndBatches();
  }, []);

  useEffect(async () => {
    if (selectedBatch !== "") {
      const batch = batches.find((batch) => batch.value === selectedBatch);
      console.log(batch);
      if (batch) {
        const x = (
          (Number(batch.name) - 4).toString() +
          "-" +
          batch.name
        ).toString();
        console.log(typeof x);
        setCurBatch(x);
      }
      await fetchAllGradesOfBatch(selectedBatch);
    }
  }, [selectedBatch]);

  const customCellStyle = {
    fontSize: "0.8rem",
    textAlign: "center",
    padding: "0.5rem 0.1rem",
  };

  const [curBatch, setCurBatch] = useState("");

  const [columns, setColumns] = useState([
    {
      title: "Year",
      field: "year",
      cellStyle: customCellStyle,
    },
    {
      title: "Course",
      field: "course",
      cellStyle: customCellStyle,
    },
    {
      title: "PO1",
      field: "PO1",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO2",
      field: "PO2",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO3",
      field: "PO3",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO4",
      field: "PO4",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO5",
      field: "PO5",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO6",
      field: "PO6",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO7",
      field: "PO7",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO8",
      field: "PO8",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO9",
      field: "PO9",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO10",
      field: "PO10",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO11",
      field: "PO11",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PO12",
      field: "PO12",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO1",
      field: "PSO1",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO2",
      field: "PSO2",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO3",
      field: "PSO3",
      type: "numeric",
      cellStyle: customCellStyle,
    },
    {
      title: "PSO4",
      field: "PSO4",
      type: "numeric",
      cellStyle: customCellStyle,
    },
  ]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded">
        <div className="rounded-t mb-0 px-6 py-6 border-0 ">
          <div className="flex items-center justify-end z-10">
            <div className="pr-4 text-lg">Batch: </div>
            {batches.length > 0 && (
              <SelectSearch
                options={batches}
                onChange={(value) => setSelectedBatch(value)}
                placeholder={"Select batch"}
                search={true}
              />
            )}
          </div>
        </div>
        <div className="block w-full overflow-x-auto z-0">
          {grades.length > 0 && (
            <div>
              <MaterialTable
                title={"PO Attainment for AY " + curBatch + " Batch"}
                columns={columns}
                data={grades}
                options={{
                  paging: false,
                  search: false,
                  headerStyle: headingStyle,
                  tableLayout: "fixed",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
