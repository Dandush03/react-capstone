import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';


import { handleClosePopUp } from '../actions/popUp';

class Company extends Component {
  constructor(props) {
    super(props);
    this.togglePopup = this.togglePopup.bind(this);
    this.handleRedirection = this.handleRedirection.bind(this);
  }


  togglePopup() {
    const { props: { handleClosePopUp } } = this;
    handleClosePopUp();
  }

  handleRedirection() {
    const { props: { popUp: { data } } } = this;
    const newUrl = `/company/${data.symbol}`;
    window.location.href = newUrl;
  }

  render() {
    const { props: { popUp: { data } }, togglePopup, handleRedirection } = this;
    return (
      <div className="company-popup">
        <div>
          <div className="header-popup">
            <button type="button" onClick={() => togglePopup()}>X</button>
          </div>
          <div className="data-popup">
            <h1>{data.name}</h1>
            <div className="info">
              <div>
                <p>currency</p>
                <h4>{data.currency}</h4>
              </div>
              <div>
                <p>exchange Name</p>
                <h4>{data.exchangeShortName}</h4>
              </div>
              <div>
                <p>stock Exchange</p>
                <h4>{data.stockExchange}</h4>
              </div>
              <div>
                <p>Symbol</p>
                <h4>{data.symbol}</h4>
              </div>
            </div>
          </div>
          <div className="btns">
            <button type="button" onClick={() => togglePopup()}>OK!</button>
            <button type="button" onClick={() => handleRedirection()}>MORE INFO</button>
          </div>
        </div>
      </div>
    );
  }
}

Company.propTypes = {
  handleClosePopUp: PropTypes.func.isRequired,
  popUp: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
};

const structeredSelector = createStructuredSelector({
  popUp: state => state.popUp,
});

const mapDispatchToProps = { handleClosePopUp };

export default connect(structeredSelector, mapDispatchToProps)(Company);
