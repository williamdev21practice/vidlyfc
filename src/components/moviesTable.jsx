import React from "react";
import Like from "./common/like";
import Table from "./common/table";

function MoviesTable({ data: movies, sortColumn, onDelete, onLike, onSort }) {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like isLiked={movie.isLiked} onLike={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default MoviesTable;
