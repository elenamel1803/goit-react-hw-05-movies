import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);

  return <div>Cast: {movieId}</div>;
};

export default Cast;
