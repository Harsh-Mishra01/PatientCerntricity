import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const TrialStack = () => {
    const [Yaxis, setYasix] = useState(["Mounjaro","Ilaris","Tzield","Efpeglenatide"])
    const [FinancialxAxis, setFinancialxAxis] = useState([10,9,9,8])
    const [NursingxAxis, setNursingxAxis] = useState([10,9,8,8])
    const [PaperworkxAxis, setPaperworkxAxis] = useState([10,9,10,8])
  
  

    const onratingchange = async (event) => {
        const selectedRating = event.target.value;
        console.log(selectedRating)
        if (selectedRating === "High") {
            setYasix(["Mounjaro","Ilaris","Tzield","Efpeglenatide"])
            setFinancialxAxis([10,9,9,8]);
            setNursingxAxis([10,9,8,8]);
            setPaperworkxAxis([10,9,10,8]);
        }
        else if (selectedRating === "Medium") {
            setYasix(["Cagrilintide","Lyumjev","Pegylated Exendin-4"])
            setFinancialxAxis([7,7,6]);
            setNursingxAxis([6,7,7]);
            setPaperworkxAxis([8,7,8]);
        }
        else if (selectedRating === "Low") {
            setYasix(["Zynquista","NNC9204-1177","ORMD-0801"])
            setFinancialxAxis([4,4,4]);
            setNursingxAxis([4,4,4]);
            setPaperworkxAxis([4,4,4]);
        }
    }
    const data = {
        labels: Yaxis,
        datasets: [
            {
                label: 'Patient-Centricity-Sentiment',
                backgroundColor: 'purple',
                data: FinancialxAxis,
                borderWidth: 0,
                barThickness: 15, // Adjust bar thickness (reduce the value for thinner bars)
            maxBarThickness: 20, // Limit the max thickness of the bars
            },
            {
                label: 'Transparency',
                backgroundColor: 'mediumorchid',
                data: NursingxAxis,
                borderWidth: 0,
                barThickness: 15, // Adjust bar thickness (reduce the value for thinner bars)
            maxBarThickness: 20, // Limit the max thickness of the bars
            },
            {
                label: 'Trial Support',
                backgroundColor: '#e8b0ef',
                data: PaperworkxAxis,
                borderWidth: 0,
                barThickness: 15, // Adjust bar thickness (reduce the value for thinner bars)
            maxBarThickness: 20, // Limit the max thickness of the bars
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Important to allow the chart to resize properly
        plugins: {
            legend: {
                position: 'bottom',
                display: true, // Show legend
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    display: false, // Hide x-axis labels
                },
                grid: {
                    drawBorder: false, // Remove grid border on x-axis
                    display: false,    // Hide gridlines on x-axis
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: true, // Show y-axis labels
                },
                grid: {
                    drawBorder: false, // Remove grid border on y-axis
                    display: false,    // Hide gridlines on y-axis
                },
            },
        },
        hover: {
            mode: null,  // Disable hover effect (highlighting on hover)
        },
        interaction: {
            mode: null,  // Disable interaction on hover
        },
        indexAxis: 'y',  // Ensure the bars are vertical (set to 'x' for vertical bars)
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
                        <option value="" disabled>
                            Filter by rating
                        </option>
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

export default TrialStack;
