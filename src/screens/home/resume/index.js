import React from 'react';
import { Works } from '../works/works';
import './resume.scss';
import { SkillBar } from './skill';
const Resume = () => {

  return (
    <div>
      <div id="resume" className="resume">
        <div className="resume__wapper container">
          <div className="resume__item row">
            <div className="col-md-4 resume__item__title">
              <h1>Education</h1>
            </div>
            <div className="col-md-8 resume__item__body">
              <div>
                <h3>University of Science HCM</h3>
                <div className="item__info"><span>Infomation of technology</span><span>April 2007 - March 2012</span></div>
                <p>Marjo Software Architech. Courses OOP, Database, Data Structure and Algorithms.</p>
              </div>
            </div>
          </div>

          <div className="resume__item row">
            <div className="col-md-4 resume__item__title">
              <h1>Skills</h1>
            </div>
            <div className="col-md-8 resume__item__body">
              <ul className="skill" data-aos="zoom-out-down">
                <SkillBar name="Javascript" level="5"></SkillBar>
                <SkillBar name="Angular" level="4"></SkillBar>
                <SkillBar name="HTML/CSS" level="5"></SkillBar>
                <SkillBar name="Java" level="3"></SkillBar>
                <SkillBar name="Nodejs" level="3"></SkillBar>
                <SkillBar name="Git" level="4"></SkillBar>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Resume;