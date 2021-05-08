import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './banner.scss';

const Banner = () => {
  const socialLinks = [
    { icon: 'facebook-f', link: 'https://www.facebook.com/duyhung.do.3?ref=bookmarks' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/%C4%91%E1%BB%97-duy-h%C6%B0ng-8a840a70/' },
    { icon: 'skype', link: 'skype:live:duyhung0124' },
    { icon: 'github', link: 'https://github.com/hungduydo' },
    { icon: 'instagram', link: 'https://www.instagram.com/fun_house38/' },
  ];

  const description = `I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.`
  
  return (
    <div className="banner" id="banner">
      <div className="banner__wapper">
        <h1 className="banner__title">Hi! I'm Hung</h1>
        <p className="banner__desc">
          {description}
        </p>
        <p className="banner__social">
          {
            socialLinks.map((it, index) => (<a href={it.link} key={index} target="#"><FontAwesomeIcon icon={['fab', it.icon]} /></a>))
          }
        </p>
      </div>

    </div>
  );

}

export default Banner;