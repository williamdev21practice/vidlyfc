import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

function Table({ columns, data, sortColumn, onSort }) {
  return (
    <table className="table table-bordered table-striped">
      <TableHead columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
