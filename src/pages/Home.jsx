import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard"
import { searchMovie, getPopularMovies } from "../services/api";
import "../css/Home.css";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies when the page opens
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        setError(null);

        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
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

    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      setLoading(true);
      setError(null);

      const searchResults = await searchMovie(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
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
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

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
