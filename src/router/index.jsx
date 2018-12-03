'use strict';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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
      <Link to="/app.html">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/404">404</Link> | 
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
