import React, { useState } from "react";
import "./Products.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { AVAILABLE_PRODUCTS } from "../../data";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Filter from "../../components/Filter/Filter";
// import Button from "../../components/Button/Button";

const Products = () => {
  const paths = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Shop",
      url: "/products",
    },
  ];
  const [filteredProducts, setFilteredProducts] = useState(AVAILABLE_PRODUCTS);
  function handleFilter(minPrice, maxPrice) {
    const filtered = AVAILABLE_PRODUCTS.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }
  return (
    <>
      <BreadCrumb paths={paths} />
      <section className="filterSection">
        <div>
          <div className="container">
            <div className="prodsSection">
              <aside className="sidebar">
                <div className="widget">
                  <h3 className="widget-title">Filter:</h3>
                </div>
                <div className="sidebarContent">
                  <div className="allFilters">
                    <Filter onPriceFilter={handleFilter} />
                    {/* <Button onClick={handleFilter}>Filter</Button> */}
                  </div>
                </div>
              </aside>
              <div id="primary" className="content-area">
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
                    {filteredProducts.map((productItem) => (
                      <div className="col-lg-3 col" key={productItem.id}>
                        {console.log(filteredProducts)}
                        <ProductItem
                          image={productItem.image.src}
                          title={productItem.title}
                          price={productItem.price}
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
