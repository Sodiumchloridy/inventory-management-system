"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function MeterDemand() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Meter Demand",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 80],
    },
  ]);

  return (
    <div className="p-4 rounded-3xl shadow-2xl w-full">
      <h1 className="font-bold text-3xl m-4">Meter Demand</h1>
      {typeof window !== "undefined" ? (
        <Chart options={options} series={series} type="bar" width="100%" />
      ) : null}
    </div>
  );
}
