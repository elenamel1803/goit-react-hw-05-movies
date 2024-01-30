import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Button = styled.button`
  display: inline-block;
  padding: 4px;
  width: 70px;
  height: 50px;
  font-size: 18px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const InputText = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
