import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { AVAILABLE_PRODUCTS } from "../../data";

const Products = () => {
  return (
    <>
      <section className="breadCrumb">
        <div className="container">
          <nav>
            <ol className="breadCrumbShop">
              <ListItem className="breadcrumb-item">
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem className="breadcrumb-item">
                <Link to="/products">Shop</Link>
              </ListItem>
            </ol>
          </nav>
        </div>
      </section>
      <section className="filterSection">
        <div>
          <div className="container">
            <div className="row">
              <aside className="widget sidebar sidebar-shop col-lg-3 col-md-12">
                <div className="widget">
                  <h3 className="widget-title">Filter:</h3>
                  <form>
                    <div className="price_slider_wrapper">
                      <div className="price_slider">
                        <div className="ui-widget-header"></div>
                        <span className="ui-slider-handle"></span>
                        <span className="ui-slider-handle ui-slider-handle-two"></span>
                      </div>
                      <div className="price_slider_amount">
                        <div className="price_label">
                          Price: <span className="from">$40</span>-
                          <span className="to">$20,000</span>
                        </div>
                        <button>Filter</button>
                      </div>
                    </div>
                  </form>
                </div>
              </aside>
              <div id="primary" className="content-area col-lg-9 col-md-12">
                <div className="products-header">
                  <h5 className="productsTitle">Shop</h5>
                  <div className="filterContent d-flex align-items-center">
                    <div className="shopSorting">
                      <form className="ordering">
                        <p className="before-default-sorting">Sort by</p>
                      </form>
                    </div>
                    <div className="media"></div>
                  </div>
                </div>
                <div className="feature-product-v4">
                  <div className="row">
                    {AVAILABLE_PRODUCTS.map((productItem) => (
                      <div className="col-lg-3 col" key={productItem.id}>
                        <ProductItem
                          image={productItem.image.src}
                          title={productItem.title}
                          amount={productItem.amount}
                          prodId={productItem.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
