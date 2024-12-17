import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../components/Header";
import { TopForums } from "../components/TopForums";
import { TopBrands } from "../components/TopBrands";
import MostFrequentTopicsChart from "../charts/MostFrequentTopics";
import { SingleBarChart } from "../charts/SingleBarChart";
import HorizontalBarChartComponent from "../charts/HorizontalBarComponent";
import DynamicCommentSection from "../components/DynamicCommentSection";
import { chartData1, chartData2, chartData3, chartData4, chartData5, chartData6 } from "../static/data";

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

    // Initialize kpiData with useState
    const [kpiData, setKpiData] = useState([
        { title: "TOTAL FORUMS", number: 20 },
        { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
        { title: "TOTAL COMMENTS", number: "11,000,000" },
        { title: "AVG ENGAGEMENT", number: "8/thread" },
    ]);
    const [WeightLoss, setWeightLoss] = useState([
        { name: "Humalog", value: 1157 },
        { name: "Novolog", value: 789 },
        { name: "Ozempic", value: 727 },
        { name: "Diabeta", value: 512 },
        { name: "Victoza", value: 396 },
        { name: "Apidra", value: 297 },
        { name: "Byetta", value: 265 },
        { name: "Trulicity", value: 234 },
        { name: "Asparat", value: 91 },
        { name: "Fiasp", value: 73 },
    ]);
    const [Diabetes, setDiabetes] = useState([
        { name: "Glucophage", value: 5838 },
        { name: "Levemir", value: 618 },
        { name: "Glimepride", value: 445 },
        { name: "Actos", value: 437 },
        { name: "Jardiance", value: 239 },
        { name: "Invokana", value: 202 },
        { name: "Basalgar", value: 121 },
        { name: "Glyburide", value: 109 },
        { name: "Glimpepiride", value: 101 },
        { name: "Amaryl", value: 80 },
    ]);
    const [Gliptins, setGliptins] = useState([
        { name: "Januvia", value: 357 },
        { name: "Janumet", value: 67 },
        { name: "Oseni", value: 52 },
        { name: "Pioglitazone", value: 49 },
        { name: "Nesina", value: 47 },
        { name: "Jentadueto", value: 27 },
        { name: "Tradjenta", value: 22 },
        { name: "Onglyza", value: 20 },
        { name: "Evogliptin", value: 17 },
        { name: "Omarigliptin", value: 12 },
    ]);
    const [ForumData, setForumData] = useState([
        { name: "Reddit", percentage: "17.8%" },
        { name: "Diabetes Daily Forum", percentage: "15%" },
        { name: "TuDiabetes Forum", percentage: "14%" },
        { name: "Drugs.com", percentage: "13%" },
        { name: "Patient.info Forum", percentage: "10.5%" },
        { name: "Carenity Diabetes", percentage: "7.8%" },
        { name: "PatientLikeMe", percentage: "4.9%" },
        {
            name: "Smart Patients ",
            percentage: "3.5%",
        },
        { name: "myDiabetes", percentage: "2%" },
        { name: "Beyond Type 2", percentage: "0.6%" },
    ]);
    const [TopDrug, setTopDrug] = useState([
        {
            "name": "Humalog",
            "percentage": "5.94%"
        },
        {
            "name": "Novolog",
            "percentage": "4.05%"
        },
        {
            "name": "Ozempic",
            "percentage": "3.73%"
        },
        {
            "name": "Diabeta",
            "percentage": "0.02%"
        },
        {
            "name": "Victoza",
            "percentage": "2.03%"
        },
        {
            "name": "Apidra",
            "percentage": "1.52%"
        },
        {
            "name": "Byetta",
            "percentage": "1.36%"
        },
        {
            "name": "Trulicity",
            "percentage": "1.20%"
        },
        {
            "name": "Aspart",
            "percentage": "0.60%"
        },
        {
            "name": "Fiasp",
            "percentage": "0.37%"
        },
        {
            "name": "Glucophage",
            "percentage": "0.55%"
        },
        {
            "name": "Levemir",
            "percentage": "3.17%"
        },
        {
            "name": "Glimepride",
            "percentage": "0.51%"
        },
        {
            "name": "Actos",
            "percentage": "2.24%"
        },
        {
            "name": "Jardiance",
            "percentage": "1.22%"
        },
        {
            "name": "Invokana",
            "percentage": "1.03%"
        },
        {
            "name": "Basalgar",
            "percentage": "0.62%"
        },
        {
            "name": "Glyburide",
            "percentage": "0.55%"
        },
        {
            "name": "Glimpepiride",
            "percentage": "0.54%"
        },
        {
            "name": "Amaryl",
            "percentage": "0.41%"
        },
        {
            "name": "Januvia",
            "percentage": "1.83%"
        },
        {
            "name": "Janumet",
            "percentage": "0.48%"
        },
        {
            "name": "Oseni",
            "percentage": "0.13%"
        },
        {
            "name": "Fortamet",
            "percentage": "0.05%"
        },
        {
            "name": "Nesina",
            "percentage": "0.05%"
        },
        {
            "name": "Jentadueto",
            "percentage": "0.04%"
        },
        {
            "name": "Tradjenta",
            "percentage": "0.13%"
        },
        {
            "name": "Onglyza",
            "percentage": "0.18%"
        },
        {
            "name": "Evogliptin",
            "percentage": "0.09%"
        },
        {
            "name": "Omarigliptin",
            "percentage": "0.04%"
        }
    ]);
    const [singleGraphData, setSingleGraphData] = useState([
        { name: "Ozempic", value: 727 },
        { name: "Victoza", value: 396 },
        { name: "Byetta", value: 265 },
        { name: "Trulicity", value: 234 },
        { name: "Jardiance", value: 210 }, // Added Jardiance with a new value
        { name: "Invokana", value: 195 },  // Added Invokana with a new value
    ]);
    const [singleGraphData2, setSingleGraphData2] = useState([
        { name: "Humalog", value: 1157 },
        { name: "Novolog", value: 789 },
        { name: "Diabeta", value: 512 },
        { name: "Apidra", value: 297 },
        { name: "Aspart", value: 91 },
        { name: "Fiasp", value: 73 },
        { name: "Glucophage", value: 260 },  // Added Glucophage with a new value
        { name: "Levemir", value: 248 },     // Added Levemir with a new value
        { name: "Glimepride", value: 180 },  // Added Glimepride with a new value
        { name: "Actos", value: 150 },       // Added Actos with a new value
    ]);
    const [singleGraphData3, setSingleGraphData3] = useState([
        { name: "Januvia", value: 420 },     // Added Januvia with a new value
        { name: "Janumet", value: 385 },     // Added Janumet with a new value
        { name: "Oseni", value: 340 },       // Added Oseni with a new value
        { name: "Nesina", value: 310 },      // Added Nesina with a new value
        { name: "Jentadueto", value: 280 },  // Added Jentadueto with a new value
        { name: "Tradjenta", value: 260 },   // Added Tradjenta with a new value
        { name: "Onglyza", value: 240 },     // Added Onglyza with a new value
        { name: "Evogliptin", value: 215 },  // Added Evogliptin with a new value
        { name: "Omarigliptin", value: 195 },// Added Omarigliptin with a new value
    ]);



    const [SentimentData, setSentimentData] = useState([
        { name: "Humalog", positive: 193, negative: 73, neutral: 32 },
        { name: "Novolog", positive: 100, negative: 60, neutral: 23 },
        { name: "Ozempic", positive: 82, negative: 59, neutral: 19 },
        { name: "Diabeta", positive: 0, negative: 0, neutral: 0 },
        { name: "Victoza", positive: 54, negative: 26, neutral: 3 },
        { name: "Apidra", positive: 50, negative: 25, neutral: 12 },
        { name: "Byetta", positive: 34, negative: 30, neutral: 8 },
        { name: "Trulicity", positive: 22, negative: 10, neutral: 3 },
        { name: "Asparat", positive: 0, negative: 0, neutral: 0 },
        { name: "Fiasp", positive: 6, negative: 4, neutral: 0 },
        { name: "Glucophage", positive: 34, negative: 14, neutral: 5 },
        { name: "Levemir", positive: 87, negative: 43, neutral: 13 },
        { name: "Glimepride", positive: 1, negative: 2, neutral: 0 },
        { name: "Actos", positive: 137, negative: 70, neutral: 32 },
        { name: "Jardiance", positive: 128, negative: 67, neutral: 14 },
        { name: "Invoka", positive: 42, negative: 59, neutral: 14 },
        { name: "Basalgar", positive: 0, negative: 0, neutral: 0 },
        { name: "Glyburide", positive: 39, negative: 22, neutral: 12 },
        { name: "Glimpepiride", positive: 0, negative: 0, neutral: 0 },
        { name: "Amaryl", positive: 7, negative: 9, neutral: 1 },
    ]);
    // Handler for the dropdown change event
    const handleDiseaseChange = async (event) => {
        const selectedDisease = event.target.value;
        setSelectedDisease(selectedDisease);

        if (selectedDisease === "Type II Diabetes") {
            setKpiData([
                { title: "TOTAL FORUMS", number: 20 },
                { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
                { title: "TOTAL COMMENTS", number: "11,000,000" },
                { title: "AVG ENGAGEMENT", number: "8/thread" },
            ]);
            setForumData([
                { name: "Reddit", percentage: "17.8%" },
                { name: "Diabetes Daily Forum", percentage: "15%" },
                { name: "TuDiabetes Forum", percentage: "14%" },
                { name: "Drugs.com", percentage: "13%" },
                { name: "Patient.info Forum", percentage: "10.5%" },
                { name: "Carenity Diabetes", percentage: "7.8%" },
                { name: "PatientLikeMe", percentage: "4.9%" },
                {
                    name: "Smart Patients ",
                    percentage: "3.5%",
                },
                { name: "myDiabetes", percentage: "2%" },
                { name: "Beyond Type 2", percentage: "0.6%" },
            ]);
            setTopDrug([
                {
                    "name": "Humalog",
                    "percentage": "5.94%"
                },
                {
                    "name": "Novolog",
                    "percentage": "4.05%"
                },
                {
                    "name": "Ozempic",
                    "percentage": "3.73%"
                },
                {
                    "name": "Diabeta",
                    "percentage": "0.02%"
                },
                {
                    "name": "Victoza",
                    "percentage": "2.03%"
                },
                {
                    "name": "Apidra",
                    "percentage": "1.52%"
                },
                {
                    "name": "Byetta",
                    "percentage": "1.36%"
                },
                {
                    "name": "Trulicity",
                    "percentage": "1.20%"
                },
                {
                    "name": "Aspart",
                    "percentage": "0.60%"
                },
                {
                    "name": "Fiasp",
                    "percentage": "0.37%"
                },
                {
                    "name": "Glucophage",
                    "percentage": "0.55%"
                },
                {
                    "name": "Levemir",
                    "percentage": "3.17%"
                },
                {
                    "name": "Glimepride",
                    "percentage": "0.51%"
                },
                {
                    "name": "Actos",
                    "percentage": "2.24%"
                },
                {
                    "name": "Jardiance",
                    "percentage": "1.22%"
                },
                {
                    "name": "Invokana",
                    "percentage": "1.03%"
                },
                {
                    "name": "Basalgar",
                    "percentage": "0.62%"
                },
                {
                    "name": "Glyburide",
                    "percentage": "0.55%"
                },
                {
                    "name": "Glimpepiride",
                    "percentage": "0.54%"
                },
                {
                    "name": "Amaryl",
                    "percentage": "0.41%"
                },
                {
                    "name": "Januvia",
                    "percentage": "1.83%"
                },
                {
                    "name": "Janumet",
                    "percentage": "0.48%"
                },
                {
                    "name": "Oseni",
                    "percentage": "0.13%"
                },
                {
                    "name": "Fortamet",
                    "percentage": "0.05%"
                },
                {
                    "name": "Nesina",
                    "percentage": "0.05%"
                },
                {
                    "name": "Jentadueto",
                    "percentage": "0.04%"
                },
                {
                    "name": "Tradjenta",
                    "percentage": "0.13%"
                },
                {
                    "name": "Onglyza",
                    "percentage": "0.18%"
                },
                {
                    "name": "Evogliptin",
                    "percentage": "0.09%"
                },
                {
                    "name": "Omarigliptin",
                    "percentage": "0.04%"
                }
            ]);
            setSingleGraphData([
                { name: "Ozempic", value: 727 },
                { name: "Victoza", value: 396 },
                { name: "Byetta", value: 265 },
                { name: "Trulicity", value: 234 },
                { name: "Jardiance", value: 210 }, // Added Jardiance with a new value
                { name: "Invokana", value: 195 },  // Added Invokana with a new value
            ]);
            setSingleGraphData2([
                { name: "Humalog", value: 1157 },
                { name: "Novolog", value: 789 },
                { name: "Diabeta", value: 512 },
                { name: "Apidra", value: 297 },
                { name: "Aspart", value: 91 },
                { name: "Fiasp", value: 73 },
                { name: "Glucophage", value: 260 },  // Added Glucophage with a new value
                { name: "Levemir", value: 248 },     // Added Levemir with a new value
                { name: "Glimepride", value: 180 },  // Added Glimepride with a new value
                { name: "Actos", value: 150 },       // Added Actos with a new value
            ]);
            setSingleGraphData3([
                { name: "Januvia", value: 420 },     // Added Januvia with a new value
                { name: "Janumet", value: 385 },     // Added Janumet with a new value
                { name: "Oseni", value: 340 },       // Added Oseni with a new value
                { name: "Nesina", value: 310 },      // Added Nesina with a new value
                { name: "Jentadueto", value: 280 },  // Added Jentadueto with a new value
                { name: "Tradjenta", value: 260 },   // Added Tradjenta with a new value
                { name: "Onglyza", value: 240 },     // Added Onglyza with a new value
                { name: "Evogliptin", value: 215 },  // Added Evogliptin with a new value
                { name: "Omarigliptin", value: 195 },// Added Omarigliptin with a new value
            ]);
            setSentimentData([
                { name: "Humalog", positive: 193, negative: 73, neutral: 32 },
                { name: "Novolog", positive: 100, negative: 60, neutral: 23 },
                { name: "Ozempic", positive: 82, negative: 59, neutral: 19 },
                { name: "Diabeta", positive: 0, negative: 0, neutral: 0 },
                { name: "Victoza", positive: 54, negative: 26, neutral: 3 },
                { name: "Apidra", positive: 50, negative: 25, neutral: 12 },
                { name: "Byetta", positive: 34, negative: 30, neutral: 8 },
                { name: "Trulicity", positive: 22, negative: 10, neutral: 3 },
                { name: "Asparat", positive: 0, negative: 0, neutral: 0 },
                { name: "Fiasp", positive: 6, negative: 4, neutral: 0 },
                { name: "Glucophage", positive: 34, negative: 14, neutral: 5 },
                { name: "Levemir", positive: 87, negative: 43, neutral: 13 },
                { name: "Glimepride", positive: 1, negative: 2, neutral: 0 },
                { name: "Actos", positive: 137, negative: 70, neutral: 32 },
                { name: "Jardiance", positive: 128, negative: 67, neutral: 14 },
                { name: "Invoka", positive: 42, negative: 59, neutral: 14 },
                { name: "Basalgar", positive: 0, negative: 0, neutral: 0 },
                { name: "Glyburide", positive: 39, negative: 22, neutral: 12 },
                { name: "Glimpepiride", positive: 0, negative: 0, neutral: 0 },
                { name: "Amaryl", positive: 7, negative: 9, neutral: 1 },
            ]);
            setTitle1("Diabetes with Weightloss");
            setTitle2("Diabetes");
            setTitle3("Gliptins");
        } else if (selectedDisease === "Rheumatoid Arthritis") {
            setKpiData([
                { title: "TOTAL FORUMS", number: 10 },
                { title: "TOTAL DISCUSSIONS", number: "1,00,000" },
                { title: "TOTAL COMMENTS", number: "10,000,000" },
                { title: "AVG ENGAGEMENT", number: "6/thread" },
            ]);
            setForumData([
                {
                    "name": "Reddit",
                    "percentage": "22.18%"
                },
                {
                    "name": "Carenity RA Forum",
                    "percentage": "18.56%"
                },
                {
                    "name": "WebMD",
                    "percentage": "15.32%"
                },
                {
                    "name": "HealthUnlocked",
                    "percentage": "12.87%"
                },
                {
                    "name": "CreakyJoints",
                    "percentage": "9.43%"
                },
                {
                    "name": "Patient like me",
                    "percentage": "7.61%"
                },
                {
                    "name": "RheumatoidArthritis.net",
                    "percentage": "5.83%"
                },
                {
                    "name": "RA Excellence Forum (HMP)",
                    "percentage": "2.01%"
                },
                {
                    "name": "IFRA (FNIH)",
                    "percentage": "1.59%"
                },
                {
                    "name": "Smart Patients",
                    "percentage": "0.73%"
                },
                {
                    "name": "AMGA RA Forum",
                    "percentage": "0.52%"
                },
                {
                    "name": "InfantRisk RA",
                    "percentage": "0.28%"
                },
                {
                    "name": "Carenity RA Forum",
                    "percentage": "0.23%"
                },
                {
                    "name": "Drugs.com",
                    "percentage": "0.03%"
                }
            ]);
            setTopDrug([
                {
                    "name": "Humira",
                    "percentage": "15.25%"
                },
                {
                    "name": "Enbrel",
                    "percentage": "13.12%"
                },
                {
                    "name": "Remicade",
                    "percentage": "12.35%"
                },
                {
                    "name": "Orencia",
                    "percentage": "10.50%"
                },
                {
                    "name": "Actemra",
                    "percentage": "8.45%"
                },
                {
                    "name": "Xeljanz",
                    "percentage": "7.15%"
                },
                {
                    "name": "Rinvoq",
                    "percentage": "6.25%"
                },
                {
                    "name": "Cimzia",
                    "percentage": "5.20%"
                },
                {
                    "name": "Simponi",
                    "percentage": "4.35%"
                },
                {
                    "name": "Simponi Aria",
                    "percentage": "3.25%"
                },
                {
                    "name": "Kineret",
                    "percentage": "2.45%"
                },
                {
                    "name": "Arava",
                    "percentage": "2.10%"
                },
                {
                    "name": "Plaquenil",
                    "percentage": "2.05%"
                },
                {
                    "name": "Imuran",
                    "percentage": "2.00%"
                },
                {
                    "name": "Trexall",
                    "percentage": "1.95%"
                },
                {
                    "name": "Otrexup",
                    "percentage": "1.90%"
                },
                {
                    "name": "Rasuvo",
                    "percentage": "1.85%"
                },
                {
                    "name": "Kevzara",
                    "percentage": "1.75%"
                },
                {
                    "name": "Stelara",
                    "percentage": "1.65%"
                },
                {
                    "name": "Tremfya",
                    "percentage": "1.60%"
                },
                {
                    "name": "Cosentyx",
                    "percentage": "1.55%"
                },
                {
                    "name": "Taltz",
                    "percentage": "1.50%"
                },
                {
                    "name": "Siliq",
                    "percentage": "1.45%"
                },
                {
                    "name": "Ilumya",
                    "percentage": "1.40%"
                },
                {
                    "name": "Skyrizi",
                    "percentage": "1.35%"
                },
                {
                    "name": "Benlysta",
                    "percentage": "1.30%"
                },
                {
                    "name": "Rheumatrex",
                    "percentage": "1.25%"
                },
                {
                    "name": "Avsola",
                    "percentage": "1.15%"
                },
                {
                    "name": "Inflectra",
                    "percentage": "1.05%"
                },
                {
                    "name": "Hadlima",
                    "percentage": "1.00%"
                }
            ]);
            setSingleGraphData([
                { "name": "Humira", "value": 1157 },
                { "name": "Enbrel", "value": 789 },
                { "name": "Remicade", "value": 727 },
                { "name": "Orencia", "value": 512 },
                { "name": "Actemra", "value": 396 },
                { "name": "Xeljanz", "value": 297 },
                { "name": "Rinvoq", "value": 265 },
                { "name": "Cimzia", "value": 234 },
                { "name": "Simponi", "value": 91 },
                { "name": "Simponi Aria", "value": 73 }
            ]);
            setSingleGraphData2([
                { name: "Humira", value: 1320 },    // Random value
                { name: "Enbrel", value: 980 },     // Random value
                { name: "Remicade", value: 865 },   // Random value
                { name: "Orencia", value: 745 },    // Random value
                { name: "Actemra", value: 612 },    // Random value
                { name: "Xeljanz", value: 540 },    // Random value
                { name: "Rinvoq", value: 470 },     // Random value
                { name: "Cimzia", value: 390 },     // Random value
                { name: "Simponi", value: 315 },    // Random value
                { name: "Simponi Aria", value: 250 } // Random value
            ]);
            setSingleGraphData3([
                { name: "Kineret", value: 1345 },  // Random value
                { name: "Arava", value: 987 },     // Random value
                { name: "Plaquenil", value: 750 },  // Random value
                { name: "Imuran", value: 620 },     // Random value
                { name: "Trexall", value: 470 },    // Random value
                { name: "Otrexup", value: 345 },    // Random value
                { name: "Rasuvo", value: 290 },     // Random value
                { name: "Kevzara", value: 220 },    // Random value
                { name: "Stelara", value: 180 },    // Random value
                { name: "Tremfya", value: 150 }     // Random value
            ]);


            setSentimentData([
                { "name": "Humira", "positive": 193, "negative": 73, "neutral": 32 },
                { "name": "Enbrel", "positive": 100, "negative": 60, "neutral": 23 },
                { "name": "Remicade", "positive": 82, "negative": 59, "neutral": 19 },
                { "name": "Orencia", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Actemra", "positive": 54, "negative": 26, "neutral": 3 },
                { "name": "Xeljanz", "positive": 50, "negative": 25, "neutral": 12 },
                { "name": "Rinvoq", "positive": 34, "negative": 30, "neutral": 8 },
                { "name": "Cimzia", "positive": 22, "negative": 10, "neutral": 3 },
                { "name": "Simponi", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Simponi Aria", "positive": 6, "negative": 4, "neutral": 0 },
                { "name": "Kineret", "positive": 34, "negative": 14, "neutral": 5 },
                { "name": "Arava", "positive": 87, "negative": 43, "neutral": 13 },
                { "name": "Plaquenil", "positive": 1, "negative": 2, "neutral": 0 },
                { "name": "Imuran", "positive": 137, "negative": 70, "neutral": 32 },
                { "name": "Trexall", "positive": 128, "negative": 67, "neutral": 14 },
                { "name": "Otrexup", "positive": 42, "negative": 59, "neutral": 14 },
                { "name": "Rasuvo", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Kevzara", "positive": 39, "negative": 22, "neutral": 12 },
                { "name": "Stelara", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Tremfya", "positive": 7, "negative": 9, "neutral": 1 }
            ])
            setTitle1("ALL");
            setTitle2("Biological Agents (Biologics)");
            setTitle3("DMARDs");
        } else if (selectedDisease === "Psoriatic Arthritis") {
            setKpiData([
                { title: "TOTAL FORUMS", number: 8 },
                { title: "TOTAL DISCUSSIONS", number: "90,000" },
                { title: "TOTAL COMMENTS", number: "9,000,000" },
                { title: "AVG ENGAGEMENT", number: "5/thread" },
            ]);
            setForumData([
                {
                    "name": "Reddit",
                    "percentage": "21.13%"
                },
                {
                    "name": "NPF Community",
                    "percentage": "17.59%"
                },
                {
                    "name": "WebMD",
                    "percentage": "15.67%"
                },
                {
                    "name": "PatientLikeMe",
                    "percentage": "13.81%"
                },
                {
                    "name": "MyPsoriasisTeam",
                    "percentage": "11.37%"
                },
                {
                    "name": "CreakyJoints",
                    "percentage": "9.19%"
                },
                {
                    "name": "HealthUnlocked",
                    "percentage": "7.83%"
                },
                {
                    "name": "Drugs.com",
                    "percentage": "3.47%"
                }
            ]);
            setTopDrug([
                { name: "Otezla", percentage: "15.05%" },
                { name: "Enbrel", percentage: "13.28%" },
                { name: "Humira", percentage: "11.49%" },
                { name: "Stelara", percentage: "5.71%" },
                { name: "Cimzia", percentage: "8.93%" },
                { name: "Tremfya", percentage: "5.45%" },
                { name: "Skyrizi", percentage: "5.94%" },
                { name: "Xeljanz", percentage: "5.29%" },
                { name: "Rinvoq", percentage: "4.65%" },
                { name: "Remicade", percentage: "4.00%" },
                { name: "Orencia", percentage: "3.36%" },
                { name: "Cosentyx", percentage: "2.07%" },
                { name: "Taltz", percentage: "1.75%" },
                { name: "Simponi", percentage: "1.65%" },
                { name: "Simponi Aria", percentage: "1.23%" },
                { name: "Kineret", percentage: "1.08%" },
                { name: "Arava", percentage: "1.03%" },
                { name: "Plaquenil", percentage: "0.98%" },
                { name: "Imuran", percentage: "0.93%" },
                { name: "Trexall", percentage: "0.90%" },
                { name: "Otrexup", percentage: "0.88%" },
                { name: "Rasuvo", percentage: "0.86%" },
                { name: "Kevzara", percentage: "0.83%" },
                { name: "Stelara", percentage: "0.80%" }, // Note: "Stelara" appears twice, this is the second one.
                { name: "Tremfya", percentage: "0.77%" } // Note: "Tremfya" appears twice, this is the second one.
            ]);

            setSingleGraphData([
                { "name": "Otezla", "value": 15.57 },
                { "name": "Enbrel", "value": 13.74 },
                { "name": "Humira", "value": 11.9 },
                { "name": "Stelara", "value": 10.44 },
                { "name": "Cimzia", "value": 8.61 },
                { "name": "Tremfya", "value": 7.14 },
                { "name": "Skyrizi", "value": 6.78 },
                { "name": "Xeljanz", "value": 6.04 },
                { "name": "Rinvoq", "value": 5.31 },
                { "name": "Remicade", "value": 2.2 }
            ]);
            setSingleGraphData2([
                { name: "Humira", value: 12.34 },  // Random value
                { name: "Enbrel", value: 11.78 },  // Random value
                { name: "Remicade", value: 9.56 },  // Random value
                { name: "Orencia", value: 7.43 },   // Random value
                { name: "Actemra", value: 6.29 },   // Random value
                { name: "Xeljanz", value: 5.67 },   // Random value
                { name: "Rinvoq", value: 4.82 },    // Random value
                { name: "Cimzia", value: 4.15 },    // Random value
                { name: "Simponi", value: 2.98 },   // Random value
                { name: "Simponi Aria", value: 2.35 } // Random value
            ]);
            setSingleGraphData3([
                { name: "Kineret", value: 14.56 },   // Random value
                { name: "Arava", value: 12.45 },     // Random value
                { name: "Plaquenil", value: 9.87 },   // Random value
                { name: "Imuran", value: 8.34 },     // Random value
                { name: "Trexall", value: 6.78 },    // Random value
                { name: "Otrexup", value: 5.89 },    // Random value
                { name: "Rasuvo", value: 4.67 },     // Random value
                { name: "Kevzara", value: 3.56 },    // Random value
                { name: "Stelara", value: 10.44 },   // Existing value, but can be updated with a new random value
                { name: "Tremfya", value: 7.14 }     // Existing value, but can be updated with a new random value
            ]);


            setSentimentData([
                { "name": "Otezla", "positive": 193, "negative": 73, "neutral": 32 },
                { "name": "Enbrel", "positive": 100, "negative": 60, "neutral": 23 },
                { "name": "Humira", "positive": 82, "negative": 59, "neutral": 19 },
                { "name": "Stelara", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Cimzia", "positive": 54, "negative": 26, "neutral": 3 },
                { "name": "Tremfya", "positive": 7, "negative": 9, "neutral": 1 },
                { "name": "Skyrizi", "positive": 50, "negative": 25, "neutral": 12 },
                { "name": "Xeljanz", "positive": 34, "negative": 30, "neutral": 8 },
                { "name": "Rinvoq", "positive": 22, "negative": 10, "neutral": 3 },
                { "name": "Remicade", "positive": 6, "negative": 4, "neutral": 0 },
                { "name": "Orencia", "positive": 0, "negative": 0, "neutral": 0 },
                { "name": "Cosentyx", "positive": 34, "negative": 14, "neutral": 5 },
                { "name": "Taltz", "positive": 87, "negative": 43, "neutral": 13 },
                { "name": "Simponi", "positive": 1, "negative": 2, "neutral": 0 }
            ]);
            setTitle1("ALL");
            setTitle2("Biological Agents (Biologics)");
            setTitle3("DMARDs");
        }

    };
    const title_1 = "Diabetes with Weightloss";
    const title_2 = "Diabetes";
    const title_3 = "Gliptins";
    const [title1, setTitle1] = useState("Diabetes with Weightloss");
    const [title2, setTitle2] = useState("Diabetes");
    const [title3, setTitle3] = useState("Gliptins");
    return (
        <>
            {/* Header component with home page reset on click */}
            <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />

            <Container fluid>
                <Container className="mt-2 p-3">
                    <Card>
                        <Row>
                            <Col lg={4}>
                                <Card className="p-3 m-2">
                                {/* <ValuesChart data={chartData1} /> */}
                                <TrialStackChart details={chartData1}/>
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
                                <Card className="p-3 m-2">
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

