import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getDetails } from '../actions/fetchCompanies';
import CompanyDetails from './CompanyDetails';

class Details extends Component {
  constructor(props) {
    super(props);
    const { getDetails, symbol } = props;
    getDetails(symbol);
  }

  render() {
    const { props: { company } } = this;
    return (
      <div className="details">
        {company.length > 0 ? <CompanyDetails props={company} /> : <div />}
      </div>
    );
  }
}

Details.propTypes = {
  company: PropTypes.arrayOf(PropTypes.object).isRequired,
  getDetails: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};

const structeredSelector = createStructuredSelector({
  company: state => state.details,
});

const mapDispatchToProps = { getDetails };

export default connect(structeredSelector, mapDispatchToProps)(Details);
