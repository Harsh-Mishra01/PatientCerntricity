// src/components/Header.js

import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Header = ({ data, onDiseaseChange, onHomeClick }) => {
    let navigate = useNavigate();

    useEffect(() => {
        // This effect will trigger on mount to ensure the default selection
        document.getElementById("disease").value = ""; // Reset to default
    }, []);

    const contentHandler = () => {
        navigate("/content");
    };
    const summaryHandler = () => {
        navigate("/summary");
    };
    const supportHandler = () => {
        navigate("/support");
    };
    const productHandler = () => {
        navigate("/product");
    };
    const trialHandler = () => {
        navigate("/trial");
    };

    return (
        <>
            <Container className="nav-container">
                <span
                    className="ms-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        // onHomeClick(); // Call the home click handler
                        navigate("/"); // Navigate to the home page
                    }}
                >
                    <span className="nav-title">Patient Centricity</span>
                </span>
                <div className="nav-container">
                    <div className="mt-2 p-3 filter-container">
                        
                      
                        <span className="menu-container">
                            Sign Out
                        </span>
                    </div>
                </div>
            </Container>
            {/* <hr></hr> */}
            <Container>
               
                    <div className="all-menu">
                        
                        <span className="menu-container2" onClick={summaryHandler}>
                            Summary
                        </span>
                        /
                        <span className="menu-container2" onClick={supportHandler}>
                            Support
                        </span>
                        /
                        <span className="menu-container2" onClick={contentHandler}>
                            Content
                        </span>
                        /
                        <span className="menu-container2" onClick={productHandler}>
                            Product
                        </span>
                        /
                        <span className="menu-container2" onClick={trialHandler}>
                            Trial
                        </span>
                    </div>
              
            </Container>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={4} className="text-center">
                    <form>
                            <select
                                id="disease"
                                name="disease"
                                className="forum-container"
                                onChange={onDiseaseChange}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Filter by disease
                                </option>
                                <option value="Type II Diabetes">Type II Diabetes</option>
                                <option value="Rheumatoid Arthritis">Rheumatoid Arthritis</option>
                                <option value="Psoriatic Arthritis">Psoriatic Arthritis</option>
                                <option value="Lung Cancer">Lung Cancer</option>
                                <option value="Breast Cancer" disabled>Breast Cancer</option>
                            </select>
                        </form>
                    </Col>
                    <Col lg={4} className="text-center">
                    <form>
                            <select
                                id="disease"
                                name="disease"
                                className="forum-container"
                                onChange={onDiseaseChange}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Filter by timeline
                                </option>
                                {/* <option value="Type II Diabetes">Type II Diabetes</option>
                                <option value="Rheumatoid Arthritis">Rheumatoid Arthritis</option>
                                <option value="Psoriatic Arthritis">Psoriatic Arthritis</option> */}
                            </select>
                        </form>
                    </Col>
                    <Col lg={4} className="text-center">
                    <form>
                            <select
                                id="disease"
                                name="disease"
                                className="forum-container"
                                onChange={onDiseaseChange}
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Filter by brand
                                </option>
                                {/* <option value="Type II Diabetes">Type II Diabetes</option>
                                <option value="Rheumatoid Arthritis">Rheumatoid Arthritis</option>
                                <option value="Psoriatic Arthritis">Psoriatic Arthritis</option> */}
                            </select>
                        </form>
                    </Col>
                </Row>

                <Row>
                    {/* Map through the data prop to render each card */}
                    {data.map((item, index) => (
                        <Col lg={3} key={index}  className="text-center">
                            <Card className="p-2 mt-4 mb-2">
                                <div className="title">{item.title}</div>
                                <div className="number">{item.number}</div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        
            
        </>
    );
};



// ----------------------- // Actual Code //---------------------------//
// // src/components/Header.js

// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// export const Header = ({ data, onDiseaseChange,onHomeClick }) => {
//     let navigate = useNavigate();

//     const contentHandler = () => {
//         navigate("/content");
//     };
//     const summaryHandler = () => {
//         navigate("/summary");
//     };
//     const supportHandler = () => {
//         navigate("/support");
//     };
//     const productHandler = () => {
//         navigate("/product");
//     };
//     const trialHandler = () => {
//         navigate("/trial");
//     };
//     return (
//         <>
//             <Container className="nav-container">
//                 <span
//                     className="ms-2"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => navigate("/")}
//                 >
//                 <span className="nav-title">Patient Centricity</span>
//                 </span>
//                 <div className="nav-container">
//                     <div className="mt-2 p-3 filter-container">
//                         <form>
//                             <select
//                                 id="disease"
//                                 name="disease"
//                                 className="forum-container"
//                                 onChange={onDiseaseChange}
//                                 defaultValue=""
//                             >
//                                 <option value="" disabled>
//                                 Filter by disease
//                                 </option>
//                                 <option value="Type II Diabetes">Type II Diabetes</option>
//                                 <option value="Rheumatoid Arthritis">Rheumatoid Arthritis</option>
//                                 <option value="Psoriatic Arthritis">Psoriatic Arthritis</option>
//                             </select>
//                         </form>
//                         <span className="menu-container" onClick={summaryHandler}>
//                             Summary
//                         </span>
//                         <span className="menu-container" onClick={supportHandler}>
//                             Support
//                         </span>
//                         <span className="menu-container" onClick={contentHandler}>
//                             Content
//                         </span>
//                         <span className="menu-container" onClick={productHandler}>
//                             Product
//                         </span>
//                         <span className="menu-container" onClick={trialHandler}>
//                             Trial
//                         </span>
//                     </div>
//                 </div>
//             </Container>
//             <Container>
//                 <Row>
//                     {/* Map through the data prop to render each card */}
//                     {data.map((item, index) => (
//                         <Col lg={3} key={index}>
//                             <Card className="p-2 m-2">
//                                 <div className="title">{item.title}</div>
//                                 <div className="number">{item.number}</div>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </>
//     );
// };
