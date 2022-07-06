import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '3e6b5a16db2403137fa9f14ae47f28f4';

export const getCountries = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const data1 = data.results;
  const countries = data1.map(({ id, original_title }) => ({
    id: id,
    original_title: original_title,
  }));

  return countries;
};

export const fetchCountry = async name => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${name}&page=1`
  );
  const data1 = data.results;

  const movies = data1.map(({ id, original_title }) => ({
    id: id,
    original_title: original_title,
  }));
  return movies;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
  const movie = data;
  return movie;
};

export const getMovieCredits = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  const movie = data;
  return movie;
};

export const getMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  const movie = data;
  return movie;
};

// export const getMovieCredits = async movie_id => {
//   const { data } = await axios.get(
//     `/movie/${movie_id}/credits?api_key=${API_KEY}`
//   );
//   const data1 = data.results;
//   const countries = data1.map(({ id, original_title }) => ({
//     id: id,
//     original_title: original_title,
//   }));

//   return countries;
// };

// export const getMovieReviews = async movie_id => {
//   const { data } = await axios.get(
//     `/movie/${movie_id}/reviews?api_key=${API_KEY}`
//   );
//   const data1 = data.results;
//   const countries = data1.map(({ id, original_title }) => ({
//     id: id,
//     original_title: original_title,
//   }));

//   return countries;
// };

// export async function fetchMovieDetails(movie_id) {
//   return await axios(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
// }

// export async function fetchMovieCredits(movie_id) {
//   return await axios(
//     `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
//   );
// }

// export async function fetchMovieReviews(movie_id) {
//   return await axios(
//     `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );
// }
