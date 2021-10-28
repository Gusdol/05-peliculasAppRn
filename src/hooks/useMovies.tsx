import {useEffect, useState} from 'react';
import movieDB from '../api/MovieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
export const useMovies = () => {
  const [isLoagind, setIsLoagind] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    // crea un tipado extricto que le dice que todo lo que esta en moviedbnowplaying es lo que esta permitido usar
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    // para ejecutar de manera simultanea el metodo promise ejecuta todo de manera simultanea
    const respuesta = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: respuesta[0].data.results,
      popular: respuesta[1].data.results,
      topRated: respuesta[2].data.results,
      upcoming: respuesta[3].data.results,
    });
    setIsLoagind(false);
  };
  useEffect(() => {
    // now playing
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoagind,
  };
};
