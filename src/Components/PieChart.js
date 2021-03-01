import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import "../Styles/PieChart.css";

const PieChart = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then(res => res.json())
      .then(data => setData(data.pieChartData));
  }, []);

  return (
    <div className="piechart-root">
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: "popular UI framework",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default PieChart;
