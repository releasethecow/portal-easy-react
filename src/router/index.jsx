'use strict';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pane from './component/widget/pane';
import Menu from './component/widget/menu';
import Home from './component/page/home';
import About from './component/page/about';
import Notfound from './component/page/notfound';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BrowserRouter>
    <Pane
      menu={
        <Menu />
      }
      content={
        <div className="content">
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
          <Route path="/404" component={Notfound}/>
        </Switch>
        </div>
      }
    />
    </BrowserRouter>;
  }
}

export default App;
