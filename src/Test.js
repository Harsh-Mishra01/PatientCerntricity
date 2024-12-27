import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../components/Header";
import { TopForums } from "../components/TopForums";
import { TopBrands } from "../components/TopBrands";
import MostFrequentTopicsChart from "../charts/MostFrequentTopics";
import { SingleBarChart } from "../charts/SingleBarChart";
import HorizontalBarChartComponent from "../charts/HorizontalBarComponent";
import DynamicCommentSection from "../components/DynamicCommentSection";
import { chartData1, chartData2, chartData3, chartData4, chartData5, chartData6, chartData13, chartData14, chartData15} from "../static/data";

// import SupportChart from "../charts/pagesCharts/SupportChart";
// import ContentChart from "../charts/pagesCharts/ContentChart";
// import TrialChart from "../charts/pagesCharts/TrialChart";
// import ProductChart from "../charts/LevelIndicatorProduct";
import StackChart from "../charts/StackChart";
import TrialStackChart from "../charts/TrialStackChart";
import ValuesChart from "../charts/ValuesChart";
// import HeatMapChart from "../charts/HeatMapChart";


export default function HomePage() {
    // Initialize state for selected disease
    const [selectedDisease, setSelectedDisease] = useState(null);
    const [chartData, setChartData] = useState(chartData1); // Default data

    // Initialize kpiData with useState
    const [kpiData, setKpiData] = useState([
        { title: "TOTAL FORUMS", number: 20 },
        { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
        { title: "TOTAL COMMENTS", number: "11,000,000" },
        { title: "AVG ENGAGEMENT", number: "8/thread" },
    ]);




 
    // Handler for the dropdown change event
  
    const title_1 = "Diabetes with Weightloss";
    const title_2 = "Diabetes";
    const title_3 = "Gliptins";
    const [title1, setTitle1] = useState("Diabetes with Weightloss");
    const [title2, setTitle2] = useState("Diabetes");
    const [title3, setTitle3] = useState("Gliptins");




    if (selectedDisease == 'Type II Diabetes') {
        setChartData(chartData13);
    } else if (selectedDisease == 'Rheumatoid Arthritis') {
        setChartData(chartData14);
    } else if (selectedDisease == 'Psoriatic Arthritis') {
        setChartData(chartData15);
    } else {
        setChartData(chartData1);
    }

    return (
        <>
            {/* Header component with home page reset on click */}
            <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />

            <Container fluid>
                <Container className="mt-2 p-3">
                    <Card >
                        <Row>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                {/* <ValuesChart data={chartData1} /> */}
                                <TrialStackChart details={chartData}/>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                <TrialStackChart details={chartData2} />
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                <TrialStackChart details={chartData3} />

                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Card className="p-3 m-2 ">
                                <TrialStackChart details={chartData4} />

                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                <TrialStackChart details={chartData5} />

                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                <TrialStackChart details={chartData6} />
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                {/* <Container>
                    <Row>
                        <Col md={12}>
                            <StackChart />
                        </Col>

                        <Col md={12}>
                            <TrialStackChart />
                        </Col>
                    </Row>
                </Container> */}
                {/* <Container className="mt-2 p-3">
                    <Row> */}
                        {/* Top Forums Section */}
                        {/* <Col lg={4} style={{ padding: "inherit" }} className="h-100">
              <TopForums data={ForumData}/>
            </Col> */}
                        {/* Top Brands Section */}
                        {/* <Col lg={12}>
                            <TopBrands data={TopDrug} />
                        </Col>
                    </Row>
                </Container> */}

                {/* Conditionally render charts based on selectedDisease */}

                <>
                    {/* Render Most Frequent Topics and Single Bar Charts */}
                    <Container className="mt-2 p-3">
                        {/* <LevelIndicatorChart/> */}
                        {/* <ProductChart/>
            <SupportChart/>
            <ContentChart/>
            <TrialChart/> */}
                        {/* <Card> */}

                        {/* <MostFrequentTopicsChart /> */}
                        <Row>
                            {/* <Col lg={4}>
                    <Card className="p-3 m-2">
                      <SingleBarChart data={singleGraphData} title={title1}/> 
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="p-3 m-2">
                      <SingleBarChart data={singleGraphData2} title={title2}/> 
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="p-3 m-2">
                      <SingleBarChart data={singleGraphData3} title={title3}/> 
                    </Card>
                  </Col> */}
                            <Col lg={12}>
                                <Card className="p-3 m-2">
                                    <Container fluid className="p-0 mt-4">
                                        <h3 className="chart-title rt">Most frequent topics</h3>
                                        {/* <Card className="w-100"> */}
                                        <Card.Body className="p-0">



                                            <div className="chart-container" style={{ textAlign: "center" }}>
                                                <img src="https://multipliersolutions.in/patient-centricity/summary.png" alt="HeatMap" style={{ width: '60%' }} />
                                            </div>
                                        </Card.Body>
                                        {/* </Card> */}
                                    </Container>
                                </Card>
                            </Col>
                        </Row>

                        {/* </Card> */}
                    </Container>
                    <Container className="mt-2 p-3">
                    <Row>
                        {/* Top Forums Section */}
                        {/* <Col lg={4} style={{ padding: "inherit" }} className="h-100">
              <TopForums data={ForumData}/>
            </Col> */}
                        {/* Top Brands Section */}
                        <Col lg={12}>
                            <TopBrands data={TopDrug} />
                        </Col>
                    </Row>
                </Container>

                    {/* Render Horizontal Bar Chart */}
                    {/* <Container>
              <Card>
                <span className="chart-title m-3">Sentiment Analysis</span>
                <HorizontalBarChartComponent dataa={SentimentData}/>
              </Card>
            </Container> */}

                    {/* Render Comments Section */}
                    <DynamicCommentSection />
                </>

                <>
                    {/* Render DoubleBarCharts when a disease is selected */}

                </>

            </Container>
        </>
    );
}

