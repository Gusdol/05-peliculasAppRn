import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9b340e453985db79def4086eab037582',
    language: 'es-ES',
  },
});

export default movieDB;
