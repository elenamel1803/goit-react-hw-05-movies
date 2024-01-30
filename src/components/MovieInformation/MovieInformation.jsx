import { defaultImg } from 'services/defaultImg';
import {
  AddInfoWrap,
  Img,
  InfoBox,
  InfoWrap,
  Text,
  LinkInfo,
  List,
} from './MovieInformation.styled';

const MovieInformation = ({ movie }) => {
  const { title, release_date, overview, genres, poster_path, vote_average } =
    movie;

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
      <InfoWrap>
        <Img src={poster} alt={title} width="300" />
        <InfoBox>
          <h1>
            {title} ({releaseYear})
          </h1>
          <Text>User Score: {popularity}%</Text>
          <h2>Overview</h2>
          <Text>
            {overview ? overview : 'There is no overview for this movie'}
          </Text>
          <h2>Genres</h2>
          <Text>{genresList}</Text>
        </InfoBox>
      </InfoWrap>

      <AddInfoWrap>
        <h2>Additional information</h2>
        <List>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </List>
      </AddInfoWrap>
    </>
  );
};
export default MovieInformation;
