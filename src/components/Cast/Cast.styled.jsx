import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px;
  justify-content: space-between;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastItem = styled.li`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 290px;
  width: 100px;
`;
export const Img = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-width: 100px;
  min-height: 150px;
  object-fit: cover;
  object-position: center;
`;

export const TextName = styled.p`
  padding: 4px;
  font-weight: bold;
  text-align: center;
`;

export const TextCharacter = styled.p`
  padding: 4px;
  text-align: center;
`;

export const Text = styled.p`
  padding: 4px;
  text-align: center;
  font-size: 18px;
`;
