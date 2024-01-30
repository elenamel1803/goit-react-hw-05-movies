import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { errorMessage } from 'services/Notiflix';
import { fetchSearchMoviesApi } from 'services/RequestApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMoviesApi(query);
        if (!data.length) {
          errorMessage();
        }
        setMovies(data);
      } catch (error) {
        errorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovies();
  }, [query]);

  return (
    <>
      <SearchMoviesForm setSearchParams={setSearchParams} />
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
