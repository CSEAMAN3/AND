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
          <h2 className="involved-heading">Helping your local community is extremly rewarding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil quibusdam nisi unde eum, nemo quam culpa
            praesentium quos quisquam asperiores assumenda porro nulla!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quas aliquid, quia dolore fugit dolorem
            reprehenderit facere odio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia culpa cumque a atque, exercitationem
            iusto sunt nulla magni at. Temporibus!
          </p>
        </div>
      </section>
      <section className="who-involved-section">
        <div className="who-involved-section-container">
          <h4 className="who-heading">Who is AND for?</h4>
          <p className="who-for-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum commodi animi iste similique dolore
            asperiores et quos placeat sapiente adipisci id corporis qui, culpa, praesentium mollitia, eaque ipsa temporibus!
          </p>
          <p className="who-for-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nobis sit? Sequi.
          </p>
          <div className="who-type-container">
            <div className="individual-container">
              <h5 className="who-for-heading">Individuals</h5>
              <p className="who-type-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione cupiditate provident veniam doloremque,
                molestias, pariatur fugit porro voluptas culpa, quos accusamus rerum.
              </p>
              <Link to="/">
                <span className="register-text">Register with AND</span>
              </Link>
            </div>
            <div className="groups-container">
              <h5 className="who-for-heading">Groups and organisations</h5>
              <p className="who-type-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta sit ipsum quidem laborum ipsa. Illo
                exercitationem tempore iure blanditiis libero harum similique.
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
            <p className="container-content">
              Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Pariatur quae adipisci tempora volupt atem animi!
              Assum enda exerc itatio nem labore quod quibus dam fugit.
            </p>
            <Link>
              <h4 className="discover-content-link">Find Resources</h4>
            </Link>
          </div>
          <div className="about-container">
            <h5 className="container-heading">About AND</h5>
            <p className="container-content">
              Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Pariatur quae adipisci tempora volupt atem animi!
              Assum enda exerc itatio nem labore quod quibus dam fugit.
            </p>
            <Link>
              <h4 className="discover-content-link">Learn More</h4>
            </Link>
          </div>
          <div className="latest-news-container">
            <h5 className="container-heading">Latest News</h5>
            <p className="container-content">
              Lorem ipsum dolor sit amet, consec tetur adipis icing elit. Pariatur quae adipisci tempora volupt atem animi!
              Assum enda exerc itatio nem labore quod quibus dam fugit.
            </p>
            <Link>
              <h4 className="discover-content-link">Hot Topics</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
