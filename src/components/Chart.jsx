import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import CanvasJSReact from '../assets/canvasjs.react';

const { CanvasJS } = CanvasJSReact;
const { CanvasJSChart } = CanvasJSReact;
const dataPoints1 = [];
const dataPoints2 = [];
// initial values
const yValue1 = 408;
const yValue2 = 350;
const xValue = 5;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this);
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  componentDidMount() {
    this.updateChart(4);
    console.log(this);
  }

  toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  updateChart(count) {
    count = count || 1;
    const {
      props: {
        firstCompanyData, secondCompanyData, firstCompanyInfo, secondCompanyInfo,
      },
    } = this;
    console.log(firstCompanyInfo, secondCompanyInfo);

    let deltaY1;
    let deltaY2;
    for (let i = 0; i < firstCompanyData.length; i += 1) {
      dataPoints1.push({
        x: firstCompanyData[i].date,
        y: firstCompanyData[i].close,
      });
      dataPoints2.push({
        x: secondCompanyData[i].date,
        y: secondCompanyData[i].close,
      });
    }
    this.chart.options.data[0].legendText = ` ${firstCompanyInfo.name || ''} - ${0} km/h`;
    this.chart.options.data[1].legendText = ` ${secondCompanyInfo.name || ''} - ${0} km/h`;
    this.chart.render();
  }

  render() {
    const options = {
      zoomEnabled: true,
      theme: 'light2',
      title: {
        text: 'Comparation between two Assets',
      },
      axisY: {
        includeZero: false,
      },
      toolTip: {
        shared: true,
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
          type: 'stepLine',
          xValueFormatString: 'MMM YYYY',
          yValueFormatString: '#,##0 km/h',
          showInLegend: true,
          name: 'Bugatti Veyron',
          dataPoints: dataPoints1,
        },
        {
          type: 'stepLine',
          xValueFormatString: '#,##0 seconds',
          yValueFormatString: '#,##0 km/h',
          showInLegend: true,
          name: 'Lamborghini Aventador',
          dataPoints: dataPoints2,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          onRef={ref => this.chart = ref}
        />
        {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
      </div>
    );
  }
}

Chart.propTypes = {
  firstCompanyInfo: PropTypes.objectOf(PropTypes.object),
  secondCompanyInfo: PropTypes.objectOf(PropTypes.object),
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
  firstCompanyInfo: state => state.selector.first,
  secondCompanyInfo: state => state.selector.second,
  firstCompanyData: state => state.loadData.firstCompany,
  secondCompanyData: state => state.loadData.secondCompany,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Chart);
