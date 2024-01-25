import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetailsApi } from 'services/RequestApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetailsApi(movieId);
        // if (!data.length) return;
        console.log('data :>> ', data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { title, overview, genres, poster_path } = movie;

  const genresList = genres
    ? genres.map(genre => genre.name).join(', ')
    : 'No genres available';

  return (
    <>
      {isLoading && <Loader />}
      <div>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        )}

        <h1>{title}</h1>
        <p>User Score: %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genresList}</p>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
