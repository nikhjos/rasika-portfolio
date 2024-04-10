import React from "react";
import { socialLinks } from "../assets/data";

import Wrapper from "../assets/Wrapper/Hero";

import heroImg from "../assets/heroImage.jpg";
import rasikaCv from "../assets/Rasikacvv.pdf";
import useToggle from "../context";

const Hero = () => {
  const { pageActive } = useToggle();
  return (
    <section>
      <div id="hero">
        <div className="hero-header">
          <div className="image">
            <img src={heroImg} alt="hero" />
          </div>

          <div>
            <div className="hero-name">
              <h2>Rasika Joshi_</h2>
              <span>B.H.M.S. Doctor / M.B.A. in healthcare</span>
            </div>

            <div className="hero-info">
              <div>
                <span>age:</span>
                <p> 32</p>
              </div>

              <div>
                <span>mob:</span>
                <p>+91 ++++++++++</p>
              </div>

              <div>
                <span>email:</span>
                <p>rasikajoshi@gmail.com</p>
              </div>

              <div>
                <span>address:</span>
                <p>Chhatrapati SambhajiNagar, Maharashtra, india</p>
              </div>
            </div>

            <div className="intro-links">
              {socialLinks.map((link) => {
                const { id, href, name } = link;
                return (
                  <a key={id} href={href} className="link">
                    <img src={name} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hero-body">
          <h3>Hi..</h3>
          <p>
            patient-focused medical officer offering more than 6 years of
            experiance in the hospital and medicin department. business-savvy
            and accomplished in driving growth when leading interdisciplinary
            teams and continuously improving care delivery. prepared to bring
            leaddership, talent, and expeerties to growing healthcare
            organization
          </p>
        </div>
        <div className="heroBtns">
          <a href={rasikaCv} download>
            DownLoad Cv
          </a>
          <button type="button" onClick={() => pageActive(4)}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
