import React, { useState } from "react";
import { Container} from "react-bootstrap";
import {Header} from "./Header";

export default function SummaryPage() {
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
      }  else {
        // Reset or handle default case
        setKpiData([
          { title: "TOTAL FORUMS", number: 20 },
          { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
          { title: "TOTAL COMMENTS", number: "11,000,000" },
          { title: "AVG ENGAGEMENT", number: "8/thread" },
        ]);
      } 
    };
  
    return (
      <>
        <Container fluid>
          {/* Pass the kpiData and handleDiseaseChange as props to Header */}
          <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
        </Container>
      </>
    );
  }