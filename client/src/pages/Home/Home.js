import React from "react";
import Skills from "../../components/Skills/Skills";
import "./Home.css";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="main-container">
          <h1 className="hero-text">Hero msg here</h1>
        </div>
      </main>
      <Skills />
    </>
  );
}
