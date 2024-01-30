import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const MovieItem = styled.li`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 350px;
  width: 200px;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
`;

export const Img = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  /* max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
  object-fit: cover;
  object-position: center; */
`;

export const Text = styled.p`
  padding: 4px;
  font-size: 18px;
  text-align: center;
`;
