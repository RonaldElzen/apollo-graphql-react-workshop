import React from "react";
import { Movie } from "../../models/Movie";
import "./style.scss";
interface Props {
  movies: Movie[];
}

function MoviesPage({ movies }: Props) {
  const mapBookitems = () => {
    return movies.map((movie: Movie) => {
      return (
        <div className="movie-item" key={movie.title}>
          <h3>{movie.title}</h3>
          <ul>
            <li>{movie.price}</li>
            <li>{movie.genre}</li>
            <li>{movie.description}</li>
          </ul>
        </div>
      );
    });
  };

  return <div className="movie-items">{mapBookitems()}</div>;
}
export default MoviesPage;
