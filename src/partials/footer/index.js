import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.scss';

const Footer = () => {
  const socialLinks = [
    { icon: 'facebook-f', link: 'https://www.facebook.com/duyhung.do.3?ref=bookmarks' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/%C4%91%E1%BB%97-duy-h%C6%B0ng-8a840a70/' },
    { icon: 'skype', link: 'skype:live:duyhung0124' },
    { icon: 'github', link: 'https://github.com/hungduydo' },
    { icon: 'instagram', link: 'https://www.instagram.com/fun_house38/' },
  ];

  return (
    <div className="footer" data-anchor="footer">
      <Row>
        <Col>
          <p className="banner__social footer">
            {
              socialLinks.map((it, index) => (<a href={it.link} key={index} target="#"><FontAwesomeIcon icon={['fab', it.icon]} /></a>))
            }
          </p>
        </Col>
      </Row>
    </div>);
}

export default Footer;