import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/content.css";
import { DoubleBarChart1, DoubleBarChart2, DoubleBarChart3 } from "./WebsiteChart";
import jsonData from "./conversion.json"; // Import your JSON data file
import {SegmentPart} from "../components/SegmentPart";
import {TopBrands} from "../components/TopBrands";
import {CommentSection} from "../components/CommentSection";
import { Header } from "../components/Header";
import DynamicCommentSection from "../components/DynamicCommentSection";

// Function to filter data by category
const filterDataByCategory = (category) => {
  return jsonData.filter((item) => item.Category === category);
};


export default function Content() {

   // Initialize kpiData with useState
   const [kpiData, setKpiData] = useState([
    { title: "TOTAL FORUMS", number: 20 },
    { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
    { title: "TOTAL COMMENTS", number: "11,000,000" },
    { title: "AVG ENGAGEMENT", number: "8/thread" },
  ]);

  // Handler for the dropdown change event
  const handleDiseaseChange = (event) => {
    const selectedDisease = event.target.value;
    console.log("Selected Disease:", selectedDisease);

    // Update kpiData based on the selected disease
    if (selectedDisease === "Type II Diabetes") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 15 },
        { title: "TOTAL DISCUSSIONS", number: "1,50,000" },
        { title: "TOTAL COMMENTS", number: "12,000,000" },
        { title: "AVG ENGAGEMENT", number: "7/thread" },
      ]);
    } else if (selectedDisease === "Rheumatoid Arthritis") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 10 },
        { title: "TOTAL DISCUSSIONS", number: "1,00,000" },
        { title: "TOTAL COMMENTS", number: "10,000,000" },
        { title: "AVG ENGAGEMENT", number: "6/thread" },
      ]);
    } else if (selectedDisease === "Psoriatic Arthritis") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 8 },
        { title: "TOTAL DISCUSSIONS", number: "90,000" },
        { title: "TOTAL COMMENTS", number: "9,000,000" },
        { title: "AVG ENGAGEMENT", number: "5/thread" },
      ]);
    } else if (selectedDisease === "Lung Cancer") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 7 },
        { title: "TOTAL DISCUSSIONS", number: "20,000" },
        { title: "TOTAL COMMENTS", number: "11,000,000" },
        { title: "AVG ENGAGEMENT", number: "8/thread" },
      ]);
    }  else if (selectedDisease === "Breast Cancer") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 4 },
        { title: "TOTAL DISCUSSIONS", number: "94,000" },
        { title: "TOTAL COMMENTS", number: "8,000,000" },
        { title: "AVG ENGAGEMENT", number: "7/thread" },
      ]);
    } else {
      // Reset or handle default case
      setKpiData([
        { title: "TOTAL FORUMS", number: 20 },
        { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
        { title: "TOTAL COMMENTS", number: "11,000,000" },
        { title: "AVG ENGAGEMENT", number: "8/thread" },
      ]);
    }
  };

  // Filter data for each category
  const websiteData = filterDataByCategory("Website");

  return (
    <>
    <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
      <Container>
        <Container className="mt-2 p-3">
          <Row>
            <Col lg={4} style={{padding:"inherit"}} className="h-100">
              <SegmentPart/>
            </Col>

            <Col lg={8}>
             <TopBrands/>
            </Col>
          </Row>
        </Container>
        {/* Other sections */}
        
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Website</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart1 data={websiteData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart2 data={websiteData} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart3 data={websiteData} />
                </Card>
              </Col>
            </Row>
           
          </Card>
        </Container>
        {/* Comments Section */}
        <CommentSection/>
        <DynamicCommentSection/>
        {/* <CommentsSection/> */}
      </Container>
    </>
  );
}
