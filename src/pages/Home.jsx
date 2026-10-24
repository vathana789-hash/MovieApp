
import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import MovieSlider from "../Components/MovieSlider";
import { searchMovie, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setError(null);

        const popular = await getPopularMovies();

        setPopularMovies(
          Array.isArray(popular) ? popular : []
        );
        setMovies(
          Array.isArray(popular) ? popular : []
        );
      } catch (err) {
        console.error("Popular movies error:", err);
        setError("Failed to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Search movies
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim() || loading) return;

    try {
      setLoading(true);
      setError(null);

      const results = await searchMovie(searchQuery.trim());

      if (Array.isArray(results)) {
        setMovies(results);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to search movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          type="submit"
          className="search-button"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Movie Slider */}
      <MovieSlider movies={popularMovies} />

      {/* Error Message */}
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      {/* Movies */}
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            !error && <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
