import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header__cont"></div>
      </div>
    );
  }
}
