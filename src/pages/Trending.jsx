
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { getTrendingMovies } from "../services/api";
import "../css/Trending.css";

function Trending() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (err) {
        console.error("Trending movies error:", err);
        setError("Failed to load trending movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  return (
    <div className="trending-page">
      <header className="trending-header">
        <div className="trending-heading">
          <span className="trending-label">
            <i className="bi bi-fire"></i> WHAT'S HOT
          </span>

          <h1>
            Trending <span>Movies</span>
          </h1>

          <p>Discover the movies everyone is talking about this week.</p>
        </div>

        <div className="trending-badge">
          <i className="bi bi-graph-up-arrow"></i>
          This Week
        </div>
      </header>

      {loading && (
        <div className="trending-message">
          <div className="trending-spinner"></div>
          <p>Loading trending movies...</p>
        </div>
      )}

      {!loading && error && (
        <div className="trending-message trending-error">
          <i className="bi bi-exclamation-circle"></i>
          <p>{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="trending-message">
          <p>No trending movies found.</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <div className="trending-results">
            <p>
              Discover what's popular right now
            </p>
            <span>{movies.length} movies</span>
          </div>

          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Trending;
