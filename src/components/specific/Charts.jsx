import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { lightOrange, lightPurple, orange, purpleColor } from "../constants/color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({value=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Messages",
        fill: true,
        backgroundColor: lightPurple,
        borderColor: purpleColor,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions}></Line>;
};

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120
}

const DoughnutChart = ({value=[], labels=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: [lightPurple, lightOrange],
        borderColor: [purpleColor, orange],
        hoverBackgroundColor: [purpleColor, orange],
        offset: 40
      },
    ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={DoughnutChartOptions}/>;
};

export { LineChart, DoughnutChart };
