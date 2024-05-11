import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products/Products";
import Favourites from "./pages/Favourites/Favourites";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/favorites", element: <Favourites /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
