import React, { useState, useEffect } from "react";
import { createAPIEndpoint } from "../api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import MyMenu from "./MyMenu";

export default function Report() {
  const [data, setData] = useState({ barData: [] });
  useEffect(() => {
    createAPIEndpoint("Assessment")
      .fetch()
      .then((res) =>
        setData({
          barData: res.map((x) => ({
            name: x.subject,
            CountOfCorrectAnswers: x.passCount,
            CountOfWrongAnswers: x.failCount,
          })),
        })
      );
  }, []);

  return (
    <div>
      <MyMenu />

      <h2 align="center">Statistical Report For Student's Exercise</h2>
      <BarChart
        width={800}
        height={500}
        data={data.barData}
        margin={{
          top: 100,
          right: 30,
          left: 300,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="CountOfWrongAnswers" stackId="a" fill="#EE4B2B" />
        <Bar dataKey="CountOfCorrectAnswers" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
