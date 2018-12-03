'use strict';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import Home from './component/page/home';
import About from './component/page/about';
import Notfound from './component/page/notfound';


class App extends Component {
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
    return <BrowserRouter><div>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/app.html">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="notfound">
          <Link to="/404">404</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
        <Route path="/404" component={Notfound}/>
      </Switch>
    </div>
    </BrowserRouter>;
  }
}

export default App;
