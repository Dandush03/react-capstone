import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Details from '../containers/Details';

export default class CompanyDetails extends Component {
  componentDidMount() {
    const { props: { symbol } } = this;
    const title = document.title.split('|');
    document.title = `${title[0]} | ${symbol}`;

    const menu = document.getElementsByTagName('menu')[0];
    const li = menu.getElementsByTagName('li')[2];
    li.classList.add('selected');
  }

  render() {
    const { props: { symbol } } = this;
    return (
      <div className="wrapper">
        <Header />
        <Details symbol={symbol} />
      </div>
    );
  }
}

CompanyDetails.propTypes = {
  symbol: PropTypes.string.isRequired,
};
