import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <section>
      <div id="skill">
        <Title name="My Skills" />

        <div className="skills skill-item">
          <h3>Soft Skill</h3>

          <div className="skillList">
            <p>Good Communications</p>
            <p>Time Management</p>
            <p>Team Work</p>
            <p>Soft Spoken</p>
          </div>
        </div>

        <div className="tech skill-item">
          <h3>Technical</h3>

          <div className="skillList">
            <p>Ms.Exel</p>
            <p>Google Dashboard</p>
          </div>
        </div>

        <div className="experties skill-item">
          <h3>Experties</h3>

          <div className="skillList">
            <p>Management Skill</p>
            <p>Creativity</p>
            <p>Critical Thinking</p>
            <p>Leadership</p>
          </div>
        </div>

        <div className="certificate skill-item">
          <h3>Certificate</h3>

          <div className="skillList">
            <p>BLS & ACLS Certificate by AHA</p>
            <p>Certificate for attending clinical Audit by CAHO</p>
            <p>Certificate for attending clinical Audit by CAHO</p>
            <p>
              Certificate for attending Legal & Ethical issues in healthcare at
              jupiter hospital , Pune
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
