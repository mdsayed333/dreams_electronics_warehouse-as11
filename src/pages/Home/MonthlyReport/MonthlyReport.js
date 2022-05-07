import React, { useEffect, useState, PureComponent } from "react";
import {
  AreaChart,
  Area,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./MonthlyReport.css";

const MonthlyReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/report")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="container">
      <div className="row pb-5 chart-section">
        <h1 className="text-center title my-5">
          Monthly Investment, Seals And Revenue
        </h1>
        <div className="col-md-6">
          <div className="chartContainer p-3">
            <h2 className="title">Investment and Seals</h2>
            <ComposedChart
              width={450}
              height={350}
              data={reports}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="month" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" barSize={20} fill="#303441" />
              <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>

        <div className="col-md-6">
          <div className="chartContainer p-3">
            <h2 className="title">Sells and Revenue</h2>
            <AreaChart
              width={450}
              height={350}
              data={reports}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#ff0000"
                fill="#303441"
              />
              <Area
                type="monotone"
                dataKey="sell"
                stackId="1"
                stroke="#131314"
                fill="#ffc658"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
