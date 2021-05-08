import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faMobile, faPaperPlane, fas, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Image } from 'react-bootstrap';
import './about.scss';
library.add(fas, faUserCircle);
library.add(fas, faMapMarkedAlt);
library.add(fas, faMobile);
library.add(fas, faPaperPlane);
const About = () => {

  return (
    <div id="about" className="about">
      <div className="about__wapper">
        <div className="about__picture" data-aos="fade-up">
          <Image src="https://i.imgur.com/2r4alu7t.jpg" roundedCircle />
        </div>
        <div className="about__info">
          <div className="info__tab">
            <h2>About me</h2>
            <p>I am Frontend Developer, have strong knowledge about JavaScript, Typescript, Angular, NodeJS.</p>
          </div>
          <div className="info__tab">
            <h2>Contact Details</h2>
            <p>
              <span><FontAwesomeIcon icon='user-circle'/>Do Duy Hung</span>
              <span><FontAwesomeIcon icon='map-marker-alt'/>80 Diệp Minh Châu, Tân Sơn Nhì, Tân Phú, TPHCM</span>
              <span><FontAwesomeIcon icon='mobile'/>0356 137 845</span>
              <span><FontAwesomeIcon icon='paper-plane'/>duyhung01247@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
