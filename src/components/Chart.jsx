import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import CanvasJSReact from '../assets/canvasjs.react';

const { CanvasJSChart } = CanvasJSReact;
class Chart extends Component {
  render() {
    const {
      props: {
        firstCompanyData, firstCompanyInfo, secondCompanyData, secondCompanyInfo,
      },
    } = this;

    const dataPoints1 = firstCompanyData.slice(0, 20).map(company => {
      const companyData = {
        x: new Date(company.date),
        y: [company.open, company.low, company.high, company.close],
      };
      return companyData;
    });

    const dataPoints2 = secondCompanyData.slice(0, 20).map(company => {
      const companyData = {
        x: new Date(company.date),
        y: [company.open, company.low, company.high, company.close],
      };
      return companyData;
    });


    const options = {
      zoomEnabled: true,
      theme: 'light2',
      title: {
        text: 'Comparation between two Assets',
      },
      axisX: {
        interval: 1,
        valueFormatString: 'D MMM YYYY HH:mm:ss',
      },
      axisY: {
        includeZero: false,
        title: 'Price',
      },
      toolTip: {
        content: 'Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}',
      },
      legend: {
        cursor: 'pointer',
        verticalAlign: 'top',
        fontSize: 18,
        fontColor: 'dimGrey',
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: 'candlestick',
          yValueFormatString: '#,##.######',
          showInLegend: true,
          name: firstCompanyInfo.name || '',
          dataPoints: dataPoints1,
        },
        {
          type: 'candlestick',
          yValueFormatString: '#,##.######',
          showInLegend: true,
          name: secondCompanyInfo.name || '',
          dataPoints: dataPoints2,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => { this.chart = ref; }} />
      </div>
    );
  }
}

Chart.propTypes = {
  firstCompanyInfo: PropTypes.objectOf(PropTypes.string),
  secondCompanyInfo: PropTypes.objectOf(PropTypes.string),
  firstCompanyData: PropTypes.arrayOf(PropTypes.object),
  secondCompanyData: PropTypes.arrayOf(PropTypes.object),
};

Chart.defaultProps = {
  firstCompanyInfo: [{}],
  secondCompanyInfo: [{}],
  firstCompanyData: {},
  secondCompanyData: {},
};

const structeredSelector = createStructuredSelector({
  firstCompanyInfo: state => state.selector.first.company,
  secondCompanyInfo: state => state.selector.second.company,
  firstCompanyData: state => state.loadData.firstCompany,
  secondCompanyData: state => state.loadData.secondCompany,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Chart);
