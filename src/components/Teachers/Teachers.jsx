import React, { useState } from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const headingStyle = {
    backgroundColor: "#341f97",
    // fontSize: "1.2rem",
    // padding: "10px",
    textAlign: "center",
    color: "white",
};

const customCellStyle = {
    borderRadius: "6px",
    boxShadow: "inset 1px 1px 3px #341f97",
    textAlign: "right",
    // color: "#341f97",
};

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const styles = {
    container: `m-8 flex`,
    head: ``,
    table: `w-full`,
    teachers: ``,
};

const Teachers = () => {
    const [columns, setColumns] = useState([
        {
            title: "Name",
            field: "name",
        },
        { title: "Year", field: "year", },
        { title: "Subject ID", field: "subjectID", },
        {
            title: "Status",
            field: "status",
            lookup: { 34: "Inactive", 63: "Active" },
        },
    ]);

    const [data, setData] = useState([
        { name: "Dr. Arun Kulkarni", year: "SE", subjectID: "IT-101", status: 34 },
        { name: "Prof. Kumkum Saxena", year: "TE", subjectID: "IT-301", status: 63 },
        { name: "Prof. Sanober Shaikh", year: "TE", subjectID: "IT-151", status: 34 },
    ]);

    return (
        <div className={styles.container}>
            {/* <div className={styles.head}>
                <h1 className={styles.title}>Teachers</h1>
            </div> */}
            <div className={styles.table}>
                <MaterialTable
                    title="Teachers"
                    columns={columns}
                    data={data}
                    icons={tableIcons}
                    options={{
                        paging: false,
                        headerStyle: headingStyle,
                    }}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    setData([...data, newData]);

                                    resolve();
                                }, 1000);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);

                                    resolve();
                                }, 1000);
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);

                                    resolve();
                                }, 1000);
                            }),
                    }}
                />
            </div>
        </div>
    );
};

export default Teachers;