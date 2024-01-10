import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Text,
} from "recharts";

const data = [
  { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 2000, pv: 2098, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const Earning = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={<CustomXAxisTick />} />
      <YAxis tick={<CustomYAxisTick />} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

const CustomXAxisTick = ({ x, y, payload }) => {
  const timeLabels = {
    "Page A": "12:00 AM",
    "Page G": "11.59 PM",
    "Page D": "NOW",
  };

  return (
    <Text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
      {timeLabels[payload.value]}
    </Text>
  );
};

const CustomYAxisTick = ({ x, y, payload }) => {
  const yLabels = {
    0: "0K",
    5000: "5K",
    10000: "10K",
    100000: "100K",
  };

  return (
    <Text x={x} y={y} dy={16} textAnchor="end" fill="#666">
      {yLabels[payload.value]}
    </Text>
  );
};

export default Earning;
