import React, { useContext, useState } from "react";
import "./ProductItem.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavContext from "../../store/FavContext";

const ProductItem = ({ image, title, price, prodId }) => {
  const FavCtx = useContext(FavContext);
  const [isFavorite, setIsFavorite] = useState(false);
  function handleFavourite() {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      FavCtx.addFavItem({ id: prodId, image, title, price });
    }
  }
  return (
    <>
      <div className="product">
        <div className="product-wrapper text-center">
          <img src={image} alt="" />
          <button className="favourite" onClick={handleFavourite}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </button>
          <div className="product-content">
            <h4 className="product-title">{title}</h4>
            <span className="price">
              <span className="price">${price}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
