import React from "react";

const Skills = () => {
  return (
    <section>
      <div id="skill">
        <div className="skill-center">
          <h3 className="title">My Skill</h3>
          <div className="skills ">
            <div className="skillTitle">
              <h3>Soft Skill</h3>
            </div>
            <div className="skillList">
              <p>Good Communications</p>
              <p>Time Management</p>
              <p>Team Work</p>
              <p>Soft Spoken</p>
            </div>
          </div>

          <div className="tech">
            <div className="skillTitle">
              <h3>Technical</h3>
            </div>
            <div className="skillList">
              <p>Ms.Exel</p>
              <p>Google Dashboard</p>
            </div>
          </div>

          <div className="experties">
            <div className="skillTitle">
              <h3>Experties</h3>
            </div>

            <div className="skillList">
              <p>Management Skill</p>
              <p>Creativity</p>
              <p>Critical Thinking</p>
              <p>Leadership</p>
            </div>
          </div>

          <div className="certificate">
            <div className="skillTitle">
              <h3>Certificate</h3>
            </div>
            <div className="skillList">
              <p>BLS & ACLS Certificate by AHA</p>
              <p>Certificate for attending clinical Audit by CAHO</p>
              <p>Certificate for attending clinical Audit by CAHO</p>
              <p>
                Certificate for attending Legal & Ethical issues in healthcare
                at jupiter hospital , Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
