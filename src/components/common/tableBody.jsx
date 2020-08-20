import React from "react";
import _ from "lodash";

function TableBody({ data, columns }) {
  const renderCell = (item, column) => {
    if (!column.content) return _.get(item, column.path);
    return column.content(item);
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={item._id + (column.path || column.key)}>
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
