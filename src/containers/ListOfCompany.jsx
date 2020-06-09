import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getCompaniesArray } from '../actions/fetchCompanies';
import { handlePopUp } from '../actions/popUp';

import Company from './Company';
import Filter from './Filter';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    const { props: { getCompaniesArray } } = this;
    getCompaniesArray();
  }

  togglePopup(btn) {
    const { props: { handlePopUp } } = this;
    handlePopUp(btn, true);
  }

  render() {
    const { props, togglePopup } = this;
    const { companies, popUp, filter } = props;
    let showCompanies;
    if (filter === 'all') {
      showCompanies = companies;
    } else {
      showCompanies = companies.filter(c => (c.name && c.name.split('').shift().toLowerCase() === filter));
    }
    const companiesList = showCompanies.map(company => (
      <button type="button" key={`company-${company.symbol}`} className="company-list" onClick={() => togglePopup(company)}>
        <h1>{company.name}</h1>
        <span>{`(${company.symbol})`}</span>
      </button>
    ));
    return (
      <div className="companies">
        <Filter />
        {companiesList}
        {popUp.show ? <Company /> : null}
      </div>
    );
  }
}

Companies.propTypes = {
  handlePopUp: PropTypes.func.isRequired,
  getCompaniesArray: PropTypes.func.isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  popUp: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
  filter: PropTypes.string.isRequired,
};

const structeredSelector = createStructuredSelector({
  companies: state => state.companies,
  popUp: state => state.popUp,
  filter: state => state.filter,
});

const mapDispatchToProps = { getCompaniesArray, handlePopUp };

export default connect(structeredSelector, mapDispatchToProps)(Companies);
