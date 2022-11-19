import React from "react";
import "./Skills.css";
import SkillcardImgOne from "../../images/1.png";
import SkillcardImgTwo from "../../images/2.png";
import SkillcardImgThree from "../../images/3.png";
import SkillcardImgFour from "../../images/4.png";
import SkillcardImgFive from "../../images/5.png";
import SkillcardImgSix from "../../images/6.png";
import SkillcardImgSeven from "../../images/7.png";
import SkillcardImgEight from "../../images/8.png";
import skillcard from "../../images/skillcard.jpg";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-section-container">
        <h2 className="skill-search-heading">Find Skills</h2>
        <form>
          <label className="input-heading" htmlFor="category">
            Category
          </label>
          <select name="category" id="category">
            <option value="arts">Money Managment</option>
            <option value="arts">Online Business Building</option>
            <option value="arts">Living with Little</option>
            <option value="arts">Food and Drink</option>
          </select>
          <label className="input-heading" htmlFor="skill">
            Type of Skill
          </label>
          <select name="skill" id="skill">
            <option value="all">All Skills</option>
            <option value="specific">Specific Skills</option>
            <option value="groups">Groups offering a helping hand</option>
            <option value="individual">Individual offering a helping hand</option>
          </select>
          <button className="skills-form-btn">Find Content</button>
        </form>
        <div className="skill-cards-container">
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgOne} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>Learn how to get more control over your finances, with some simple steps you can start implementing now.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgTwo} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>By identifying your online skills, you can start making money online.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgThree} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>
                Learn how to self motivate, but also identify when you need to take a break and how to make that happen in
                your schedule.
              </p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgFour} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>Learn the day to day tasks of a virtual assitant to see if they are right for you.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgFive} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>Starting an online business can be easy with these resources.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgSix} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>Learn how to navigate adult education and qualification programs.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgSeven} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>
                Learning to live with little will help you budget your money, so you don't have to make a choice anymore.
              </p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgEight} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>Build a meal which is tailored to you using our online tool</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={skillcard} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>We want to help your family at AND but also want YOU to help your own family at home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
