import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(() => import("../layout"));
const HomePage = React.lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<></>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <>Not Found</>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
