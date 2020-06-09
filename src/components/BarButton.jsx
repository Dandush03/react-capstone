import React from 'react';

import toggleFunction from '../javascript/header';

const BarButton = () => (
  <button type="button" className="hamburger" onClick={toggleFunction}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </button>
);

export default BarButton;
