import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;

  &.active {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
