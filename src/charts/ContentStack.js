import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const ContentStack = () => {
     // Function to calculate percentage
     const calculatePercentage = (data) => {
        const maxValue = Math.max(...data);
        return data.map(value => ((value / maxValue) * 100).toFixed(2)); // Converting to percentage
    };

    const [Yaxis, setYasix] = useState(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Glucophage", "Humalog", "Fiasp", "Januvia"]);
    const [websitexAxis, setwebsitexAxis] = useState(calculatePercentage([10, 10, 10, 10, 10, 9, 10, 10, 10, 9]));
    const [tvadsxAxis, settvadsxAxis] = useState(calculatePercentage([10, 9.5, 10, 10, 10, 9, 7, 8, 8, 9]));
    const [brochurexAxis, setbrochurexAxis] = useState(calculatePercentage([10, 10, 10, 9, 8, 9, 8, 7, 8, 9]));
    const [verbalxAxis, setverbalxAxisxAxis] = useState(calculatePercentage([10, 10, 10, 7, 8, 9, 10, 10, 10, 9]));

   
    // Function to dynamically assign colors based on percentage
    const getColor = (percentage) => {
        if (percentage <= 40) return 'red'; // Low percentage
        if (percentage <= 60) return 'orange'; // Medium percentage
        if (percentage <= 70) return 'yellow'; // Medium percentage
        if (percentage <= 79) return '#99fb99'; // Medium percentage
        if (percentage <= 89) return '#66ff66'; // Medium percentage
        return '#006400'; // High percentage
    };

    // Get colors for all data points in a dataset
    const getColorsForDataset = (data) => {
        return data.map(value => getColor(value));
    };

    const onratingchange = async (event) => {
        const selectedRating = event.target.value;
        if (selectedRating === "High") {
            setYasix(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Glucophage", "Humalog", "Fiasp", "Januvia"]);
            setwebsitexAxis(calculatePercentage([10, 10, 10, 10, 10, 9, 10, 10, 10, 9]));
            settvadsxAxis(calculatePercentage([10, 9.5, 10, 10, 10, 9, 7, 8, 8, 9]));
            setbrochurexAxis(calculatePercentage([10, 10, 10, 9, 8, 9, 8, 7, 8, 9]));
            setverbalxAxisxAxis(calculatePercentage([10, 10, 10, 7, 8, 9, 10, 10, 10, 9]));
        } else if (selectedRating === "Medium") {
            setYasix(["Novolog", "Invokana", "Aspart", "Evogliptin", "Apidra", "Victoza", "Omarigliptin", "Trulicity", "Onglyza", "Farxiga", "Jentadueto", "Levemir", "Byetta", "Steglatro", "Fortamet"]);
            setwebsitexAxis(calculatePercentage([8, 7, 8, 7, 7, 6, 9, 6, 8, 6, 4, 2, 5, 9, 7]));
            settvadsxAxis(calculatePercentage([8, 5, 6, 6, 7, 6, 4, 3, 6, 2, 4, 5, 5, 3, 3]));
            setbrochurexAxis(calculatePercentage([8, 4, 5, 5, 7, 4, 4, 5, 5, 4, 4, 4, 5, 3, 4]));
            setverbalxAxisxAxis(calculatePercentage([8, 8, 9, 10, 7, 8, 7, 10, 5, 8, 7, 9, 5, 5, 6]));
        } else if (selectedRating === "Low") {
            setYasix(["Nesina", "Basaglar"]);
            setwebsitexAxis(calculatePercentage([5, 2]));
            settvadsxAxis(calculatePercentage([6, 2]));
            setbrochurexAxis(calculatePercentage([3, 2]));
            setverbalxAxisxAxis(calculatePercentage([6, 2]));
        }
    };

    const data = {
        labels: Yaxis,
        datasets: [
            {
                label: 'Website',
                backgroundColor: getColorsForDataset(websitexAxis),
                data: websitexAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'TV ads',
                backgroundColor: getColorsForDataset(tvadsxAxis),
                data: tvadsxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Brochure',
                backgroundColor: getColorsForDataset(brochurexAxis),
                data: brochurexAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Verbal communication',
                backgroundColor: getColorsForDataset(verbalxAxis),
                data: verbalxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
                    display: false, // Hide x-axis labels
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: true,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
        hover: {
            mode: null,
        },
        interaction: {
            mode: null,
        },
        indexAxis: 'y',
    };

    return (
        <Container fluid className="p-0 mt-4">
            <Card className="w-100">
                <Card.Body className="p-0">
                    <h3 className="chart-title mb-3 mt-3 ml-2">Top Patient Centric Brands - Content</h3>

                    <select
                        id="disease"
                        name="disease"
                        className="forum-container2"
                        onChange={onratingchange}
                        defaultValue=""
                    >
                        <option value="" disabled>Filter by rating</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <div className="chart-container" style={{ width: '95%', height: '348px', marginLeft: '25px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ContentStack;
