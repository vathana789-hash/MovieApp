
import React from "react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      icon: "bi-film",
      title: "Explore Movies",
      description:
        "Discover popular movies and find your next favorite film.",
    },
    {
      icon: "bi-search",
      title: "Smart Search",
      description:
        "Search for movies and explore information about different titles.",
    },
    {
      icon: "bi-heart",
      title: "Your Favorites",
      description:
        "Save your favorite movies and keep them organized in one place.",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Bootstrap 5",
    "TMDB API",
  ];

  return (
    <div className="bg-black text-white min-vh-100">
      {/* Hero */}
      <section className="container py-5">
        <div className="row g-5 py-lg-5 align-items-center">
          <div className="col-lg-7">
            <span className="px-3 py-2 mb-4 badge bg-danger rounded-pill">
              THE WORLD OF MOVIES
            </span>

            <h1 className="mb-4 fw-bold lh-1 display-2">
              More Than
              <br />
              Just <span className="text-danger">Movies.</span>
            </h1>

            <p className="mb-4 fs-5 text-secondary">
              Welcome to MovieApp, a place where movie lovers
              can discover exciting films, explore popular
              titles, and save the movies they love.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/" className="px-4 btn btn-danger btn-lg">
                Explore Movies
              </Link>

              <Link
                to="/favorites"
                className="px-4 btn btn-outline-light btn-lg"
              >
                My Favorites
              </Link>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="p-4 p-md-5 bg-dark border border-secondary rounded-4 text-center">
              <div className="mb-4 display-1">🎥</div>

              <h2 className="fw-bold">
                Your Movie Journey
              </h2>

              <p className="mb-0 text-secondary">
                Every movie tells a story.
                Find the stories you love.
              </p>

              <hr className="my-4 border-secondary" />

              <div className="d-flex justify-content-around">
                <div>
                  <h4 className="mb-1 text-danger fw-bold">
                    Discover
                  </h4>
                  <small className="text-secondary">
                    New stories
                  </small>
                </div>

                <div>
                  <h4 className="mb-1 text-danger fw-bold">
                    Enjoy
                  </h4>
                  <small className="text-secondary">
                    Great movies
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-5 bg-dark">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <p className="mb-2 text-danger fw-bold">
                WHO WE ARE
              </p>

              <h2 className="fw-bold display-5">
                Built for <span className="text-danger">Movie Lovers</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="mb-0 text-secondary fs-5">
                MovieApp is a movie discovery project built
                to make exploring films easier and more fun.
                Whether you enjoy action, comedy, romance,
                or adventure, you can use MovieApp to find
                something interesting to watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="mb-5 text-center">
          <p className="text-danger fw-bold">OUR FEATURES</p>

          <h2 className="fw-bold display-5">
            Everything You <span className="text-danger">Need</span>
          </h2>

          <p className="text-secondary">
            Simple tools for a better movie discovery experience.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-md-4" key={feature.title}>
              <div className="p-4 h-100 bg-dark border border-secondary rounded-4">
                <div
                  className="d-inline-flex p-3 mb-4 bg-danger rounded-3 align-items-center justify-content-center"
                >
                  <i className={`bi ${feature.icon} fs-3`}></i>
                </div>

                <h4 className="mb-3 fw-bold">
                  {feature.title}
                </h4>

                <p className="mb-0 text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="container pb-5">
        <div className="p-4 p-md-5 bg-dark border border-secondary rounded-4 text-center">
          <p className="text-danger fw-bold">OUR TECH STACK</p>

          <h2 className="mb-3 fw-bold">
            Made with Modern <span className="text-danger">Technology</span>
          </h2>

          <p className="mb-4 text-secondary">
            Built while learning and practicing frontend development.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="p-3 badge bg-black border border-secondary text-white fs-6"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* <div className="p-4 p-md-5 text-center bg-dark rounded-4 border border-secondary">
              <div
                className="d-inline-flex mb-4 rounded-circle bg-danger align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <i className="bi bi-person-fill display-3"></i>
              </div>

              <p className="text-danger fw-bold">
                MEET THE DEVELOPER
              </p>

              <h2 className="mb-3 fw-bold">
                Hi, I'm Vathana!
              </h2>

              <p className="text-secondary mb-4">
                I'm a beginner Frontend Developer who enjoys
                learning React, building websites, and turning
                ideas into real projects. MovieApp is part of
                my journey to becoming a better developer.
              </p>

              <a
                href="https://github.com/vathana789-hash/MovieApp"
                target="_blank"
                rel="noreferrer"
                className="px-4 btn btn-outline-light"
              >
                <i className="me-2 bi bi-github"></i>
                View My Project
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top border-secondary">
        <div className="container text-center">
          <p className="mb-0 text-secondary">
            © {new Date().getFullYear()} MovieApp.
            Made with <span className="text-danger">♥</span> by Vathana.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
