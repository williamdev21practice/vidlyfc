import React from "react";

function TableHead({ columnsLabel }) {
  return (
    <thead>
      <tr>
        {columnsLabel.map((column) => (
          <th>{column}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
