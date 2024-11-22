import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChart = ({ labels, data, barsColor, title }) => {

    console.log(labels);
    console.log(data);

    const chartData = {
        labels: ['CA', 'CE', 'FY25'], // X-axis labels
        datasets: [
          {
            label: '',
            data: [45, 1681, 12028], // Y-axis data (corresponding to the labels)
            backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color of the bars
            borderWidth: 1, // Border width of the bars
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true },
        },
        elements: {
          bar: {
            barThickness: 6, // Optional: Set the thickness for further customization
          },
        },
        indexAxis: 'y', // This makes the bar chart horizontal
    };
    
    return <Bar data={chartData} options={options} />;
}

export default BarChart