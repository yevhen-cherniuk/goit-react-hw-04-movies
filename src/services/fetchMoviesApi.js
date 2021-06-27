import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjc0MjhlMmYyYzZkNTAwYmVlZjk3YzFlZDgxNWY0MSIsInN1YiI6IjYwZDg3MzM1ODgwNTUxMDA0NTgzMDA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swTTa4QVuMYiC2f7ztl8UxO29YplZcXaGh8VddPvJiI";

const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day?");

  return response.data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?&language=en-US`);

  return response.data;
};

const fetchCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?&language=en-US`);

  return response.data.cast;
};

const fetchReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?&language=en-US&page=1`
  );
  return response.data.results;
};

const fetchSearch = async (searchQuery) => {
  const response = await axios.get(
    `/search/movie?&language=en-US&page=1&query=${searchQuery}`
  );
  return response.data.results;
};

export {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchSearch,
};