// import React, { useState } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Header } from "../components/Header";
// import TopForums from "../components/TopForums";
// import TopBrands from "../components/TopBrands";
// import MostFrequentTopicsChart from "../charts/MostFrequentTopics";
// import { SingleBarChart1, SingleBarChart2, SingleBarChart3 } from "../charts/SingleBarChart";
// import HorizontalBarChartComponent from "../charts/HorizontalBarComponent";
// import DynamicCommentSection from "../components/DynamicCommentSection";
// import { DoubleBarChart1,DoubleBarChart2,DoubleBarChart3 } from "../charts/DoubleBarChart";

// export default function HomePage() {
//   // State for tracking selected disease
//   const [selectedDisease, setSelectedDisease] = useState(null);
  
//   // State for KPI data
//   const [kpiData, setKpiData] = useState([
//     { title: "TOTAL FORUMS", number: 20 },
//     { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//     { title: "TOTAL COMMENTS", number: "11,000,000" },
//     { title: "AVG ENGAGEMENT", number: "8/thread" },
//   ]);

//   // Handler for dropdown change event
//   const handleDiseaseChange = (event) => {
//     const selectedDisease = event.target.value;
//     setSelectedDisease(selectedDisease);
//     console.log(selectedDisease);
//     if (selectedDisease === "Type II Diabetes") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 15 },
//         { title: "TOTAL DISCUSSIONS", number: "1,50,000" },
//         { title: "TOTAL COMMENTS", number: "12,000,000" },
//         { title: "AVG ENGAGEMENT", number: "7/thread" },
//       ]);
//     } else if (selectedDisease === "Rheumatoid Arthritis") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 10 },
//         { title: "TOTAL DISCUSSIONS", number: "1,00,000" },
//         { title: "TOTAL COMMENTS", number: "10,000,000" },
//         { title: "AVG ENGAGEMENT", number: "6/thread" },
//       ]);
//     } else if (selectedDisease === "Psoriatic Arthritis") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 8 },
//         { title: "TOTAL DISCUSSIONS", number: "90,000" },
//         { title: "TOTAL COMMENTS", number: "9,000,000" },
//         { title: "AVG ENGAGEMENT", number: "5/thread" },
//       ]);
//     } else {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 20 },
//         { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//         { title: "TOTAL COMMENTS", number: "11,000,000" },
//         { title: "AVG ENGAGEMENT", number: "8/thread" },
//       ]);
//     }
//   };

//   // Dummy data for charts
//   const dummydata = [
//     { name: "HumalogMAI", value: 1157 },
//     { name: "Novolog", value: 789 },
//     { name: "Ozempic", value: 727 },
//     { name: "Diabeta", value: 512 },
//     { name: "Victoza", value: 396 },
//     { name: "Apidra", value: 297 },
//     { name: "Byetta", value: 265 },
//     { name: "Trulicity", value: 234 },
//     { name: "Asparat", value: 91 },
//     { name: "Fiasp", value: 73 },
//   ];

//   return (
//     <>
//       <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />

//       <Container fluid>
//         {/* Top Brands and Top Forums */}
//         <Container className="mt-2 p-3">
//           <Row>
//             <Col lg={4} style={{ padding: "inherit" }} className="h-100">
//               <TopForums />
//             </Col>
//             <Col lg={8}>
//               <TopBrands />
//             </Col>
//           </Row>
//         </Container>

//         {/* Conditionally render components based on selectedDisease */}
//         {selectedDisease && (
//           <>
//             <Container className="mt-2 p-3">
//               <MostFrequentTopicsChart />
//               <Card>
//                 <h6 className="chart-title m-3">Conversation Segments</h6>
//                 <Row>
//                   {/* Conditionally render SingleBarChart or DoubleBarChart based on selectedDisease */}
//                   {selectedDisease === "Type II Diabetes" && (
//                     <>
//                       <Col lg={4}>
//                         <Card className="p-3 m-2">
//                           <DoubleBarChart1 data={dummydata} />
//                         </Card>
//                       </Col>
//                       <Col lg={4}>
//                         <Card className="p-3 m-2">
//                         <DoubleBarChart1 data={dummydata} />
//                         </Card>
//                       </Col>
//                       <Col lg={4}>
//                         <Card className="p-3 m-2">
//                         <DoubleBarChart1 data={dummydata} />
//                         </Card>
//                       </Col>
//                     </>
//                   )}
//                   {selectedDisease === "Rheumatoid Arthritis" && (
//                     <>
//                       <Col lg={6}>
//                         <Card className="p-3 m-2">
//                           <DoubleBarChart1 data={dummydata} />
//                         </Card>
//                       </Col>
//                       <Col lg={6}>
//                         <Card className="p-3 m-2">
//                           <DoubleBarChart2 data={dummydata} />
//                         </Card>
//                       </Col>
//                     </>
//                   )}
//                   {selectedDisease === "Psoriatic Arthritis" && (
//                     <>
//                       <Col lg={12}>
//                         <Card className="p-3 m-2">
//                           <DoubleBarChart1 data={dummydata} />
//                         </Card>
//                       </Col>
//                     </>
//                   )}
//                 </Row>
//               </Card>
//             </Container>

