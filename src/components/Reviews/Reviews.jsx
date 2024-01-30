import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsApi } from 'services/RequestApi';
import { errorMessage } from 'services/Notiflix';
import { ReviewsList, Text, TextAuthor, TextContent } from './Reviews.styled';

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
        errorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const reviewsList =
    criticReviews && criticReviews.length > 0 ? (
      <ReviewsList>
        {criticReviews.map(({ author, content, id }) => (
          <li key={id}>
            <TextAuthor>Author: {author}</TextAuthor>
            <TextContent>{content}</TextContent>
          </li>
        ))}
      </ReviewsList>
    ) : (
      <Text>There is no reviews for this movie</Text>
    );

  return <>{(isLoading && <Loader />) || reviewsList}</>;
};

export default Reviews;
