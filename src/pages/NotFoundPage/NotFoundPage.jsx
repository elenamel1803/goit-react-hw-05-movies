import { LinkToHomePage, Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <div>
      <Title>Cannot found this page</Title>
      <LinkToHomePage to="/">To home page</LinkToHomePage>
    </div>
  );
};

export default NotFoundPage;
