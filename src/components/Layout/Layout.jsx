import { Outlet } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import { Suspense } from 'react';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
