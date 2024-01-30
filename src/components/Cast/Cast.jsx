import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastApi } from 'services/RequestApi';
import Loader from 'components/Loader/Loader';
import { defaultImg, defaultPhoto } from 'services/defaultImg';

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
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  // const defaultImg =
  //   // 'https://upload.wikimedia.org/wikipedia/commons/f/fa/No_photo_available.svg';
  //   'https://upload.wikimedia.org/wikipedia/commons/2/2b/No-Photo-Available-240x300.jpg';
  // // 'https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149276163.jpg?w=740&t=st=1706557752~exp=1706558352~hmac=016b72785ce453cf1ac01cb015ccf18715943d8ad13ede6345b8b4a3c64341f4';

  const actorsItem = actors.map(({ name, character, profile_path, id }) => (
    <li key={id}>
      <img
        src={
          profile_path && profile_path.length > 0
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImg
        }
        alt={name}
        width="100"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  const actorList =
    actors && actors.length > 0 ? (
      <ul>{actorsItem}</ul>
    ) : (
      <p>There is no cast for this movie</p>
    );

  return <>{(isLoading && <Loader />) || actorList}</>;
};

export default Cast;
