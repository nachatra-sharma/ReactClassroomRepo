import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./component/Body.jsx";
// import About from "./component/About.jsx";
import Error from "./component/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantContainer from "./component/RestaurantContainer.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./component/About.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About name='Rishi Sharma' />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
