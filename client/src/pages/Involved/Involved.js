import React from "react";
import "./Involved.css";
import { Link } from "react-router-dom";

export default function Involved() {
  return (
    <>
      <main className="main-involved">
        <div className="main-container">
          <div className="hero-content-container">
            <h1 className="hero-heading">Get Involved</h1>
            <p className="hero-text">
              Your "or" today can be an "and" tomorrow. Find the help you need to grow your skills.
            </p>
          </div>
        </div>
      </main>
      <section className="invloved-section">
        <div className="involved-section-container">
          <h2 className="involved-heading">Why helping your local community can be rewarding</h2>
          <p>
            Helping your local community not only helps them but helps you as well. With everyday you volunteer, your social
            circle will grows aswell as your skills.
          </p>
        </div>
      </section>
      <section className="who-involved-section">
        <div className="who-involved-section-container">
          <h4 className="who-heading">Who is AND for?</h4>
          <p className="who-for-content">
            AND is for anyone who wants to make a positive difference in their community, whether that is donating or
            volunteering its up to you. Every person counts here at AND,so volunteer or donate today to make a positive
            change to the city around you.
          </p>
          <div className="who-type-container">
            <div className="individual-container">
              <h5 className="who-for-heading">Individuals</h5>
              <p className="who-type-text">
                If you or someone you know can bring a unique positivity to our team, Apply Today!
              </p>
              <Link to="/">
                <span className="register-text">Register with AND</span>
              </Link>
            </div>
            <div className="groups-container">
              <h5 className="who-for-heading">Groups and Organisations</h5>
              <p className="who-type-text">
                Members of your Group and Organisation can bring a unique positivity to our team, Apply Today!
              </p>
              <Link to="/">
                <span className="register-text">Register with AND</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="discover-section">
        <div className="discover-section-container">
          <h3 className="discover-heading">Discover More</h3>
          <div className="resource-container">
            <h5 className="container-heading">Resources</h5>
            <p className="container-content">Access a variety of online resources to help you with your role at AND</p>
            <Link>
              <h4 className="discover-content-link">Find Resources</h4>
            </Link>
          </div>
          <div className="about-container">
            <h5 className="container-heading">About AND</h5>
            <p className="container-content">
              AND is a two part community initiative designed to support parents to break out of the cycle of poverty long
              term, while also addressing the immediate need - food.
            </p>
            <Link>
              <h4 className="discover-content-link">Learn More</h4>
            </Link>
          </div>
          <div className="latest-news-container">
            <h5 className="container-heading">Latest News</h5>
            <p className="container-content">Check out the news coverage of our work.</p>
            <Link>
              <h4 className="discover-content-link">Hot Topics</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
