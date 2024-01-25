import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  useEffect(() => {}, []);

  return (
    <div>
      {['movie1', 'movie2', 'movie3', 'movie4'].map(item => {
        return (
          <Link key={item} to={`${item}`}>
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
