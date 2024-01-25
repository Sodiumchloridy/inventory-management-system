"use client";
import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class MeterDemand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        }
      },
      series: [
        {
          name: "Meter Demand",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 80]
        }
      ]
    };
  }

  render() {
    return (
      <div className="p-4 rounded-3xl shadow-2xl w-full">
        <h1 className="font-bold">Meter Demand</h1>        
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </div>
    );
  }
}