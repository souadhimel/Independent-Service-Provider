import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="header">
        <div style={{width: '50%'}} >
          <h1 className="header-title">
            Stay Focused on <br />
            <span className="text-color">Mission 2022</span>
          </h1>
          <br />  <br />
          <p>
            One area that I’m passionate about is self-development and
            self-improvement in my personal life. I’m always looking to
            challenge myself and learn new things. That’s one reason I enjoy
            working in customer service; I’ve learned great communication
            skills, listening skills, and problem-solving skills that help me in
            my day-to-day work but also in my personal life in terms of
            confidence, communication, etc.
          </p>
          <br />  <br />
          <button className="btn">Explore Now</button>
        </div>
        <div >
          <img className="header-img" src="https://i.ibb.co/MphStQX/IMG-20211017-225900-1.jpg" alt="" />
        </div>
      </div>
    );
};

export default About;