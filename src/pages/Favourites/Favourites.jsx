import React, { useContext } from "react";
import "./Favourites.css";
import FavContext from "../../store/FavContext";
import ProductItem from "../../components/ProductItem/ProductItem";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Favourites = () => {
  const FavCtx = useContext(FavContext);
  const favouriteItems = FavCtx.favItems;
  const paths = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Favorites",
      url: "/favorites",
    },
  ];
  return (
    <>
      <BreadCrumb paths={paths} />
      <h1>Favourites</h1>
      <div className="favourites">
        {favouriteItems.map((item) => (
          <ProductItem
            key={item.id}
            image={item.image}
            title={item.title}
            amount={item.amount}
            prodId={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favourites;
