import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetailsApi } from 'services/RequestApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // toggleState('isLoading');
        const data = await fetchMovieDetailsApi(movieId);
        // if (!data.length) return;
        console.log('data :>> ', data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
      // finally {
      //   toggleState('isLoading');
      // }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <h2>MovieDetails: {movieId}</h2>

      <h2>{movie.title}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
