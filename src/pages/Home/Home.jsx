import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { errorMessage } from 'services/Notiflix';
import { fetchTrendingMoviesApi } from 'services/RequestApi';
import { Title } from './Home.styled';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMoviesApi();
        setMovies(data);
        console.log('data :>> ', data);
      } catch (error) {
        errorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>Trending today</Title>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
