import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoWrap = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  border-radius: 6px;
`;

export const InfoBox = styled.div`
  display: grid;
`;

export const Text = styled.p`
  padding: 4px;
  font-size: 18px;
  text-align: justify;
`;

export const AddInfoWrap = styled.div`
  display: grid;
  gap: 20px;
  padding: 24px;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const LinkInfo = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 6px;
  background-color: #e7e4e4;
  width: 80px;

  &.active {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`;
