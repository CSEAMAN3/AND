import React from "react";
import { Link } from "react-router-dom";
import "./Meals.css";
import Map from "../../images/map.png";

export default function Meals() {
  return (
    <>
      <main className="main-meals">
        <div className="main-container">
          <div className="hero-content-container">
            <h1 className="hero-heading">Find a food bank</h1>
            <p className="hero-text">Find your local food bank, their contact details and opening times.</p>
          </div>
        </div>
      </main>
      <section className="meals-section">
        <div className="meals-section-container">
          <form className="meals-search-form">
            <input className="meals-search-input" type="text" placeholder="Town, city or postcode" />
            <button className="meals-search-btn">Search</button>
          </form>
          <img className="food-map-img" src={Map} alt="map of food banks" />
        </div>
        <div className="food-content-container">
          <div className="food-content">
            <h3 className="food-content-heading">Food Vouchers</h3>
            <p className="food-content-content">
              Your local food banks work with referral agencies to issue food vouchers to those in need of emergency food in
              times of crisis.
            </p>
            <Link>
              <h4 className="food-content-link">Getting a Food Voucher</h4>
            </Link>
          </div>
          <div className="food-content">
            <h3 className="food-content-heading">What's in a parcel?</h3>
            <p className="food-content-content">
              We provide a minimum of three days' nutritionally balanced, tinned and dried food donated by the local
              community.
            </p>
            <Link>
              <h4 className="food-content-link">What's in a parcel?</h4>
            </Link>
          </div>
          <div className="food-content">
            <h3 className="food-content-heading">Visiting a food bank</h3>
            <p className="food-content-content">
              Food banks provide emergency food on presentation of a voucher. Our trained volunteers will offer a warm
              welcome...
            </p>
            <Link>
              <h4 className="food-content-link">Visiting a food bank</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
