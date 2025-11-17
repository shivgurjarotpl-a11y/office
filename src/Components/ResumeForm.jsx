import React from "react";
import "../css/ResumeForm.css";

const ResumeForm = () => {
  return (
    <section className="resume-section">

      {/* Right Side Form */}
      <div className="resume-right">
        <h3>Send Us Resume</h3>
        <p className="subtext">Join Our Team for Evolving Your Career</p>

        <form className="resume-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email*" required />
          </div>

          <input type="tel" placeholder="Phone No.*" required />

     <select required>
  <option value="" disabled selected>Select Professional*</option>
  <option value="ui-designer">UI Designer</option>
  <option value="ux-developer">UX Developer</option>
  <option value="php-developer">PHP Developer</option>
  <option value="android-developer">Android Developer</option>
  <option value="ios-developer">iOS Developer</option>
  <option value="quality-analyst">Quality Analyst</option>
</select>


          <input type="file" />

          <textarea placeholder="Message*" rows="4" required></textarea>

          <button type="submit">Send Now</button>
        </form>
      </div>

            {/* Left Side Content */}
      {/* <div className="resume-left">
        <h2>
          We Are On A <br /> Hunt For Talent!
        </h2>
        <p>
          If you don’t see a suitable position here, you may write to us and get
          answers to your specific queries for openings. We will soon get in
          touch!
        </p>
      </div> */}
    </section>
  );
};

export default ResumeForm;
