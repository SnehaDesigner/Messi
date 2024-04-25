import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products/Products";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/favourites", element: <Favourites /> },
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
