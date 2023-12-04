import { RouterProvider } from 'react-router-dom';
import { routerBase } from '../../models/createRouter';

function Router() {
  return <RouterProvider router={routerBase} />;
}

export { Router };
