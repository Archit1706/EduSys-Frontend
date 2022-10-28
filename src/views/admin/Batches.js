import React, { useState, useEffect, useContext } from "react";
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
  padding: "10px",
  textAlign: "center",
  color: "white",
};

const customCellStyle = {
  textAlign: "center",
  // color: "rgb(109 40 217)",
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

const Batches = () => {
  const { fetchAllBatches, batches, setBatches } = useContext(AdminContext);

  useEffect(async () => {
    await fetchAllBatches();
  }, []);

  const [columns, setColumns] = useState([
    {
      title: "Batch Code",
      field: "batchCode",
    },
    { title: "Start Year", field: "startYear" },
    { title: "End Year", field: "endYear" },
    {
      title: "Status",
      field: "isActive",
      lookup: { 0: "Inactive", 1: "Active" },
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        {batches.length > 0 && (
          <MaterialTable
            title="Batches"
            columns={columns}
            data={batches}
            icons={tableIcons}
            options={{
              paging: false,
              headerStyle: headingStyle,
              cellStyle: customCellStyle,
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setBatches([...batches, newData]);

                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...batches];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setBatches([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...batches];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setBatches([...dataDelete]);

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

export default Batches;
