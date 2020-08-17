import React from "react";
import Like from "./like";

function TableBody({ data, onDelete, onLike }) {
  return (
    <tbody>
      {data.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalrate}</td>
          <td>
            <Like isLiked={movie.isLiked} onLike={() => onLike(movie)} />
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => onDelete(movie)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
