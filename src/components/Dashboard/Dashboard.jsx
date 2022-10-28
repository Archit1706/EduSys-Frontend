import React, { useState } from "react";
import TableCoPo from "./TableCoPo";
import TableExitSurvey from "./TableExitSurvey";
import TablePt from "./TablePt";
import TableUni from "./TableUni";
import { getFinalAttainment } from "../../Util/Calculations";
import TableFinalAttainment from "./TableFinalAttainment";
import "./Dashboard.css";
import isOpen from "../Sidebar2/Sidebar";


const styles = {
    dash: `m-5 w-[90%]`,
    dashboard: ``,
    buttonDiv: `flex items-center justify-center`,
    button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded`,
    table: `rounded-md mb-5`
};

const Dashboard = () => {
  const [data, setData] = useState([
    {
      CO: "CO1",
      PO1: 3,
      PO2: 3,
      PO3: null,
      PO4: 3,
      PO5: null,
      PO6: null,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: null,
    },
    {
      CO: "CO2",
      PO1: null,
      PO2: null,
      PO3: 3,
      PO4: null,
      PO5: null,
      PO6: null,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: 3,
    },
    {
      CO: "CO3",
      PO1: 3,
      PO2: 3,
      PO3: null,
      PO4: 3,
      PO5: null,
      PO6: null,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: null,
    },
    {
      CO: "CO4",
      PO1: null,
      PO2: null,
      PO3: null,
      PO4: 3,
      PO5: null,
      PO6: 3,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: 3,
    },
    {
      CO: "CO5",
      PO1: 3,
      PO2: 3,
      PO3: null,
      PO4: 2,
      PO5: null,
      PO6: 2,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: 3,
    },
    {
      CO: "CO6",
      PO1: null,
      PO2: null,
      PO3: 3,
      PO4: null,
      PO5: null,
      PO6: null,
      PO7: null,
      PO8: null,
      PO9: null,
      PO10: null,
      PO11: null,
      PO12: 3,
    },
  ]);

  const coUpdateListener = (cos) => {
    setData(cos);
    console.log(cos);
  };

  const [uniAtt, setUniAtt] = useState([
    {
      "CO No.": "ITC501",
      Course: "Internet Programming",
      Attainment: 3,
    },
  ]);

  const uniUpdateListener = (att) => {
    setUniAtt(att);
  };

  const [ptAtt, setPtAtt] = useState([
    {
      "CO No.": "ITC501.1",
      "Course Outcome":
        "Select protocols or technologies required for various web applications.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.2",
      "Course Outcome": "Apply JavaScript to add functionality to web pages.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.3",
      "Course Outcome": "Design front end application using basic React.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.4",
      "Course Outcome":
        "Design front end applications using functional components of React.",
      Attainment: 2,
    },
    {
      "CO No.": "ITC501.5",
      "Course Outcome": "Design back-end applications using Node.js.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.6",
      "Course Outcome":
        "Construct web based Node.js applications using Express.",
      Attainment: 2,
    },
  ]);

  const ptUpdateListener = (att) => {
    setPtAtt(att);
  };

  const [exitAtt, setExitAtt] = useState([
    {
      "CO No.": "ITC501.1",
      "Course Outcome":
        "Select protocols or technologies required for various web applications.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.2",
      "Course Outcome": "Apply JavaScript to add functionality to web pages.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.3",
      "Course Outcome": "Design front end application using basic React.",
      Attainment: 2,
    },
    {
      "CO No.": "ITC501.4",
      "Course Outcome":
        "Design front end applications using functional components of React.",
      Attainment: 3,
    },
    {
      "CO No.": "ITC501.5",
      "Course Outcome": "Design back-end applications using Node.js.",
      Attainment: 2,
    },
    {
      "CO No.": "ITC501.6",
      "Course Outcome":
        "Construct web based Node.js applications using Express.",
      Attainment: 3,
    },
  ]);

  const exitAttUpdateListener = (att) => {
    setExitAtt(att);
  };
  const [finalAtt, setfinalAtt] = useState([]);

  const onCalculateClickListener = () => {
    const res = getFinalAttainment(data, uniAtt, ptAtt, exitAtt);
    setfinalAtt(res);
  };

  return (
      <div className={`${styles.dash}`}>
          <div className={styles.dashboard}>
              <TableCoPo
                  className={styles.table}
                  data={data}
                  onUpdate={coUpdateListener}
              />
              <TableUni
                  className={styles.table}
                  data={uniAtt}
                  onUpdate={uniUpdateListener}
              />
              <TablePt
                  className={styles.table}
                  data={ptAtt}
                  onUpdate={ptUpdateListener}
              />
              <TableExitSurvey
                  className={styles.table}
                  data={exitAtt}
                  onUpdate={exitAttUpdateListener}
              />
              <div class={styles.buttonDiv}>
                  <button
                      class={styles.button}
                      onClick={onCalculateClickListener}
                  >
                      Calculate
                  </button>
              </div>
              <TableFinalAttainment className={styles.table} data={finalAtt} />
          </div>
      </div>
  );
};

export default Dashboard;
