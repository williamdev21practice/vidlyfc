import React from "react";

import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";

function MoviesTable({ data, columnsLabel, onDelete, onLike }) {
  return (
    <div>
      <p>Showing {data.length} movies</p>
      <table className="table table-bordered table-striped">
        <TableHead columnsLabel={columnsLabel} />
        <TableBody data={data} onDelete={onDelete} onLike={onLike} />
      </table>
    </div>
  );
}

export default MoviesTable;
