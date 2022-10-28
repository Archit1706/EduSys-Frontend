import React from "react";

const Table = ({ data, onUpdate, columns }) => {
  const headingStyle = {
    backgroundColor: "#6d28d9",
    fontSize: "1.2rem",
    padding: "10px",
    textAlign: "center",
    color: "white",
  };

  const customCellStyle = {
    borderRadius: "6px",
    boxShadow: "inset 1px 1px 3px #341f97",
    textAlign: "center",
    // color: "#341f97",
  };

  const cols = [];
  cols.push({
    title: "CO",
    field: "CO",
    cellStyle: customCellStyle,
  });
  columns.forEach((col) => {
    cols.push({
      title: col,
      field: col,
      type: "numeric",
      cellStyle: customCellStyle,
    });
  });
  return (
    <div>
      <MaterialTable
        title="Mapping of CO with PO:"
        columns={columns}
        data={data}
        options={{
          paging: false,
          search: false,
          headerStyle: headingStyle,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                onUpdate([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                onUpdate([...dataDelete]);

                resolve();
              }, 1000);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                onUpdate([...data, newData]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

export default Table;
