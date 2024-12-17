import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const SupportStack = () => {
    const calculatePercentage = (data) => {
        const maxValue = Math.max(...data);
        return data.map(value => ((value / maxValue) * 100).toFixed(2)); // Converting to percentage
    };

    const [Yaxis, setYaxis] = useState(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Glucophage", "Humalog", "Novolog", "Invokana"]);
    const [FinancialxAxis, setFinancialxAxis] = useState(calculatePercentage([10, 10, 10, 10, 10, 10, 9, 10, 9, 8]));
    const [NursingxAxis, setNursingxAxis] = useState(calculatePercentage([10, 10, 10, 10, 10, 8, 7, 7, 9, 9]));
    const [PaperworkxAxis, setPaperworkxAxis] = useState(calculatePercentage([10, 10, 10, 10, 10, 9, 8, 10, 9, 7]));

    // Dynamic color assignment logic
    const getColor = (percentage) => {
        if (percentage <= 40) return 'red';
        if (percentage <= 60) return 'orange';
        if (percentage <= 70) return 'yellow';
        if (percentage <= 79) return '#99fb99';
        if (percentage <= 89) return '#66ff66';
        return '#006400';
    };

    const getColorsForDataset = (data) => {
        return data.map(value => getColor(value));
    };

    const onRatingChange = async (event) => {
        const selectedRating = event.target.value;
        if (selectedRating === "High") {
            setYaxis(["Ozempic", "Saxenda", "Wegovy", "Jardiance", "Mounjaro", "Janumet", "Glucophage", "Humalog", "Novolog", "Invokana"]);
            setFinancialxAxis(calculatePercentage([10, 10, 10, 10, 10, 10, 9, 10, 9, 8]));
            setNursingxAxis(calculatePercentage([10, 10, 10, 10, 10, 8, 7, 7, 9, 9]));
            setPaperworkxAxis(calculatePercentage([10, 10, 10, 10, 10, 9, 8, 10, 9, 7]));
        } else if (selectedRating === "Medium") {
            setYaxis(["Fiasp", "Januvia", "Aspart", "Evogliptin", "Apidra", "Victoza", "Omarigliptin", "Trulicity", "Onglyza", "Farxiga"]);
            setFinancialxAxis(calculatePercentage([7, 8, 7, 6, 7, 6, 6, 7, 5, 4]));
            setNursingxAxis(calculatePercentage([7, 6, 7, 6, 5, 5, 6, 4, 6, 5]));
            setPaperworkxAxis(calculatePercentage([7, 7, 7, 6, 6, 7, 6, 4, 5, 7]));
        } else if (selectedRating === "Low") {
            setYaxis(["Nesina", "Basaglar"]);
            setFinancialxAxis(calculatePercentage([4, 2]));
            setNursingxAxis(calculatePercentage([4, 2]));
            setPaperworkxAxis(calculatePercentage([4, 2]));
        }
    };

    const data = {
        labels: Yaxis,
        datasets: [
            {
                label: 'Financial Support',
                backgroundColor: getColorsForDataset(FinancialxAxis),
                data: FinancialxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Nursing Support',
                backgroundColor: getColorsForDataset(NursingxAxis),
                data: NursingxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
            {
                label: 'Paperwork Support',
                backgroundColor: getColorsForDataset(PaperworkxAxis),
                data: PaperworkxAxis,
                borderWidth: 0,
                barThickness: 15,
                maxBarThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                display: false, // Show legend
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
                    display: false, // Hide gridlines on x-axis
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: true, // Show y-axis labels
                },
                grid: {
                    drawBorder: false,
                    display: false, // Hide gridlines on y-axis
                },
            },
        },
        hover: {
            mode: null, // Disable hover effect
        },
        interaction: {
            mode: null, // Disable interaction on hover
        },
        indexAxis: 'y', // Horizontal bars
    };

    return (
        <Container fluid className="p-0 mt-4">
            <Card className="w-100">
                <Card.Body className="p-0">
                    <h3 className="chart-title mb-3 mt-3 ml-2">Top Patient Centric Brands - Support</h3>

                    <select
                        id="disease"
                        name="disease"
                        className="forum-container2"
                        onChange={onRatingChange}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Filter by rating
                        </option>
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

export default SupportStack;
