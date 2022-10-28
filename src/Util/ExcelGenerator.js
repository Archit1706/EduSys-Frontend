const XLSX = require('xlsx');

const batch = "2020-2024";
const courseID = "CS-101";
const courseName = "Introduction to Computer Science";
const coursseObjectives = {
    1: "Understand the basic concepts of computer science",
    2: "Understand the basic concepts of computer science",
    3: "Understand the basic concepts of computer science",
    4: "Understand the basic concepts of computer science",
    5: "Understand the basic concepts of computer science",
    6: "Understand the basic concepts of computer science",
}
const courseOutcomes = {
    1: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    },
    2: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    },
    3: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    },
    4: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    },
    5: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    },
    6: {
        CO: "Understand the basic concepts of computer science",
        PO: "PO1, PO2, PO3",
        PSO: "PSO1",
    }
}

const COX1 = 3;
const COX2 = [3, 3, 3, 3, 3, 3];
const COY2 = [3, 3, 3, 3, 3, 3];

const worksheet = XLSX.utils.json_to_sheet([
    { A: "", B: "Thadomal Shahani Engineering College" },
    { A: "", B: "Information Technology Department" },
    { A: "", B: batch },
    {},
    {A: "", B: courseID + ": " + courseName},
    {},
    { A: "", B: "Sr. No.", C: "Course Objectives" },
    { A: "", B: 1, C: coursseObjectives[1] },
    { A: "", B: 2, C: coursseObjectives[2] },
    { A: "", B: 3, C: coursseObjectives[3] },
    { A: "", B: 4, C: coursseObjectives[4] },
    { A: "", B: 5, C: coursseObjectives[5] },
    { A: "", B: 6, C: coursseObjectives[6] },
    {},
    { A: "", B: "Course Outcomes: On successful completion, of course, learner/student will be able to"},
    {},
    { A: "", B: "Sr. No.", C: "Course Outcomes", D: "PO", E: "PSO" },
    
    { A: "", B: courseID + ".1", C: courseOutcomes[1].CO, D: courseOutcomes[1].PO, E: courseOutcomes[1].PSO },
    { A: "", B: courseID + ".2", C: courseOutcomes[2].CO, D: courseOutcomes[2].PO, E: courseOutcomes[2].PSO },
    { A: "", B: courseID + ".3", C: courseOutcomes[3].CO, D: courseOutcomes[3].PO, E: courseOutcomes[3].PSO },
    { A: "", B: courseID + ".4", C: courseOutcomes[4].CO, D: courseOutcomes[4].PO, E: courseOutcomes[4].PSO },
    { A: "", B: courseID + ".5", C: courseOutcomes[5].CO, D: courseOutcomes[5].PO, E: courseOutcomes[5].PSO },
    { A: "", B: courseID + ".6", C: courseOutcomes[6].CO, D: courseOutcomes[6].PO, E: courseOutcomes[6].PSO },
    {},
    { A: "", B: "Mapping of CO with PO and PSO" },
    {},
    { A: "", B: "CO", C: "PO1", D: "PO2", E: "PO3", F: "PO4", G: "PO5", H: "PO6", I: "PO7", J: "PO8", K: "PO9", L: "PO10", M: "PO11", N: "PO12", O: "PSO1", P: "PSO2", Q: "PSO3", R: "PSO4" }, 
    {},
    { A: "", B: "Correlation Levels: 	1: Slightly 		2: Moderately 	3: Substantially" },
    // {},
    // { A: "", B: "Contribution to outcomes will be achieved through content delivery:" },
    {},
    { A: "", B: "Attainment of Course Outcomes through University Exam: X1" },
    {},
    { A: "", B: "CO No.", C: "Course Outcome", D: "Attainment" },
    { A: "", B: courseID + ".1", C: courseName, D: COX1 },
    {},
    { A: "", B: "Attainment of Course Outcomes through Internal Assessment: X2"},
    {},
    { A: "", B: "CO No.", C: "Course Outcome", D: "Attainment" },
    { A: "", B: courseID + ".1", C: courseOutcomes[1].CO, D: COX2[0] },
    { A: "", B: courseID + ".2", C: courseOutcomes[2].CO, D: COX2[1] },
    { A: "", B: courseID + ".3", C: courseOutcomes[3].CO, D: COX2[2] },
    { A: "", B: courseID + ".4", C: courseOutcomes[4].CO, D: COX2[3] },
    { A: "", B: courseID + ".5", C: courseOutcomes[5].CO, D: COX2[4] },
    { A: "", B: courseID + ".6", C: courseOutcomes[6].CO, D: COX2[5] },
    {},
    { A: "", B: "Attainment of Course Outcomes through Course Exit Survey(Y2):"},
    {},
    { A: "", B: "CO No.", C: "Course Outcome", D: "Attainment" },
    { A: "", B: courseID + ".1", C: courseOutcomes[1].CO, D: COY2[0] },
    { A: "", B: courseID + ".2", C: courseOutcomes[2].CO, D: COY2[1] },
    { A: "", B: courseID + ".3", C: courseOutcomes[3].CO, D: COY2[2] },
    { A: "", B: courseID + ".4", C: courseOutcomes[4].CO, D: COY2[3] },
    { A: "", B: courseID + ".5", C: courseOutcomes[5].CO, D: COY2[4] },
    { A: "", B: courseID + ".6", C: courseOutcomes[6].CO, D: COY2[5] },
    { A: "", B: courseID, C: "", D: "Average"},
    {},
    // { A: "", B: "Contribution to Program Outcome through Direct Method(Y1) and Indirect Method (Y2):"},
    // {},
    // { A: "", B: "Program Outcome", C: "Attainment through University Examination X1", D: "Attainment through Internal Assessment X2", E: "Overall Attainment Y1=(0.8X1+0.2X2)", F: "Attainment through Course Exit Survey (Y2)" },



], { header: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"], skipHeader: true });
console.log(worksheet);


const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
XLSX.writeFile(workbook, "test.xlsx");