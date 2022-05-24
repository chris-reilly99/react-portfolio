import React from "react";
import resoomay from "../../assets/ChristopherReilly-GeneralResume.pdf";

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Chris Reilly</h2>
          <ul>
            <li>
              Finance and Accounting professional, working to develop tech skills
            </li>
          </ul>

          <p className="mt-5">
            <a href="https://www.linkedin.com/in/chriscreilly/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="LinkedIn"
              />
              LinkedIn
            </a>
          </p>

          <a href={resoomay} class="link">Download Resume 6/7/2021</a>
        </div>
      </div>
    </section>
  );
}

export default Resume;