import React, { useState, useEffect } from "react";
import Like from "./common/like";
import Paginate from "./common/paginate";
import { paginate } from "./utils/paginate";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((mov) => mov._id !== movie._id);
    setMovies(filteredMovies);
  };

  const handleLike = (movie) => {
    const index = movies.findIndex((m) => m._id === movie._id);
    const copyMovies = [...movies];
    copyMovies[index] = { ...movie, isLiked: !movie.isLiked };
    setMovies(copyMovies);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const movies = [
      {
        _id: 1,
        title: "The Terminator",
        genre: { _id: 1, name: "Action" },
        numberInStock: 5,
        dailyRentalrate: 2.5,
        isLiked: false,
      },
      {
        _id: 2,
        title: "Die Hardr",
        genre: { _id: 1, name: "Action" },
        numberInStock: 15,
        dailyRentalrate: 3.5,
        isLiked: false,
      },
      {
        _id: 3,
        title: "Trip to Italy",
        genre: { _id: 2, name: "Comedy" },
        numberInStock: 25,
        dailyRentalrate: 1.5,
        isLiked: true,
      },
      {
        _id: 4,
        title: "Get Out",
        genre: { _id: 4, name: "Thriller" },
        numberInStock: 3,
        dailyRentalrate: 2.5,
        isLiked: false,
      },
      {
        _id: 5,
        title: "The Terminator 2 ",
        genre: { _id: 1, name: "Action" },
        numberInStock: 5,
        dailyRentalrate: 1.5,
        isLiked: true,
      },
      {
        _id: 6,
        title: "The Prestige",
        genre: { _id: 4, name: "Thriller" },
        numberInStock: 25,
        dailyRentalrate: 4.5,
        isLiked: false,
      },
      {
        _id: 7,
        title: "Stone",
        genre: { _id: 3, name: "Drama" },
        numberInStock: 16,
        dailyRentalrate: 1.5,
        isLiked: false,
      },
    ];
    setMovies(movies);
  }, []);

  const count = movies.length;

  if (count === 0) return <p>No movies to display!</p>;

  const moviesToDisplay = paginate(movies, currentPage, pageSize);
  console.log(moviesToDisplay);
  return (
    <div className="row">
      <p>Showing {count} movies</p>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesToDisplay.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalrate}</td>
              <td>
                <Like
                  isLiked={movie.isLiked}
                  onLike={() => handleLike(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate
        totalItems={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Movies;
