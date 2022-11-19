import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h5 className="footer-section-heading">Support</h5>
          <nav className="footer-section-nav">
            <ul className="footer-section-list">
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Help Center
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Food Banks
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Safety Advice
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Supporting Disabilities
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Covid Guidance
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h5 className="footer-section-heading">Community</h5>
          <nav className="footer-section-nav">
            <ul className="footer-section-list">
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  AND.org: Mind initiative
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Support Ukraine
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Combating discrimination
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h5 className="footer-section-heading">AND Member</h5>
          <nav className="footer-section-nav">
            <ul className="footer-section-list">
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Members login
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Join AND
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Become a mentors
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  AND events
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  AND places
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  About AND
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h5 className="footer-section-heading">AND</h5>
          <nav className="footer-section-nav">
            <ul className="footer-section-list">
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Newsroom
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Media and PR
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Learn about new features
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Letter from our founders
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Careers
                </a>
              </li>
              <li className="footer-section-li">
                <a className="footer-link" href="/">
                  Investors
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-made-container">
          <span className="made-content">
            Made with love{" "}
            <span className="heart">
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            in Norwich
          </span>
        </div>
      </div>
    </footer>
  );
}
