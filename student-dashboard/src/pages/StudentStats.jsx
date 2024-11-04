import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsContainer = styled.section`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
`;

const ChartTitle = styled.h2`
  color: #e0e0e0;
  text-align: center;
`;

function StudentStats({ students }) {
  const courseNames = [
    "Communication III",
    "Design V",
    "Development V",
    "Expert Lab",
    "Final Work",
    "Grow III",
    "Internship",
  ];
  const averages = courseNames.map((course) => {
    const total = students.reduce(
      (acc, student) => acc + student.courses[course],
      0
    );
    return total / students.length;
  });

  const data = {
    labels: courseNames,
    datasets: [
      {
        label: "Average Grades per Course",
        data: averages,
        backgroundColor: "#4caf50",
        borderColor: "#388e3c",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e0e0e0",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#e0e0e0" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#e0e0e0" },
      },
    },
  };

  return (
    <StatsContainer>
      <ChartTitle>Average Grades by Course</ChartTitle>
      <Bar key={JSON.stringify(data)} data={data} options={options} />
    </StatsContainer>
  );
}

export default StudentStats;
