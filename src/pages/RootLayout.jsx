import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { FavContextProvider } from "../store/FavContext";

const RootLayout = () => {
  return (
    <>
      <FavContextProvider>
        <Header />
        <Outlet />
      </FavContextProvider>
    </>
  );
};

export default RootLayout;
