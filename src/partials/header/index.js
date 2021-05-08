import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [{ title: 'Home', ref: 'banner' }, { title: 'About', ref: 'about' }, { title: 'Resume', ref: 'resume' }, { title: 'Works', ref: 'works' }, { title: 'Contact', ref: 'contact' }];

  return (<div className="header">
    <ul>
      {
        menuItems.map((item, i) => <li key={i}><a href={`#${item.ref}`}>{item.title}</a></li>)
        // Use react Link made app navigation wrong
        // menuItems.map((item, i) => <li key={i}><Link to={`#${item.ref}`}>{item.title}</Link></li>)
      }
    </ul>
  </div>)
}

export default Header;