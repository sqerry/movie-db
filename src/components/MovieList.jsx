import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/movies.json"
        );
        const { movies } = await response.json();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <ul className="movies__list">
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.title}
          title={movie.title}
          description={movie.description}
          episodeNumber={movie.episode_number}
        />
      ))}
    </ul>
  );
};

export default MovieList;
