import { Link } from "react-router-dom";

function MovieSlider({ movies = [] }) {
  const slides = movies
    .filter((movie) => movie.backdrop_path || movie.poster_path)
    .slice(0, 5);

  if (slides.length === 0) return null;

  return (
    <div
      id="movieCarousel"
      className="mb-5 carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
      data-bs-pause="false"
    >
      {/* Slide Indicators */}
      <div className="carousel-indicators">
        {slides.map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded-4 overflow-hidden">
        {slides.map((movie, index) => (
          <div
            key={movie.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="position-relative"
              style={{
                height: "450px",
                backgroundColor: "#151515",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w1280${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />

              {/* Dark Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.95), rgba(0,0,0,0.15)), linear-gradient(0deg, rgba(0,0,0,0.65), transparent)",
                }}
              />

              {/* Movie Information */}
              <div className="p-4 p-md-5 position-absolute bottom-0 start-0 w-100">
                <h1 className="text-white fw-bold display-5">
                  {movie.title}
                </h1>

                <p
                  className="mb-4 text-white"
                  style={{ maxWidth: "600px" }}
                >
                  {movie.overview
                    ? `${movie.overview.slice(0, 150)}${
                        movie.overview.length > 150 ? "..." : ""
                      }`
                    : "Discover this movie and explore more details."}
                </p>

                {/* <Link
                  to="/favorites"
                  className="px-4 btn btn-danger"
                >
                  <i className="me-2 bi bi-heart" />
                  View Favorites
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSlider;
