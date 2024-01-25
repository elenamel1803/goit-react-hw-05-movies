import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1a58fcece4729e6d5135f76aceb40c92';
const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMoviesApi = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);
  return data.results;
};

export const fetchSearchMoviesApi = async movieName => {
  const { data } = await axios.get(`/search/movie?query=${movieName}`, params);
  return data.results;
};

export const fetchMovieDetailsApi = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, params);
  return data;
};

export const fetchMovieCastApi = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, params);
  return data.cast;
};

export const fetchMovieReviewsApi = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, params);
  return data.results;
};
