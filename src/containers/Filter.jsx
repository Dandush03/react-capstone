import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { filterCompanies } from '../actions/fetchCompanies';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.selectHander = this.selectHander.bind(this);
    const abc = ['all', 'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z'];
    this.abc = abc;
  }

  selectHander(name) {
    const { props: { filterCompanies } } = this;
    filterCompanies(name);
  }

  render() {
    const { props: { filter }, selectHander, abc } = this;

    const btns = abc.map(char => (
      <button
        type="button"
        onClick={() => selectHander(char)}
        key={`btn-${char}`}
        className={char === filter ? 'active' : ''}
      >
        {char}
      </button>
    ));
    return (
      <div className="filter">
        { btns }
      </div>
    );
  }
}

Filter.propTypes = {
  filterCompanies: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const structeredSelector = createStructuredSelector({
  filter: state => state.filter,
});

const mapDispatchToProps = { filterCompanies };

export default connect(structeredSelector, mapDispatchToProps)(Filter);
