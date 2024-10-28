import { Outlet } from 'react-router-dom';

import BgContainer from 'components/core-ui/container/bg-container';
import Container from 'components/core-ui/container/container';

import ScrollToTop from 'helpers/scroll-to-top';

import WithSuspense from 'routes/with-suspense';

import Footer from './footer';
import Header from './header';

function Layout() {
  return (
    <BgContainer>
      <ScrollToTop />
      <Container>
        <Header />

        <WithSuspense>
          <Outlet />
        </WithSuspense>
      </Container>

      <Footer />
    </BgContainer>
  );
}

export default Layout;
