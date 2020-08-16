import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

function Paginate({ totalItems, pageSize, currentPage, onPageChange }) {
  const numberOfPages = Math.ceil(totalItems / pageSize);
  //Dont render the pagination if there is only one page its confusing
  if (numberOfPages === 1) return null;

  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Paginate.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginate;
