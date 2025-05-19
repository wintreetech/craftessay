import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import {
  Home,
  Pricing,
  About,
  Services,
  OrderGuide,
  Contact,
} from "./pages/index";
import Layout from "./Layout/Layout";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/orderguide",
          element: <OrderGuide />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className=" text-center py-2">
        Any kind of academic use is prohibited
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