//             <Container>
//               <Card>
//                 <span className="chart-title m-3">Sentiment Analysis</span>
//                 <HorizontalBarChartComponent />
//               </Card>
//             </Container>
//           </>
//         )}

//         {/* Comments Section */}
//         <DynamicCommentSection />
//       </Container>
//     </>
//   );
// }

//---------------------------// Executed code //----------------------------//
// import React, { useState } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Header } from "../components/Header";
// import TopForums from "../components/TopForums";
// import TopBrands from "../components/TopBrands";
// import MostFrequentTopicsChart from "../charts/MostFrequentTopics";
// import { SingleBarChart1, SingleBarChart2, SingleBarChart3 } from "../charts/SingleBarChart";
// import HorizontalBarChartComponent from "../charts/HorizontalBarComponent";
// import DynamicCommentSection from "../components/DynamicCommentSection";

// export default function HomePage() {

//   // Initialize kpiData with useState
//   const [kpiData, setKpiData] = useState([
//     { title: "TOTAL FORUMS", number: 20 },
//     { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//     { title: "TOTAL COMMENTS", number: "11,000,000" },
//     { title: "AVG ENGAGEMENT", number: "8/thread" },
//   ]);

//   // Handler for the dropdown change event
//   const handleDiseaseChange = (event) => {
//     const selectedDisease = event.target.value;
//     console.log("Selected Disease:", selectedDisease);

//     // Navigate to the corresponding route based on selected disease
//     if (selectedDisease === "Type II Diabetes") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 15 },
//         { title: "TOTAL DISCUSSIONS", number: "1,50,000" },
//         { title: "TOTAL COMMENTS", number: "12,000,000" },
//         { title: "AVG ENGAGEMENT", number: "7/thread" },
//       ]);
//     } else if (selectedDisease === "Rheumatoid Arthritis") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 10 },
//         { title: "TOTAL DISCUSSIONS", number: "1,00,000" },
//         { title: "TOTAL COMMENTS", number: "10,000,000" },
//         { title: "AVG ENGAGEMENT", number: "6/thread" },
//       ]);
//     } else if (selectedDisease === "Psoriatic Arthritis") {
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 8 },
//         { title: "TOTAL DISCUSSIONS", number: "90,000" },
//         { title: "TOTAL COMMENTS", number: "9,000,000" },
//         { title: "AVG ENGAGEMENT", number: "5/thread" },
//       ]);
//     } else {
//       // Handle default case or reset
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 20 },
//         { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//         { title: "TOTAL COMMENTS", number: "11,000,000" },
//         { title: "AVG ENGAGEMENT", number: "8/thread" },
//       ]);
//     }
//   };

//   //----------------// props Data //-------------------//
//   const dummydata = [
//     { name: "HumalogMAI", value: 1157 },
//     { name: "Novolog", value: 789 },
//     { name: "Ozempic", value: 727 },
//     { name: "Diabeta", value: 512 },
//     { name: "Victoza", value: 396 },
//     { name: "Apidra", value: 297 },
//     { name: "Byetta", value: 265 },
//     { name: "Trulicity", value: 234 },
//     { name: "Asparat", value: 91 },
//     { name: "Fiasp", value: 73 },
//   ];

//   return (
//     <>
//       <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />

//       <Container fluid>
//         {/*---------------------------- Top Brands and Top Forums -------------------------*/}
//         <Container className="mt-2 p-3">
//           <Row>
//             {/*------------------------------- Top Forums Section --------------------*/}
//             <Col lg={4} style={{ padding: "inherit" }} className="h-100">
//               <TopForums />
//             </Col>
//             {/*---------------------- Top Brands Section ------------------------------*/}
//             <Col lg={8}>
//               <TopBrands />
//             </Col>
//           </Row>
//         </Container>

//         {/*--------------- Most Frequent Charts and Single Bar Graphs -------------------*/}
//         <Container className="mt-2 p-3">
//           <MostFrequentTopicsChart />
//           <Card>
//             <h6 className="chart-title m-3">Conversation Segments</h6>
//             <Row>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <SingleBarChart1 data={dummydata}/> {/* Render the first chart */}
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <SingleBarChart2 /> {/* Render the second chart */}
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <SingleBarChart3 /> {/* Render the third chart */}
//                 </Card>
//               </Col>
//             </Row>
//           </Card>
//         </Container>

//         {/* ----------------------3 bar graph chart---------------------- */}
//         <Container>
//           <Card>
//             <span className="chart-title m-3">Sentiment Analysis</span>
//             <HorizontalBarChartComponent />
//           </Card>
//         </Container>

//         {/* ------------------Comments Section-----------------------*/}
//         <DynamicCommentSection />
//       </Container>
//     </>
//   );
// }


