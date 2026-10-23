
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzFlNTZmODg0Yzc3ZDc2NGFkYzcxNTA1NmEzNDY2NiIsIm5iZiI6MTc5MjUxOTAzNy43MjcsInN1YiI6IjZhZDdhYjdkNTQ5YmU2Y2YzNDk2MDU3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwQQZNWM_kf964QRTPBsgz2TWegZpK2TLtd9z4QwgxM";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (url) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data = await response.json();
  return data.results;
};

export const getPopularMovies = () =>
  fetchMovies(`${BASE_URL}/movie/popular`);

export const searchMovie = (query) => {
  const url = new URL(`${BASE_URL}/search/movie`);
  url.searchParams.set("query", query);
  return fetchMovies(url);
};


export const getTrendingMovies = () => {
  return fetchMovies(`${BASE_URL}/trending/movie/week`);
};

