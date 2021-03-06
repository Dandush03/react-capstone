import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes, { oneOfType } from 'prop-types';

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

    const dataPoints1 = firstCompanyData.historical.slice(0, 70).map(company => {
      const companyData = {
        x: new Date(company.date),
        y: [company.open, company.low, company.high, company.close],
      };
      return companyData;
    });

    const dataPoints2 = secondCompanyData.historical.slice(0, 70).map(company => {
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
      backgroundColor: 'transparent',
      axisX: {
        interval: 1,
        valueFormatString: 'D MMM YYYY',
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
      <div className="chart">
        <CanvasJSChart options={options} onRef={ref => { this.chart = ref; }} />
      </div>
    );
  }
}

Chart.propTypes = {
  firstCompanyInfo: PropTypes.objectOf(PropTypes.string),
  secondCompanyInfo: PropTypes.objectOf(PropTypes.string),
  firstCompanyData: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.array])),
  secondCompanyData: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.array])),
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
