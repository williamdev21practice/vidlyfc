import React, { useState, useEffect } from "react";
import Like from "./common/like";
import Paginate from "./common/paginate";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";

function Movies(props) {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState({});

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

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  useEffect(() => {
    const genres = [
      { _id: 1, name: "Action" },
      { _id: 2, name: "Comedy" },
      { _id: 3, name: "Drama" },
      { _id: 4, name: "Thriller" },
    ];
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
    setGenres([{ name: "All Genres" }, ...genres]);
  }, []);

  const filteredMovies =
    selectedGenre && selectedGenre._id
      ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
      : movies;

  const moviesToDisplay = paginate(filteredMovies, currentPage, pageSize);

  const count = filteredMovies.length;
  if (count === 0 && movies.length === 0) return <p>No movies to display!</p>;
  if (moviesToDisplay.length === 0) {
    //we have deleted the last item in the current page
    //but there is more item to display
    //automaticaly display the filtered items in the previous page
    if (currentPage > 1)
      setCurrentPage((prevCurrentpage) => prevCurrentpage - 1);
    //no more items within the selected genres
    //display the rest of items in the generic genre
    else setSelectedGenre({ name: "All Genres" });
  }
  return (
    <div className="row">
      <div className="col-md-3 mt-5">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
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
    </div>
  );
}

export default Movies;
