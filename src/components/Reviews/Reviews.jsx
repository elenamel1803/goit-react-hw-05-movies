import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsApi } from 'services/RequestApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [criticReviews, setCriticReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        if (!movieId) return;
        const data = await fetchMovieReviewsApi(movieId);
        console.log('data :>> ', data);
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
    criticReviews && criticReviews.length > 0
      ? criticReviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))
      : 'No reviews available';

  return (
    <>
      {isLoading && <Loader />}
      <ul>{reviewsList}</ul>
    </>
  );
};

export default Reviews;
