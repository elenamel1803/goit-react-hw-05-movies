import { Link } from 'react-router-dom';
import { defaultImg, defaultPoster } from 'services/defaultImg';

const MovieInformation = ({ movie }) => {
  const { title, release_date, overview, genres, poster_path, vote_average } =
    movie;

  //   const defaultImg =
  //     'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const poster =
    poster_path && poster_path.length > 0
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : defaultImg;

  const releaseYear = new Date(release_date).getFullYear();

  const popularity = Math.round(vote_average * 10);

  const genresList =
    genres && genres.length > 0
      ? genres.map(genre => genre.name).join(', ')
      : 'There is no genres for this movie';

  return (
    <>
      <div>
        <img src={poster} alt={title} width="300" />
        <h1>
          {title} ({releaseYear})
        </h1>
        <p>User Score: {popularity}%</p>
        <h2>Overview</h2>
        <p>{overview ? overview : 'There is no overview for this movie'}</p>
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
    </>
  );
};
export default MovieInformation;
