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
import SkillcardImgNine from "../../images/9.png";

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
            <option value="arts">Arts and Crafts</option>
            <option value="arts">Digital</option>
            <option value="arts">Financial</option>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgOne} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
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
              <p>An opportunity to experience a supportive and friendly work environment.</p>
            </div>
          </div>
          <div className="skillcard">
            <div className="skillcard-img-container">
              <img className="skillcard-img" src={SkillcardImgNine} alt="" />
            </div>
            <div className="skill-card-badge">
              <span className="badge-text">Free</span>
            </div>
            <div className="skillcard-content-container">
              <h3 className="skill-card-heading">Next Steps</h3>
              <p>An opportunity to experience a supportive and friendly work environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
