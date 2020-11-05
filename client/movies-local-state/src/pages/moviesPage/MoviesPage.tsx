import React from "react";
import { Movie } from "../../models/Movie";
import "./style.scss";
interface Props {
  movies: Movie[];
  handleClick: (movie: Movie) => void;
  selectedMovies: Movie[];
}

function MoviesPage({ movies, handleClick, selectedMovies }: Props) {
  const mapBookitems = () => {
    console.log(selectedMovies);
    return movies.map((movie: Movie) => {
      return (
        <div className="movie-item" key={movie.title}>
          <h3>{movie.title}</h3>
          <ul>
            <li>{movie.price}</li>
            <li>{movie.genre}</li>
            <li>{movie.description}</li>
          </ul>
          <button onClick={() => handleClick(movie)}>
            {selectedMovies.some((movieItem) => movie.id === movieItem.id)
              ? "Remove"
              : "Add"}
          </button>
        </div>
      );
    });
  };

  return <div className="movie-items">{mapBookitems()}</div>;
}
export default MoviesPage;
