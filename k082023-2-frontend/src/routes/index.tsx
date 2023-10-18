import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/main';
import HomePage from '@/pages/home';
import NoMatch from '@/components/no-match';
import SeminarsList from '@/pages/seminars-list';
import SeminarDetail from '@/pages/seminar-detail';
import Error from '@/pages/error';
import { useAuth } from '@/contexts/authContext';
import Login from '@/pages/member/login';
import Register from '@/pages/member/register';

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  const routers = createBrowserRouter([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    {
      path: '*',
      element: (
        <MainLayout>
          <NoMatch />
        </MainLayout>
      ),
    },
    {
      path: '/error',
      element: (
        <MainLayout>
          <Error />
        </MainLayout>
      ),
    },
    {
      path: '/login',
      element: isLoggedIn ? (
        <MainLayout>
          <Error />
        </MainLayout>
      ) : (
        <MainLayout>
          <Login />
        </MainLayout>
      ),
    },
    {
      path: '/register',
      element: (
        <MainLayout>
          <Register />
        </MainLayout>
      ),
    },
    {
      path: '/seminar',
      element: (
        <MainLayout>
          <SeminarsList />
        </MainLayout>
      ),
    },
    {
      path: '/seminar/:id',
      element: (
        <MainLayout>
          <SeminarDetail />
        </MainLayout>
      ),
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default AppRoutes;
