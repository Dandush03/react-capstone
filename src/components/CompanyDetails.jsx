import React from 'react';

const CompanyDetails = e => {
  const { props: [company] } = e;
  const {
    companyName, symbol, ceo, description,
    exchange, exchangeShortName, volAvg,
    mktCap,
  } = company;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <div className="title">
        <h1>{companyName}</h1>
        <p>
          (
          {symbol}
          )
        </p>
      </div>
      <div>
        <p>{description}</p>
        <p>
          CEO:
          {ceo}
        </p>
      </div>
      <div className="index">
        <h1>
          {exchange}
        </h1>
        <span>
          (
          {exchangeShortName}
          )
        </span>
      </div>
      <div className="capital">
        <span>
          Market Capital:
        </span>
        <h4>
          {formatter.format(mktCap)}
        </h4>
      </div>
      <div>
        <span>
          Trading Volium Average:
        </span>
        <h4>
          {formatter.format(volAvg)}
        </h4>
      </div>
      <div>
        <a href="/">return</a>
      </div>
    </>
  );
};

export default CompanyDetails;
