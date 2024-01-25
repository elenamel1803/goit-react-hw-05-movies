import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMoviesApi } from 'services/RequestApi';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMoviesApi();
        // if (!data.length) return;
        console.log('data :>> ', data);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  // const toggleState = key => {
  //   switch (key) {
  //     case 'isLoading':
  //       setIsLoading(prevState => !prevState);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
