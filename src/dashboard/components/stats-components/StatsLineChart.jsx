import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js';

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const StatsLineChart = ({ labels, data, targets }) => {
    const chartData = {
        labels: labels, // X-axis labels
        datasets: [
          {
            label: 'Achievements',
            data: data, // Y-axis data (corresponding to the labels)
            borderColor: 'rgba(5, 59, 150, 1)', // Line color
            backgroundColor: 'rgba(5, 59, 150, 0.4)', // Area color (under the line)
            fill: true, // Whether to fill the area under the line
            tension: 0.4,  //Smoothness of the line (0 = sharp, 1 = smooth curve)
            borderWidth: 2, // Border width of the line
          },
          {
            label: 'Targets',
            data: targets, // Y-axis data (corresponding to the labels)
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 0.4)', // Area color (under the line)
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
            position: 'top', // Legend position
          },
          tooltip: {
            enabled: true, // Show tooltips
          },
        },
        scales: {
          x: {
            beginAtZero: true, // Start the x-axis at 0,
            grid: {
                display: false
            },
            // Set the x-axis labels to be the index of the data, not the actual values
            ticks: {
                callback: function(value, index, ticks) {
                    return 'Week '+ (index+1);  // Display the index instead of the label value
                }
            }
          },
          y: {
            beginAtZero: true, // Start the y-axis at 0
            grid: {
                display: false
            },
          },
        },
      };
    
      return <Line data={chartData} options={options} />
}

export default StatsLineChart