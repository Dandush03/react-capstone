import React, { Component } from 'react';

import Chart from '../components/Chart';
import Selector from '../components/Selector';
import Title from '../components/Title';
import Header from './Header';

export default class Compare extends Component {
  componentDidMount() {
    const title = document.title.split('|');
    document.title = `${title[0]} | Compare`;

    const menu = document.getElementsByTagName('menu')[0];
    const li = menu.getElementsByTagName('li')[1];
    li.classList.add('selected');
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Title />
        <Selector />
        <Chart />
      </div>
    );
  }
}
