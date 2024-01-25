import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  &.active {
    color: red;
  }
`;
