import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetailsApi } from 'services/RequestApi';
import Loader from 'components/Loader/Loader';
import MovieInformation from 'components/MovieInformation/MovieInformation';
import { LinkGoBack } from './MovieDetails.styled';
import { errorMessage } from 'services/Notiflix';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetailsApi(movieId);
        setMovie(data);
      } catch (error) {
        errorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <LinkGoBack to={backLink.current}>Go back</LinkGoBack>
      {(isLoading && <Loader />) || <MovieInformation movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
