import React from "react";

function TableHead({ columns, sortColumn, onSort }) {
  const raiseSort = (path) => {
    let order = "";
    if (sortColumn.path === path) {
      order = sortColumn.order === "asc" ? "desc" : "asc";
      return { path, order };
    }

    return { path, order: "asc" };
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            style={{ cursor: "pointer" }}
            key={column.path || column.key}
            onClick={() => onSort(raiseSort(column.path))}
          >
            {column.label}{" "}
            {sortColumn.path === column.path &&
              (sortColumn.order === "asc" ? (
                <i className={`fa fa-sort-asc`} aria-hidden="true"></i>
              ) : (
                <i className={`fa fa-sort-desc`} aria-hidden="true"></i>
              ))}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
