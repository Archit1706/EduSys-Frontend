import React, { useContext, useState, useEffect } from "react";
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
import { AdminContext } from "context/AdminContext";

const headingStyle = {
  backgroundColor: "#341f97",
  fontSize: "1.2rem",
  // padding: "10px",
  textAlign: "center",
  color: "white",
};

const customCellStyle = {
  borderRadius: "6px",
  // boxShadow: "inset 1px 1px 3px #341f97",
  textAlign: "center",
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
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const styles = {
  container: `m-8 flex`,
  head: ``,
  table: `w-full`,
  teachers: ``,
};

const Teachers = () => {
  const { teachers, fetchTeachers, setTeachers } = useContext(AdminContext);

  useEffect(async () => {
    await fetchTeachers();
    console.log(teachers);
  }, []);
  const [columns, setColumns] = useState([
    {
      title: "Name",
      field: "name",
      cellStyle: customCellStyle,
    },
    // { title: "Batch", field: "year" },
    { title: "Subjects", field: "subjects" },
    {
      title: "Status",
      field: "isActive",
      lookup: { 0: "Inactive", 1: "Active" },
    },
  ]);

  return (
    <div className={styles.container}>
      {/* <div className={styles.head}>
                <h1 className={styles.title}>Teachers</h1>
            </div> */}
      <div className={styles.table}>
        {teachers.length > 0 && (
          <MaterialTable
            title="Teachers"
            columns={columns}
            data={teachers}
            icons={tableIcons}
            options={{
              paging: false,
              headerStyle: headingStyle,
              cellStyle: customCellStyle,
            }}
            actions={[
              {
                icon: () => <AddBox style={{ color: "#0ea5e9" }} />,
                tooltip: "Add Row",
                // This makes add button to appear in table toolbar instead for each row
                isFreeAction: true,
                onClick: (event, rowData) => {
                  console.log("You want to add a new row");
                },
              },
            ]}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...teachers];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setTeachers([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...teachers];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setTeachers([...dataDelete]);

                    resolve();
                  }, 1000);
                }),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Teachers;
