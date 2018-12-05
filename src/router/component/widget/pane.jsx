import './pane.scss';
import React, { Component } from 'react';

export default class Pane extends Component {
  render() {
    return <div className="pane">
    <div className="pane-menu">
      {this.props.menu}
    </div>
    <div className="pane-content">
      {this.props.content}
    </div>
  </div>  }
}