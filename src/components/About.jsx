import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <section>
      <div id="about">
        <div className="about">
          <div className="title">
            <h3>About Me</h3>
          </div>
          <div className="collage about-item">
            <h3>Education</h3>
            <div>
              <h4>B.H.M.S. Doctor</h4>
              <p>Bhagwan Homeopathic edical Collage Aurangabad.</p>
            </div>

            <div>
              <h4>M.B.A in hospital and healthcare</h4>
              <p>symbiosis institute of health science, pune</p>
            </div>
          </div>

          <div className="exp about-item">
            <h3>Experiance</h3>
            <h4>Dr Hedgewar Rugnalaya </h4>
            <p>Chhatrapati Sambhajinagar, Maharashtra</p>
            <div>
              <p>Worked in Rheumatology for 1 year</p>
              <p>Worked in Medicin OPD for 2 years</p>
              <p>Worked as Medical officer in medicin ICU for 3 & 1/2 years</p>
            </div>
          </div>

          <div className="additionalInfo about-item">
            <h3>Additional Info</h3>

            <p>
              Attended SymResearch National Conference on research in health &
              biomedical sciences, 2022
            </p>
            <p>
              Attended legal ethical issue in health care, jupiter Hospital,
              pune
            </p>
            <p>
              Attended seminar on how to manage AMI compications at mgm
              hospital, Chhatrapati SambhajiNagar.
            </p>
            <p>
              attended a seminar on how to do a physical examination by dr.
              kundu at dr hedgewar rugnalaya, Chhatrapati sambhajinagar
            </p>
          </div>

          <div className="intership about-item">
            <h3>Summer Intership MBA</h3>

            <p>
              I did my summer intership at ruby hall clinic, sasoon road, pune
              (may 2022 -june 2024)
            </p>
            <p>I id an intership in the quality department of the hospital</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
