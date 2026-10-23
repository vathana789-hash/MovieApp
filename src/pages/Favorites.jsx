
import { useMovieContext } from "../contexts/FavoriteContext";
import MovieCard from "../Components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <div>
          <p className="favorites-subtitle">YOUR PERSONAL COLLECTION</p>
          <h1>
            My <span>Favorites</span>
          </h1>
          <p className="favorites-description">
            All the movies you love, in one place.
          </p>
        </div>

        <div className="favorites-count">
          <i className="bi bi-heart-fill"></i>
          <span>{favorites.length} Movies</span>
        </div>
      </div>

      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <div className="empty-heart">
            <i className="bi bi-heart"></i>
          </div>
          <h2>Your collection is empty</h2>
          <p>
            You haven't saved any movies yet. Explore movies and
            click the heart icon to add your favorites here.
          </p>
          <a href="/" className="explore-btn">
            <i className="bi bi-film"></i>
            Explore Movies
          </a>
        </div>
      )}
    </div>
  );
}

export default Favorites;
