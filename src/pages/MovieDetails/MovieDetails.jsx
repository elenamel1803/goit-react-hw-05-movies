import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetailsApi } from 'services/RequestApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        if (!movieId) return;
        const data = await fetchMovieDetailsApi(movieId);
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

  const { title, overview, genres, poster_path, vote_average } = movie;

  const genresList = genres
    ? genres.map(genre => genre.name).join(', ')
    : 'No genres available';

  const popularity = Math.round(vote_average * 10);

  return (
    <>
      {isLoading && <Loader />}
      <Link to={backLink.current}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={title}
          width="300"
        />

        <h1>{title}</h1>
        <p>User Score: {popularity}%</p>
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
