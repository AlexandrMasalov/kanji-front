import { AppLayout } from '@/app/layout';
import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/MainPage';
import OtherPage from '@/pages/OtherPage/ui/OtherPage';
import { createBrowserRouter } from 'react-router-dom';

const routerBase = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'other',
        element: <OtherPage />,
      },
    ],
  },
]);

export { routerBase };
