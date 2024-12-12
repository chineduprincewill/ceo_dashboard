import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const HTSPOSLineChart = ({ labels, indicators }) => {
    const chartData = {
        labels: labels?.PVLS_month?.data[0].split(','), // X-axis labels
        datasets: [
          {
            label: 'Target',
            data: indicators?.MonthlyHTSPosTrend?.total_monthly_targets, // Y-axis data (corresponding to the labels)
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 0.4)', // Area color (under the line)
            fill: true, // Whether to fill the area under the line
            tension: 0.4,  //Smoothness of the line (0 = sharp, 1 = smooth curve)
            borderWidth: 2, // Border width of the line
          },
          {
            label: 'Achievement',
            data: indicators?.PosTrendByMonths?.data[0].split(','), // Y-axis data (corresponding to the labels)
            borderColor: 'rgba(5, 59, 150, 1)', // Line color
            backgroundColor: 'rgba(5, 59, 150, 0.4)', // Area color (under the line)
            fill: true, // Whether to fill the area under the line
            tension: 0.4,  //Smoothness of the line (0 = sharp, 1 = smooth curve)
            borderWidth: 2, // Border width of the line
          },
        ],
      };
        
      const options = {
        responsive: true, // Make the chart responsive
        plugins: {
          legend: {
            position: 'bottom', // Legend position
          },
          tooltip: {
            enabled: true, // Show tooltips
          },
        },
        scales: {
          x: {
            beginAtZero: true, // Start the x-axis at 0
            grid: {
              display: false
            },
          },
          y: {
            beginAtZero: true, // Start the y-axis at 0
            grid: {
              display: false
            },
            ticks: {
              // Optional: Customize the y-axis tick values
              stepSize: 20,
            },
          },
        },
      };
    
      return <Line data={chartData} options={options} />
}

export default HTSPOSLineChart