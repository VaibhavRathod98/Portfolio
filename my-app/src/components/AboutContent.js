import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            {/* <p>I am a react front-end developer. I create responsive secure websites.</p> */}
            <p>As an enthusiastic Front-End Developer, I bring proficiency in HTML, CSS, JavaScript, and React, along with a commitment to enhancing user experiences. I'm eager to embark on a web development career, combining my Front-End skills with a basic understanding of Java and Spring Boot to contribute to innovative projects. Additionally, I have familiarity with version control and MySQL Workbench for effective database management.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="Sample-Img" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="Sample-Img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent