import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Fetch movies from TMDB API
  const fetchMovies = async (searchTerm) => {
    const API_KEY = "0232633004c4e190221795fa76d24ecf"; // Replace this with your actual API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
    
    try {
      const response = await axios.get(url);
      setResults(response.data.results); // Update the state with API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (query.trim()) {
      fetchMovies(query);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Seker Search</h1>
      </header>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.length > 0 ? (
          results.map((movie) => (
            <div key={movie.id} className="result-item">
              <h3>{movie.title}</h3>
              <p>{movie.overview || "No description available."}</p>
            </div>
          ))
        ) : (
          <p>No results found. Try searching for a different movie.</p>
        )}
      </div>
    </div>
  );
};

export default App;
