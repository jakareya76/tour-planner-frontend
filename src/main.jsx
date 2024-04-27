import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AllTouristsSpot from "./pages/AllTouristsSpot.jsx";
import AddTouristsSpot from "./pages/AddTouristsSpot.jsx";
import MyList from "./pages/MyList.jsx";

import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import TouristDetails from "./pages/TouristDetails.jsx";
import EditTour from "./pages/EditTour.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot />,
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoutes>
            <AddTouristsSpot />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/tour-details/:id",
        element: <TouristDetails />,
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoutes>
            <MyList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-tour/:id",
        element: <EditTour />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tour/${params.id}`),
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
