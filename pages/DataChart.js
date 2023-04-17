import axios from "axios";
import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { render } from "react-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { fetchData } from "./Data.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

function getLabels(dbData) {
  const arr = Array.from(dbData);

  let years = [];
  let change = [];
  console.log(arr);
  arr.forEach((row) => {
    years.push(row[0].substring(0, 4));
    change.push(parseFloat(row[1]));
  });
  console.log(years);
  return { years };
}

function getChange(dbData) {
  const arr = Array.from(dbData);
  let years = [];
  let change = [];
  arr.forEach((row) => {
    years.push(parseString(row[0].substring(0, 4)));
    change.push(parseFloat(row[1]));
  });
  return { change };
}

const DataChart = () => {
  const [data, setData] = React.useState([]);
  const fetchApi = async () => {
    const data = await fetchData();
    setData(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  console.log("hello" + data);

  const labels = getLabels(data);
  const change = getChange(data);
  const lineChart = data[0] ? (
    <Line
      data={{
        labels: labels,
        dataSets: [
          {
            data: change,
          },
        ],
      }}
    />
  ) : null;
  return <div className="col-10">{lineChart}</div>;
};

export default DataChart;
