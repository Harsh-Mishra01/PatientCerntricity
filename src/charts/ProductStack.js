import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const ProductStack = () => {
    const calculatePercentage = (data) => {
        const maxValue = Math.max(...data);
        return data.map(value => ((value / maxValue) * 100).toFixed(2)); // Converting to percentage
    };
    const [Yaxis, setYasix] = useState(["Ozempic","Saxenda","Wegovy","Jardiance","Mounjaro","Janumet","Glucophage","Humalog","Novolog","Fiasp","Januvia","Invokana","Aspart","Trulicity"]);
    const [efficacyxAxis, setefficacyxAxis] = useState(calculatePercentage([10, 10, 10, 10, 9, 10, 10, 9, 9, 8, 9, 10, 9, 8]));
    const [sideeffectxAxis, setsideeffectxAxis] = useState(calculatePercentage([10, 9, 10, 10, 9, 8, 8, 9, 9, 8, 7, 8, 7, 8]));

    // Function to calculate percentage
    

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
            setYasix(["Ozempic","Saxenda","Wegovy","Jardiance","Mounjaro","Janumet","Glucophage","Humalog","Novolog","Fiasp","Januvia","Invokana","Aspart","Trulicity"]);
            setefficacyxAxis(calculatePercentage([10, 10, 10, 10, 9, 10, 10, 9, 9, 8, 9, 10, 9, 8]));
            setsideeffectxAxis(calculatePercentage([10, 9, 10, 10, 9, 8, 8, 9, 9, 8, 7, 8, 7, 8]));
        } else if (selectedRating === "Medium") {
            setYasix(["Evogliptin","Apidra","Victoza","Omarigliptin","Onglyza","Farxiga","Jentadueto","Levemir","Byetta","Steglatro","Fortamet"]);
            setefficacyxAxis(calculatePercentage([7, 8, 7, 8, 7, 7, 6, 7, 6, 6, 8]));
            setsideeffectxAxis(calculatePercentage([7, 6, 7, 6, 7, 7, 6, 5, 6, 6, 4]));
        } else if (selectedRating === "Low") {
            setYasix(["Nesina","Basaglar"]);
            setefficacyxAxis(calculatePercentage([4, 5]));
            setsideeffectxAxis(calculatePercentage([4, 3]));
        }
    };

    const data = {
        labels: Yaxis,
        datasets: [
            {
                label: 'Efficacy',
                backgroundColor: getColorsForDataset(efficacyxAxis), // Dynamic colors for efficacy
                data: efficacyxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Side effects',
                backgroundColor: getColorsForDataset(sideeffectxAxis), // Dynamic colors for side effects
                data: sideeffectxAxis,
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
                    display: true,
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
                    <h3 className="chart-title mb-3 mt-3 ml-2">Top Patient Centric Brands - Product</h3>

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

                    <div className="chart-container" style={{ width: '95%', height: '360px', marginLeft: '25px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductStack;
