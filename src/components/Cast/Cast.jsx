import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastApi } from 'services/RequestApi';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCastApi(movieId);
        // if (!data.length) return;
        console.log('data :>> ', data);
        setActors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const actorList = actors
    ? actors.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))
    : 'No cast available';

  return (
    <>
      {isLoading && <Loader />}
      <ul>{actorList}</ul>
    </>
  );
};

export default Cast;
