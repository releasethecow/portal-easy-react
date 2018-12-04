import './menu.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/app.html', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/404', name: '404' },
];
export default class Pane extends Component {
  render() {
    const listLi = menuItems.map(item => 
      <li className="menu-li" key={item.name}>
      <Link to={item.to}>{item.name}</Link>
      </li>
    );
    return <div className="menu">
      <ul className="menu-ul">
        {listLi}
      </ul>
  </div>}
}