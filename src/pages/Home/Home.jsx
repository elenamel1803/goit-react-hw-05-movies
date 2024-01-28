import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchTrendingMoviesApi } from 'services/RequestApi';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMoviesApi();
        // if (!data.length) return;
        console.log('data :>> ', data);
        setMovies(data);
        // setError(false);
      } catch (error) {
        // console.error(error);
        // if (!error) {
        toast.error('An error occurred while fetching reviews.');
        // setError(true);
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
      {isLoading && <Loader />}
      <h2>Trending today</h2>
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
