import './menu.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/app.html', name: 'Home', key: 'home' },
  { to: '/about', name: 'About', key: 'about' },
  { to: '/404', name: '404', key: '404' },
];
export default class Pane extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 'home' };
  }
  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }
  render() {
    const listLi = menuItems.map(item => {
      let className = 'menu-li';
      if (item.key === this.state.current) {
        className += ' current';
      }
      return <li className={className} key={item.key}>
      <Link to={item.to} onClick={() => this.handleClick(item)}>{item.name}</Link>
      </li>
    });
    return <div className="menu">
      <ul className="menu-ul">
        {listLi}
      </ul>
  </div>}
}
