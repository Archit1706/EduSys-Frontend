import React from "react";
import PropTypes from "prop-types";
import subjects from "../../subjectData";
import Calculation from "views/teacher/Calculation";
import { Link, useHistory } from "react-router-dom";
// components

export default function NewTable({
  title,
  data,
  columns,
  onAddClick,
  onEditClick,
  onViewClick,
}) {
  const color = "light";
  console.log(columns);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
        }
        key={data.id}
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex flex-row justify-between">
              <h3 className={"font-semibold text-lg text-blueGray-700 "}>
                {title}
              </h3>
              <button
                onClick={onAddClick}
                className="bg-lightBlue-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
              >
                New +
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle w-full border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Subject
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Code
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Semester
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Year
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, key) => {
                const name = ele.subjectName;
                return (
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>
                      {"     "}
                      <span
                        className={
                          "ml-2 font-semibold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                      {ele.subjectCode}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                      {ele.semester}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                      {ele.year}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4">
                      <div>
                        <button
                          type="button"
                          class={`inline-block px-6 py-2 bg-emerald-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mr-4`}
                          onClick={() => onEditClick(ele)}
                          value={key}
                          // onClick={(e) => console.log(this, e.target.value)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class={` inline-block px-6 py-2 bg-lightBlue-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out`}
                          onClick={() => onViewClick(ele)}
                          value={key}
                          // onClick={(e) => console.log(this, e.target.value)}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {data.length == 0 && (
            <div className="flex justify-center items-center h-64 my-4">
              <h3 className="text-l font-semibold">No data found</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
