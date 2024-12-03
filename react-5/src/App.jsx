import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Movie Search</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
