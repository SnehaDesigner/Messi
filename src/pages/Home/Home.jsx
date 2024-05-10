import React, { useState } from "react";
import "./Home.css";
import leftTwo from "../../assets/leftTwo.jpg";
import rightTwo from "../../assets/rightTwo.png";
import oneThree from "../../assets/oneThree.jpg";
import twoThree from "../../assets/twoThree.jpg";
import threeThree from "../../assets/threeThree.png";
import fourThree from "../../assets/fourThree.jpg";
import fiveThree from "../../assets/fiveThree.png";
import sixThree from "../../assets/sixThree.jpg";
import Button from "../../components/Button/Button";

const Home = () => {
  const [state, setState] = useState(0);
  function clickMe() {
    setState(state + 1);
    console.log(state);
  }
  return (
    <>
      <section className="bannerImage">
        <button onClick={clickMe}>Clicl</button>
        <p>{state}</p>
        <div className="bannerContent container">
          <div>
            <h4>Our Exclusive</h4>
            <h1>Shop Now</h1>
            <p>
              We have all your auto parts needs! Are you looking for the best
              performance car parts and car accessories
            </p>
            <Button className="homeButton">Shop</Button>
          </div>
        </div>
      </section>
      <section className="sectionTwo">
        <div className="container">
          <h1 className="text-center sectionHead">New Arrivals</h1>
          <div className="newArrival">
            <div className="text-center arrival">
              <img src={leftTwo} alt="Left" />
              <h3>Trending</h3>
              <button className="homeButton">Buy</button>
            </div>
            <div className="text-center arrival">
              <img src={rightTwo} alt="Left" />
              <h3>Popular</h3>
              <button className="homeButton">Buy</button>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionThree">
        <h1 className="text-center sectionHead">Most Popular Products</h1>
        <div className="container thirdSec">
          <div className="card">
            <img src={oneThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">Best Sellers</h5>
              <p className="card-text">CA$39.00</p>
            </div>
          </div>
          <div className="card">
            <img src={twoThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">Featured Products</h5>
              <p className="card-text">CA$19.00</p>
            </div>
          </div>
          <div className="card">
            <img src={threeThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">Exclusive Collections</h5>
              <p className="card-text">CA$39.00</p>
            </div>
          </div>
          <div className="card">
            <img src={fourThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">New Arrivals</h5>
              <p className="card-text">CA$39.00</p>
            </div>
          </div>
          <div className="card">
            <img src={fiveThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">Best Sellers</h5>
              <p className="card-text">CA$39.00</p>
            </div>
          </div>
          <div className="card">
            <img src={sixThree} className="card-img-top" alt="oneThree" />
            <div className="card-body">
              <h5 className="card-title">Best Sellers</h5>
              <p className="card-text">CA$39.00</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionFour">
        <h1 className="text-center sectionHead">Testimonials</h1>
        <div className="container testimonial">
          <div className="testImage"></div>
          <div className="testContent">
            <p>Happy Customers</p>
            <h4>
              Saved our business! We have no regrets! Thanks for the great
              service. It was worth much more than I paid Saved our business! We
              have no regrets! Thanks for the great service. It's worth much
              more!
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
