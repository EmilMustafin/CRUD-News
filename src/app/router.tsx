import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from '@/widgets/error';
import { RootLayout } from '@/widgets/root-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: () =>
          import('../pages/home-page').then((m) => ({
            Component: m.HomePage,
          })),
      },
    ],
  },
]);
export function AppRouter() {
  return <RouterProvider router={router} />;
}
