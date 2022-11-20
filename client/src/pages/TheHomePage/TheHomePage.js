import React from "react";
import "./TheHomePage.css";

import skillimage from "../../images/AND-homepage-hero-2.jpg";
import mealimage from "../../images/AND-meals-hero-image.jpg";
import involvedimage from "../../images/AND-volunteer-hero-image.jpg";
import mainImg from "../../images/main-page.jpg";
export default function TheHomePage() {
  return (
    <>
      <main className="thehome-main">
        <div className="img-hero-container">
          <img className="transform-img" src={mainImg} alt="1000 people faces." />
        </div>
        <div className="main-container">
          <div className="hero-content-container">
            <h1 className="hero-heading">Break the cycle</h1>
            <p className="hero-text">
              Your "or" today can be an "and" tomorrow. Find the help you need to grow your skills.
            </p>
          </div>
        </div>
      </main>
      <section className="section-section">
        <section className="the-skills-section">
          <div className="the-skills-container">
            <div className="text-container">
              <div className="text-inner-container">
                <h3 className="text-container-heading">learn skills today to change your tomorrow</h3>
                <p className="text-container-text">
                  AND provides training and mentorship from industry leaders and specialist intended to help the under
                  employed break the poverty cycle. Check out the categories of training available and start identifying your
                  valuable online skills.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="img" src={skillimage} alt="skills" />
            </div>
          </div>
        </section>
        <section className="the-meals-section">
          <div className="the-meals-container">
            <div className="text-container">
              <div className="text-inner-container">
                <h3 className="text-container-heading">Find your next local meals with mentors event.</h3>
                <p className="text-container-text">
                  We understand have difficult it is to feel fulfilled in life when you can't fill your stomach. We want to
                  help you solve both those problems at once. At our meals with mentors events held close to home in local
                  community centers and primary schools so you don't have to travel far. dinner for you and your kids
                  provided and childcare is on us. Check the map for upcoming events, can't wait to see you!
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="img" src={mealimage} alt="" />
            </div>
          </div>
        </section>
        <section className="the-involved-section">
          <div className="the-involved-container">
            <div className="text-container">
              <div className="text-inner-container">
                <h3 className="text-container-heading">Get Involved in your community</h3>
                <p className="text-container-text">
                  AND is always looking for motivated and driven volunteers, whether your skills are in social media,
                  marketing or you want to register people for events at the door, We have a place for you. If your don't
                  have surplus time we take donations to. Apply to volunter today.
                </p>
              </div>
            </div>
            <div className="img-container">
              <img className="img" src={involvedimage} alt="volunteer" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
