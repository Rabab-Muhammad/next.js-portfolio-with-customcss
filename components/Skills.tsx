import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div className="skills-left">
          <h2 className="skills-h2">Tecnologies I work with</h2>
          <p className="skills-para">
            I&apos;h strong skills in HTML, CSS, and Tailwind CSS, which help me
            create web pages that look good and work well on any device. I also
            know how to use React and Next.js to build websites that load
            quickly and give users a smooth experience. These skills allow me to
            make modern websites that work reliably and meet today is web
            standards.
          </p>
        </div>
        <div className="skills-right">
          <div className="skills-icon-grid">
            <div className="skills-space">
              <h2>Typescript</h2>
              <h2>Next.js</h2>
              <h2>React</h2>
            </div>
            <div className="skills-space">
              <h2>Tailwind</h2>
              <h2>Css</h2>
              <h2>Node</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
