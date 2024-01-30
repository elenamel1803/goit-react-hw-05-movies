import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsApi } from 'services/RequestApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [criticReviews, setCriticReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieReviewsApi(movieId);
        setCriticReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const reviewsList =
    criticReviews && criticReviews.length > 0 ? (
      <ul>
        {criticReviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>There is no reviews for this movie</p>
    );

  return <>{(isLoading && <Loader />) || reviewsList}</>;
};

export default Reviews;
