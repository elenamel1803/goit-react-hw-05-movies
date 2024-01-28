import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMoviesApi } from 'services/RequestApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const movieName = searchParams.get('movieName') ?? '';

  const updateQueryString = ({ target }) => {
    const searchValue = target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieName: searchValue });
  };

  // const handleChange = ({ target }) => setSearchParams(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams('movieName');
  };

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMoviesApi(movieName);
        // if (!data.length) return;
        console.log('data :>> ', data);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovies();
  }, [movieName]);

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieName}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
