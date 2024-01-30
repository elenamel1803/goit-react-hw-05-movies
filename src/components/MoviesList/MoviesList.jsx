import { useLocation } from 'react-router-dom';
import { defaultImg } from 'services/defaultImg';
import {
  Img,
  MovieItem,
  MovieLink,
  MoviesGalleryList,
  Text,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <MoviesGalleryList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path && poster_path.length > 0
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={title}
              width="200"
            />
            <Text>{truncateText(title, 30)}</Text>
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesGalleryList>
  );
};

export default MoviesList;
