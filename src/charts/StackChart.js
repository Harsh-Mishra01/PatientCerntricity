import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const StackChart = () => {
    // Initializing with 'High' values by default
    const [Yaxis, setYasix] = useState(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Humalog", "Novolog", "Glucophage", "Januvia", "Invokana"]);
    const [contentxAxis, setcontentxAxis] = useState([100, 100, 100, 90, 90, 90, 90, 90, 70, 90, 90]); // Already in percentage format
    const [supportxAxis, setsupportxAxis] = useState([100, 100, 100, 100, 100, 90, 90, 90, 90, 70, 70]);
    const [productxAxis, setproductxAxis] = useState([100, 100, 100, 100, 90, 90, 90, 90, 90, 80, 80]);

    // Function to calculate percentage for each dataset
    const calculatePercentage = (data) => {
        const maxValue = Math.max(...data); // Get the maximum value in the dataset
        return data.map(value => ((value / maxValue) * 100).toFixed(2)); // Convert each value to a percentage
    };

    // Function to dynamically assign colors based on percentage
    const getColor = (percentage) => {
        if (percentage <= 40) return 'red'; // Low percentage
        if (percentage <= 60) return 'orange'; // Medium percentage
        if (percentage <= 70) return 'yellow'; // Medium percentage
        if (percentage <= 79) return '#99fb99'; // Medium percentage
        if (percentage <= 89) return '#66ff66'; // Medium percentage
        // if (percentage <= 89) return 'Dark Green'; // Medium percentage
        return '#006400'; // High percentage
    };

    // Function to get colors for all data points in a dataset
    const getColorsForDataset = (data) => {
        return data.map(value => getColor(value));
    };

    // Handling dropdown selection and updating data
    const onratingchange = async (event) => {
        const selectedRating = event.target.value;
        if (selectedRating === "High") {
            setYasix(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Humalog", "Novolog", "Glucophage", "Januvia", "Invokana"]);
            setcontentxAxis(calculatePercentage([10, 10, 10, 9, 9, 9, 9, 9, 7, 9, 9]));
            setsupportxAxis(calculatePercentage([10, 10, 10, 10, 10, 9, 9, 9, 9, 7, 7]));
            setproductxAxis(calculatePercentage([10, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8]));
        }
        else if (selectedRating === "Medium") {
            setYasix(["Fiasp", "Aspart", "Evogliptin", "Apidra", "Victoza", "Omarigliptin", "Trulicity", "Onglyza"]);
            setcontentxAxis(calculatePercentage([6, 7, 7, 7, 6, 6, 6, 6]));
            setsupportxAxis(calculatePercentage([8, 7, 6, 6, 6, 6, 5, 5]));
            setproductxAxis(calculatePercentage([9, 8, 7, 7, 7, 7, 8, 7]));
        }
        else if (selectedRating === "Low") {
            setYasix(["Farxiga", "Jentadueto", "Levemir", "Byetta", "Steglatro", "Fortamet", "Nesina", "Basaglar"]);
            setcontentxAxis(calculatePercentage([5, 5, 5, 5, 5, 5, 4, 2]));
            setsupportxAxis(calculatePercentage([5, 5, 5, 5, 5, 5, 4, 2]));
            setproductxAxis(calculatePercentage([7, 6, 6, 6, 6, 6, 4, 4]));
        }
    };

    const data = {
        labels: Yaxis,
        datasets: [
            {
                label: 'Content',
                backgroundColor: getColorsForDataset(contentxAxis), // Dynamic colors for content
                data: contentxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Support',
                backgroundColor: getColorsForDataset(supportxAxis), // Dynamic colors for support
                data: supportxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Product',
                backgroundColor: getColorsForDataset(productxAxis), // Dynamic colors for product
                data: productxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the chart to resize properly
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw}%`, // Display percentage in tooltip
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    display: true, // Show x-axis labels (percentage ticks)
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: true, // Show y-axis labels
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
        hover: {
            mode: null,  // Disable hover effect
        },
        interaction: {
            mode: null,  // Disable interaction on hover
        },
        indexAxis: 'y',  // Horizontal bars
    };

    return (
        <Container fluid className="p-0 mt-4">
            <Card className="w-100">
                <Card.Body className="p-0">
                    <h3 className="chart-title mb-3 mt-3 ml-2">Top Patient Centric Brands</h3>

                    <select
                        id="disease"
                        name="disease"
                        className="forum-container2"
                        onChange={onratingchange}
                        defaultValue="High" // Set the default value to "High"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <div className="chart-container" style={{ width: '95%', height: '300px', marginLeft: '25px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StackChart;
