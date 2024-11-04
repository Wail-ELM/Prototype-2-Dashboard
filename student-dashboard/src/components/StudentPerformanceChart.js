import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

function StudentPerformanceChart({ student }) {
  const data = {
    labels: Object.keys(student.courses),
    datasets: [{
      label: 'Grades',
      data: Object.values(student.courses),
      backgroundColor: 'rgba(184, 155, 114, 0.6)',
      borderColor: '#8c7a6b',
      borderWidth: 1,
    }]
  };

  const options = {
    scales: {
      r: {
        angleLines: { color: '#ccc' },
        grid: { color: '#ddd' },
        pointLabels: { color: '#4b4b4b' },
        ticks: { backdropColor: '#f9f6f1' }
      }
    }
  };

  return <Radar data={data} options={options} />;
}

export default StudentPerformanceChart;
