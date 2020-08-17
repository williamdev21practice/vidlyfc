import React from "react";

function ListGroup({
  items,
  valueProperty,
  textProperty,
  selectedItem,
  onItemSelect,
}) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty] || ""}
          className={
            selectedItem[textProperty] === item[textProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
