import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsContainer = styled.section`
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const ChartTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 20px;
`;

function HomePage({ students }) {
  const courseNames = ["Communication III", "Design V", "Development V", "Expert Lab", "Final Work", "Grow III", "Internship"];
  const averages = courseNames.map(course => {
    const total = students.reduce((acc, student) => acc + student.courses[course], 0);
    return total / students.length;
  });

  const data = {
    labels: courseNames,
    datasets: [
      {
        label: 'Average Grades per Course',
        data: averages,
        backgroundColor: '#b89b72',
        borderColor: '#8c7a6b',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#4b4b4b'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#4b4b4b' },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#4b4b4b' },
      }
    }
  };

  return (
    <StatsContainer>
      <ChartTitle>Average Grades by Course</ChartTitle>
      <Bar key={JSON.stringify(data)} data={data} options={options} />
    </StatsContainer>
  );
}

export default HomePage;
