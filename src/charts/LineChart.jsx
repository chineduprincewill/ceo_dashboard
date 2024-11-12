import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const LineChart = ({ labels, data, barsColor, bgColor, title }) => {

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'], // X-axis labels
    datasets: [
      {
        label: '',
        data: [13, 12, 16, 17], // Y-axis data (corresponding to the labels)
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area color (under the line)
        fill: true, // Whether to fill the area under the line
        tension: 0.4, // Smoothness of the line (0 = sharp, 1 = smooth curve)
        borderWidth: 2, // Border width of the line
      },
    ],
  };
    
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: 'top', // Legend position
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at 0
      },
      y: {
        beginAtZero: true, // Start the y-axis at 0
        ticks: {
          // Optional: Customize the y-axis tick values
          stepSize: 20,
        },
      },
    },
  };

    return <Line data={chartData} options={options} />
}

export default LineChart