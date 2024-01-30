import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastApi } from 'services/RequestApi';
import Loader from 'components/Loader/Loader';
import { errorMessage } from 'services/Notiflix';
import { defaultImg } from 'services/defaultImg';
import {
  CastItem,
  CastList,
  Img,
  Text,
  TextCharacter,
  TextName,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCastApi(movieId);
        setActors(data);
      } catch (error) {
        errorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const actorsItem = actors.map(({ name, character, profile_path, id }) => (
    <CastItem key={id}>
      <Img
        src={
          profile_path && profile_path.length > 0
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt={name}
        width="100"
      />
      <TextName>{name}</TextName>
      <TextCharacter>Character: {truncateText(character, 20)}</TextCharacter>
    </CastItem>
  ));

  const actorList =
    actors && actors.length > 0 ? (
      <CastList>{actorsItem}</CastList>
    ) : (
      <Text>There is no cast for this movie</Text>
    );

  return <>{(isLoading && <Loader />) || actorList}</>;
};

export default Cast;
