import React, { useContext } from "react";
import "./Favourites.css";
import FavContext from "../../store/FavContext";
import ProductItem from "../../components/ProductItem/ProductItem";

const Favourites = () => {
  const FavCtx = useContext(FavContext);
  const favouriteItems = FavCtx.favItems;
  console.log(favouriteItems);
  return (
    <>
      <h1>Favourites</h1>
      <div className="favourites">
        {favouriteItems.map((item) => (
          <ProductItem
            key={item.id}
            image={item.image.src}
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
