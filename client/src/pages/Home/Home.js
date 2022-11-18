import React from "react";
import "./Home.css";
import Skills from "../../components/Skills/Skills";
// import Hero from "../../images/AND-homepage-hero.jpg";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="main-container">
          <div className="hero-content-container">
            <h1 className="hero-heading">Break the cycle</h1>
            <p className="hero-text">
              Your "or" today can be an "and" tomorrow. Find the help you need to grow your skills.
            </p>
          </div>
        </div>
      </main>
      <Skills />
    </>
  );
}
