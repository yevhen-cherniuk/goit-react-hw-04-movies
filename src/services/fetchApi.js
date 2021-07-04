import axios from "axios";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/week?api_key=5b7428e2f2c6d500beef97c1ed815f41",
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=5b7428e2f2c6d500beef97c1ed815f41`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url:
      "https://api.themoviedb.org/3/search/movie?api_key=5b7428e2f2c6d500beef97c1ed815f41&query=" +
      query,
  });
}

function getCastInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5b7428e2f2c6d500beef97c1ed815f41`
  );
}

function getReviewsInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5b7428e2f2c6d500beef97c1ed815f41`
  );
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};