import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MainMenu from 'components/MainMenu/MainMenu';
import Loader from 'components/Loader/Loader';
import { Header, LayoutWrap, Main } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrap>
      <Header>
        <MainMenu />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </LayoutWrap>
  );
};

export default Layout;
