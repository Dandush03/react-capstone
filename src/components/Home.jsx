import React, { Component } from 'react';

import Header from './Header';
import ListOfCompany from '../containers/ListOfCompany';

export default class Compare extends Component {
  componentDidMount() {
    const title = document.title.split('|');
    document.title = `${title[0]} | Home`;

    const menu = document.getElementsByTagName('menu')[0];
    const li = menu.getElementsByTagName('li')[0];
    li.classList.add('selected');
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <ListOfCompany />
      </div>
    );
  }
}
