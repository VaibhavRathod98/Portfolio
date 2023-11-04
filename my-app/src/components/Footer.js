import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                  <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: " 2rem"}} />
                    <div>
                      <p>Nanded, Maharashtra</p>
                      <p>India</p>
                    </div>
                  </div>
                  <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight: " 2rem"}} />
                      8999958628</h4>
                  </div>
                  <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: " 2rem"}} />
                      mrvaibhavrathod@gmail.com</h4>
                  </div>
              </div>
              <div className="right">
                <h4>About Me</h4>
                <p>
                  Hi, I'm Vaibhav Rathod. I'm a passionate Front-End Developer with a strong focus on creating engaging and user-friendly web experiences. I specialize in HTML, CSS, JavaScript, and React, and I'm constantly exploring new technologies to stay at the forefront of web development. Let's connect and build something amazing!
                </p>

                <div className="social">
                  <FaLinkedinIn
                    size={30} style={{ color:"#fff", marginRight: " 1rem"}}
                  />
                  <FaGithub
                    size={30} style={{ color:"#fff", marginRight: " 1rem"}}
                  />
                  <FaInstagram
                    size={30} style={{ color:"#fff",marginRight: " 1rem"}}
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer