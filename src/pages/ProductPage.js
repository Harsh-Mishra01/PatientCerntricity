import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/content.css";
import { DoubleBarChart } from "../charts/DoubleBarChart";
import jsonData from "../demo/conversion.json"; // Import your JSON data file
import { SegmentPart } from "../components/SegmentPart";
import { TopBrands } from "../components/TopBrands";
import { CommentSection } from "../components/CommentSection";
import { Header } from "../components/Header";
import { useEffect } from "react";
import ProductStack from "../charts/ProductStack";
import ValuesChart from "../charts/ValuesChart";
import TrialStackChart from "../charts/TrialStackChart";
import { chartData1, chartData2, chartData3, chartData4, chartData5, chartData6 } from "../static/data";

//------------------// Fetching API'S //-------------------//
// Function to filter data by category

export default function ProductPage() {
  const [title1, setTitle1] = useState("Diabetes with Weightloss");
  const [title2, setTitle2] = useState("Diabetes");
  const [title3, setTitle3] = useState("Gliptins");

  const [selectedDisease, setSelectedDisease] = useState("Type II Diabetes");

  const [commentsEfficacy, setCommentsEfficacy] = useState([
    {
      platform: "Reddit",
      content:
        "I've been on Januvia for about six months and honestly it's been a lifesaver! My blood sugar levels are way better. However I sometimes feel a bit nauseous after taking it but it’s manageable.",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Jardiance has changed my life! My A1C dropped from 8.5 to 6.9 and I’ve even lost 15 pounds. I do have to run to the bathroom a lot which can be annoying but I think it's worth it for the results!",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Glucophage has been my go-to for years. It keeps my blood sugar in check but let me tell you the stomach issues can be pretty rough at times. Still it’s better than the alternative!",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Farxiga really helped me get my blood sugar under control. I’ve noticed fewer spikes which is awesome! But I've had some weird cravings lately and that’s been frustrating.",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Invokana has worked wonders for my energy levels! I used to feel so sluggish but now I’m more active. On the downside I've had some yeast infections which is a real bummer.",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Lantus has been a reliable insulin for me. I like that it’s just once a day but I’ve had a couple of episodes where my levels dipped too low. It’s scary but I’m learning to manage it.",
    },
    {
      platform: "PatientLikeMe",
      content:
        "Switching to Levemir was a great choice! My blood sugar is pretty steady now but I find the injections a bit painful sometimes. It’s annoying but I guess it’s a trade-off.",
    },
    {
      platform: "Reddit",
      content:
        "I really love Ozempic! My blood sugar has improved and I've lost around 10 pounds. But I’ve had a few days where I felt super nauseous and that was no fun at all.",
    },
    {
      platform: "Reddit",
      content:
        "Trulicity is so easy to use but I wish it worked a bit faster for me. My blood sugar has come down some but I still have days where I feel hungry all the time. It’s a mixed bag!",
    },
    {
      platform: "Reddit",
      content:
        "Mounjaro has been fantastic! My blood sugar is the best it’s been in years and I've even dropped a few pounds. However I’ve experienced some stomach upset so it’s not all sunshine and rainbows.",
    },
  ]);
  const [commentsSideEffects, setCommentsSideEffects] = useState([
    {
      platform: "Januvia",
      content:
        "Been on Januvia for a few months now. It helps my blood sugar but damn I get nauseous after meals sometimes. Just what I needed right?",
    },
    {
      platform: "Jardiance",
      content:
        "Jardiance is decent for my A1C but I swear I’m living in the bathroom. Like can a person get a break? It's a bit embarrassing when I’m out and about!",
    },
    {
      platform: "Glucophage",
      content:
        "Glucophage has been my go-to for ages but the stomach issues are REAL. I’ve become best friends with my restroom. Honestly it’s kind of a pain.",
    },
    {
      platform: "Farxiga",
      content:
        "Farxiga does a solid job on my blood sugar but the cravings are wild! Plus I’ve felt a bit dizzy at times. Not sure if it’s the meds or just me.",
    },
    {
      platform: "Invokana",
      content:
        "Invokana is good for energy but wow the yeast infections are no joke. I didn’t sign up for that. It’s super annoying!",
    },
    {
      platform: "Lantus",
      content:
        "Lantus has been okay but I’ve had some crazy lows that leave me shaky and anxious. It freaks me out! Still trying to nail down the right dosage.",
    },
    {
      platform: "Levemir",
      content:
        "Levemir works for my blood sugar but sometimes the injection sites hurt like hell. Why can't it just be easy? Better than feeling out of control though.",
    },
    {
      platform: "Ozempic",
      content:
        "Ozempic has been a game changer for my sugar but I’ve had days where I feel super nauseous. Skipped meals way too often. Anyone else?",
    },
    {
      platform: "Trulicity",
      content:
        "Trulicity is pretty easy to use but those stomach cramps hit me like a truck sometimes. It’s not fun especially when I'm out with friends.",
    },
    {
      platform: "Mounjaro",
      content:
        "Mounjaro has done wonders for my diabetes but the stomach upset is no joke. It’s hit me out of nowhere and ruined some plans. Ugh!",
    },
  ]);

  const [SegmentPartData, setSegmentPartData] = useState([
    {
      name: "Efficacy",
    },
    {
      name: "Side effects",
    },
  ]);
  const handleDiseaseChange = (event) => {
    const selectedDisease = event.target.value;
    setSelectedDisease(selectedDisease);

    // Update kpiData based on the selected disease
    if (selectedDisease === "Type II Diabetes") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 20 },
        { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
        { title: "TOTAL COMMENTS", number: "11,000,000" },
        { title: "AVG ENGAGEMENT", number: "8/thread" },
      ]);
      setCommentsEfficacy([
        {
          platform: "Reddit",
          content:
            "I've been on Januvia for about six months and honestly it's been a lifesaver! My blood sugar levels are way better. However I sometimes feel a bit nauseous after taking it but it’s manageable.",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Jardiance has changed my life! My A1C dropped from 8.5 to 6.9 and I’ve even lost 15 pounds. I do have to run to the bathroom a lot which can be annoying but I think it's worth it for the results!",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Glucophage has been my go-to for years. It keeps my blood sugar in check but let me tell you the stomach issues can be pretty rough at times. Still it’s better than the alternative!",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Farxiga really helped me get my blood sugar under control. I’ve noticed fewer spikes which is awesome! But I've had some weird cravings lately and that’s been frustrating.",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Invokana has worked wonders for my energy levels! I used to feel so sluggish but now I’m more active. On the downside I've had some yeast infections which is a real bummer.",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Lantus has been a reliable insulin for me. I like that it’s just once a day but I’ve had a couple of episodes where my levels dipped too low. It’s scary but I’m learning to manage it.",
        },
        {
          platform: "PatientLikeMe",
          content:
            "Switching to Levemir was a great choice! My blood sugar is pretty steady now but I find the injections a bit painful sometimes. It’s annoying but I guess it’s a trade-off.",
        },
        {
          platform: "Reddit",
          content:
            "I really love Ozempic! My blood sugar has improved and I've lost around 10 pounds. But I’ve had a few days where I felt super nauseous and that was no fun at all.",
        },
        {
          platform: "Reddit",
          content:
            "Trulicity is so easy to use but I wish it worked a bit faster for me. My blood sugar has come down some but I still have days where I feel hungry all the time. It’s a mixed bag!",
        },
        {
          platform: "Reddit",
          content:
            "Mounjaro has been fantastic! My blood sugar is the best it’s been in years and I've even dropped a few pounds. However I’ve experienced some stomach upset so it’s not all sunshine and rainbows.",
        },
      ]);
      setCommentsSideEffects([
        {
          platform: "Januvia",
          content:
            "Been on Januvia for a few months now. It helps my blood sugar but damn I get nauseous after meals sometimes. Just what I needed right?",
        },
        {
          platform: "Jardiance",
          content:
            "Jardiance is decent for my A1C but I swear I’m living in the bathroom. Like can a person get a break? It's a bit embarrassing when I’m out and about!",
        },
        {
          platform: "Glucophage",
          content:
            "Glucophage has been my go-to for ages but the stomach issues are REAL. I’ve become best friends with my restroom. Honestly it’s kind of a pain.",
        },
        {
          platform: "Farxiga",
          content:
            "Farxiga does a solid job on my blood sugar but the cravings are wild! Plus I’ve felt a bit dizzy at times. Not sure if it’s the meds or just me.",
        },
        {
          platform: "Invokana",
          content:
            "Invokana is good for energy but wow the yeast infections are no joke. I didn’t sign up for that. It’s super annoying!",
        },
        {
          platform: "Lantus",
          content:
            "Lantus has been okay but I’ve had some crazy lows that leave me shaky and anxious. It freaks me out! Still trying to nail down the right dosage.",
        },
        {
          platform: "Levemir",
          content:
            "Levemir works for my blood sugar but sometimes the injection sites hurt like hell. Why can't it just be easy? Better than feeling out of control though.",
        },
        {
          platform: "Ozempic",
          content:
            "Ozempic has been a game changer for my sugar but I’ve had days where I feel super nauseous. Skipped meals way too often. Anyone else?",
        },
        {
          platform: "Trulicity",
          content:
            "Trulicity is pretty easy to use but those stomach cramps hit me like a truck sometimes. It’s not fun especially when I'm out with friends.",
        },
        {
          platform: "Mounjaro",
          content:
            "Mounjaro has done wonders for my diabetes but the stomach upset is no joke. It’s hit me out of nowhere and ruined some plans. Ugh!",
        },
      ]);
      setwebsiteData([
        { name: "Ozempic", value: 13, value2: 15 }, // Keep
        { name: "Victoza", value: 10, value2: 13 }, // Replace
        { name: "Trulicity", value: 8, value2: 10 }, // Replace
        { name: "Wegovy", value: 7, value2: 9 }, // Replace
        { name: "Saxenda", value: 6, value2: 7 }, // Replace
        { name: "Mounjaro", value: 4, value2: 6 }, // Replace
        { name: "Byetta", value: 2, value2: 3 }, // New
      ]);
      setwebsiteData2([
        { name: "Jardiance", value: 11, value2: 15 }, // Keep value
        { name: "Glucophage", value: 10, value2: 14 }, // Keep value
        { name: "Fortamet", value: 8, value2: 10 }, // Keep value
        { name: "Invokana", value: 7, value2: 9 }, // New entry with old value
        { name: "Farxiga", value: 6, value2: 9 }, // New entry with old value
        { name: "Levemir", value: 4, value2: 6 }, // New entry with old value
        { name: "Humalog", value: 3, value2: 5 }, // New entry with old value
        { name: "Novolog", value: 3, value2: 4 }, // New entry with old value
        { name: "Basaglar", value: 3, value2: 4 }, // New entry with old value
        { name: "Fiasp", value: 3, value2: 2 }, // New entry with old value
      ]);
      setwebsiteData3([
        { name: "Januvia", value: 12, value2: 16 }, // Adjusted value
        { name: "Janumet", value: 11, value2: 14 }, // New entry with old value
        { name: "Onglyza", value: 6, value2: 11 }, // New entry with old value
        { name: "Nesina", value: 7, value2: 10 }, // New entry with old value
        { name: "Evogliptin", value: 6, value2: 7 }, // New entry with old value
        { name: "Omarigliptin", value: 4, value2: 6 }, // New entry with old value
        { name: "Jentadueto", value: 5, value2: 6 }, // New entry with old value
      ]);
      seteffectData([
        { name: "Ozempic", value: 19, value2: 20 }, // Keep
        { name: "Victoza", value: 10, value2: 18 }, // Replace
        { name: "Trulicity", value: 15, value2: 17 }, // Replace
        { name: "Wegovy", value: 7, value2: 14 }, // Replace
        { name: "Saxenda", value: 6, value2: 10 }, // Replace
        { name: "Mounjaro", value: 4, value2: 6 }, // Replace
        { name: "Byetta", value: 2, value2: 3 }, // New
      ]);
      seteffectData2([
        { name: "Jardiance", value: 14, value2: 18 }, // Keep value
        { name: "Glucophage", value: 13, value2: 16 }, // Keep value
        { name: "Fortamet", value: 8, value2: 13 }, // Keep value
        { name: "Invokana", value: 6, value2: 10 }, // New entry with old value
        { name: "Farxiga", value: 9, value2: 9 }, // New entry with old value
        { name: "Levemir", value: 4, value2: 9 }, // New entry with old value
        { name: "Humalog", value: 3, value2: 5 }, // New entry with old value
        { name: "Novolog", value: 1, value2: 4 }, // New entry with old value
        { name: "Basaglar", value: 4, value2: 4 }, // New entry with old value
        { name: "Fiasp", value: 3, value2: 2 }, // New entry with old value
      ]);
      seteffectData3([
        { name: "Januvia", value: 15, value2: 16 }, // Adjusted value
        { name: "Janumet", value: 11, value2: 14 }, // New entry with old value
        { name: "Onglyza", value: 6, value2: 11 }, // New entry with old value
        { name: "Nesina", value: 10, value2: 10 }, // New entry with old value
        { name: "Evogliptin", value: 6, value2: 7 }, // New entry with old value
        { name: "Omarigliptin", value: 6, value2: 6 }, // New entry with old value
        { name: "Jentadueto", value: 2, value2: 6 }, // New entry with old value
      ]);
      setTopDrug([
        {
          name: "Ozempic",
          percentage: "11.61%",
        },
        {
          name: "Januvia",
          percentage: "9.46%",
        },
        {
          name: "Jardiance",
          percentage: "8.81%",
        },
        {
          name: "Victoza",
          percentage: "7.73%",
        },
        {
          name: "Glucophage",
          percentage: "6.86%",
        },
        {
          name: "Trulicity",
          percentage: "6.22%",
        },
        {
          name: "Wegovy",
          percentage: "4.51%",
        },
        {
          name: "Saxenda",
          percentage: "3.86%",
        },
        {
          name: "Fortamet",
          percentage: "3.43%",
        },
        {
          name: "Mounjaro",
          percentage: "3%",
        },
        {
          name: "Invokana",
          percentage: "2.78%",
        },
        {
          name: "Byetta",
          percentage: "2.57%",
        },
        {
          name: "Farxiga",
          percentage: "2.14%",
        },
        {
          name: "Levemir",
          percentage: "1.93%",
        },
        {
          name: "Janumet",
          percentage: "1.71%",
        },
        {
          name: "Onglyza",
          percentage: "1.5%",
        },
        {
          name: "Humalog",
          percentage: "1.29%",
        },
        {
          name: "Novolog",
          percentage: "1.07%",
        },
        {
          name: "Basaglar",
          percentage: "0.64%",
        },
        {
          name: "Fiasp",
          percentage: "0.43%",
        },
        {
          name: "Aspart",
          percentage: "0.34%",
        },
        {
          name: "Apidra",
          percentage: "0.26%",
        },
        {
          name: "Nesina",
          percentage: "0.21%",
        },
        {
          name: "Steglatro",
          percentage: "0.17%",
        },
        {
          name: "Evogliptin",
          percentage: "0.09%",
        },
        {
          name: "Omarigliptin",
          percentage: "0.04%",
        },
        {
          name: "Jentadueto",
          percentage: "0.04%",
        },
      ]);
    } else if (selectedDisease === "Rheumatoid Arthritis") {
      setKpiData([
        { title: "TOTAL FORUMS", number: 10 },
        { title: "TOTAL DISCUSSIONS", number: "1,00,000" },
        { title: "TOTAL COMMENTS", number: "10,000,000" },
        { title: "AVG ENGAGEMENT", number: "6/thread" },
      ]);
      setwebsiteData([
        { name: "Humira", value: 15, value2: 17 },
        { name: "Enbrel", value: 9, value2: 14 },
        { name: "Remicade", value: 7, value2: 10 },
        { name: "Orencia", value: 6, value2: 9 },
        { name: "Actemra", value: 6, value2: 7 },
        { name: "Xeljanz", value: 4, value2: 6 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 3, value2: 4 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 3, value2: 3 },
      ]);
      setwebsiteData2([
        { name: "Humira", value: 16, value2: 17 },
        { name: "Enbrel", value: 13, value2: 14 },
        { name: "Remicade", value: 7, value2: 12 },
        { name: "Orencia", value: 6, value2: 10 },
        { name: "Actemra", value: 4, value2: 6 },
        { name: "Xeljanz", value: 4, value2: 6 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 2, value2: 4 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 1, value2: 2 },
      ]);
      setwebsiteData3([
        { name: "Kineret", value: 14, value2: 17 },
        { name: "Arava", value: 9, value2: 12 },
        { name: "Plaquenil", value: 7, value2: 10 },
        { name: "Imuran", value: 6, value2: 9 },
        { name: "Trexall", value: 3, value2: 7 },
        { name: "Otrexup", value: 5, value2: 7 },
        { name: "Rasuvo", value: 2, value2: 4 },
        { name: "Kevzara", value: 3, value2: 4 },
        { name: "Stelara", value: 3, value2: 3 },
        { name: "Tremfya", value: 3, value2: 3 },
      ]);

      seteffectData([
        { name: "Humira", value: 16, value2: 17 },
        { name: "Enbrel", value: 13, value2: 14 },
        { name: "Remicade", value: 7, value2: 12 },
        { name: "Orencia", value: 6, value2: 10 },
        { name: "Actemra", value: 6, value2: 8 },
        { name: "Xeljanz", value: 4, value2: 6 },
        { name: "Rinvoq", value: 2, value2: 5 },
        { name: "Cimzia", value: 3, value2: 5 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 3, value2: 3 },
      ]);
      seteffectData2([
        { name: "Humira", value: 16, value2: 20 },
        { name: "Enbrel", value: 13, value2: 17 },
        { name: "Remicade", value: 7, value2: 12 },
        { name: "Orencia", value: 6, value2: 12 },
        { name: "Actemra", value: 4, value2: 11 },
        { name: "Xeljanz", value: 4, value2: 6 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 2, value2: 5 },
        { name: "Simponi", value: 3, value2: 4 },
        { name: "Simponi Aria", value: 2, value2: 2 },
      ]);
      seteffectData3([
        { name: "Kineret", value: 11, value2: 17 },
        { name: "Arava", value: 12, value2: 12 },
        { name: "Plaquenil", value: 12, value2: 10 },
        { name: "Imuran", value: 8, value2: 9 },
        { name: "Trexall", value: 4, value2: 7 },
        { name: "Otrexup", value: 1, value2: 7 },
        { name: "Rasuvo", value: 4, value2: 4 },
        { name: "Kevzara", value: 2, value2: 4 },
        { name: "Stelara", value: 1, value2: 3 },
        { name: "Tremfya", value: 2, value2: 3 },
      ]);

      setTopDrug([
        {
          name: "Humira",
          percentage: "15.25%",
        },
        {
          name: "Enbrel",
          percentage: "13.12%",
        },
        {
          name: "Remicade",
          percentage: "12.35%",
        },
        {
          name: "Orencia",
          percentage: "10.50%",
        },
        {
          name: "Actemra",
          percentage: "8.45%",
        },
        {
          name: "Xeljanz",
          percentage: "7.15%",
        },
        {
          name: "Rinvoq",
          percentage: "6.25%",
        },
        {
          name: "Cimzia",
          percentage: "5.20%",
        },
        {
          name: "Simponi",
          percentage: "4.35%",
        },
        {
          name: "Simponi Aria",
          percentage: "3.25%",
        },
        {
          name: "Kineret",
          percentage: "2.45%",
        },
        {
          name: "Arava",
          percentage: "2.10%",
        },
        {
          name: "Plaquenil",
          percentage: "2.05%",
        },
        {
          name: "Imuran",
          percentage: "2.00%",
        },
        {
          name: "Trexall",
          percentage: "1.95%",
        },
        {
          name: "Otrexup",
          percentage: "1.90%",
        },
        {
          name: "Rasuvo",
          percentage: "1.85%",
        },
        {
          name: "Kevzara",
          percentage: "1.75%",
        },
        {
          name: "Stelara",
          percentage: "1.65%",
        },
        {
          name: "Tremfya",
          percentage: "1.60%",
        },
        {
          name: "Cosentyx",
          percentage: "1.55%",
        },
        {
          name: "Taltz",
          percentage: "1.50%",
        },
        {
          name: "Siliq",
          percentage: "1.45%",
        },
        {
          name: "Ilumya",
          percentage: "1.40%",
        },
        {
          name: "Skyrizi",
          percentage: "1.35%",
        },
        {
          name: "Benlysta",
          percentage: "1.30%",
        },
        {
          name: "Rheumatrex",
          percentage: "1.25%",
        },
        {
          name: "Avsola",
          percentage: "1.15%",
        },
        {
          name: "Inflectra",
          percentage: "1.05%",
        },
        {
          name: "Hadlima",
          percentage: "1.00%",
        },
      ]);
      setCommentsEfficacy([
        {
          platform: "Reddit",
          content:
            "Hi all. I’ve been on Enbrel for a little over a month. I noticed improvements right away, but I seem to start feeling worse somewhere around day 5. Does anyone have this experience? Also, do you still have breakthrough flares while on it? Thanks!!!",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I’m considering switching from HCQ and MTX to Enbrel. I’ve had an increase in flares over the past couple months, so my rheumatologist recommended trying Enbrel and the thought of not taking as many pills is a huge plus.\nWhat experiences have y’all had w Enbrel? How long until it was effective? What were side effects you experienced?",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "Hi,\nWhen I was on infliximab it was eventually noticed by my doctor through a specific test that it wasn't as effective and my body has started to develop antibodies. And I was curious if anyone knows if there is a similar test for adalimumab?\nI've been on adalimumab for several years now but I'm starting to notice that possibly my Crohn's symptoms are creeping back up i.e. about 3 days before my injection is due I'll start to notice abdominal pain, the occasional mouth ulcer.\nSo I'm wondering now if the drug isn't as effective or if my Crohn's is just naturally getting worse and if the fix then is injecting every week instead of every other week.\nIf that makes sense to anyone...? :-P",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "Real world data back safety, efficacy of Remicade biosimilar",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "Anyone taking Cimzia? I’m curious about effectiveness and side effects.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            ".Orencia - Efficacy Between IV vs SC\nAre there any clinical advantages for intravenous administration over subcutaneous?",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "rituxan - what’s been your experience on the efficacy of multiple treatments over time?\nWas diagnosed with Non-Hodgkin’s follicular lymphoma earlier this year by means of an incidental observation of CAT scan for a different problem (it’s been a hell of a year).\nWe haven’t started treatment because I haven’t exhibited any of the symptoms that pertain to lymphoma. When I do, both my initial diagnosis from my oncologist and my second opinion hematologist are looking at Rituxan as the primary means of treatment. My second opinion doc elaborated more on why we would want to wait until I was exhibiting signs or discomfort or pain as a result of the lymphoma. Effectively he said that over time, rituxan’s impact would diminish. and that we would move on to another treatment (immunotherapy was mentioned) or that’s the end for me. We didn’t really elaborate too much on that part of the timeline at this point.\nMy question is this - for those of you that have used rituxan as your primary means of treatment, how many rounds have you taken to push the lymphoma into remission? Did the timeframe between treatments decrease over time? Did you take rituxan by itself or was it part of a cocktail of drugs/treatments?",
          User: "User",
          Bucket: "Efficacy",
        },
      ]);
      setCommentsSideEffects([
        {
          platform: "Reddit",
          content:
            "Orencia side effects\nHello all. I'm on a weekly dose of Orencia, and about two/three days after my dose, I feel like I have early covid symptoms that last about another day or three. This has become a weekly occurrence for me. Does anyone else have these issues? Thanks in advance",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Orencia side effect?\nUgh. I had my first Orencia injection last week on Friday. I felt really fatigued and sleepy all weekend. On I think Sunday I felt really congested & like I had allergies? Sneezy, just blah. Today & yesterday it feels like I have a cold: congested, sniffly, some sneezing, headache. I'm SO careful about germ exposure (I mask everywhere, and so do my kids) and I can't think of any actual cold/flu exposure. I've seen \"\"cold like symptoms\"\" listed as a possible Orencia side effect, and the timing lines up. Does anyone else get side effects like this?? How long do they last, both like week to week and overall (like do they go away after the first few months?)?\nI'm so mad. I was on Enbrel and it was okay-ish. Tried two doses of Humira and couldn't tolerate it. Waited 1 full month to actually receive Orencia..and now I feel literally sick.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Hey, everyone. I’m new to Reddit and to RA (diagnosed in March of this year). I joined because I really hope to connect with others who are trying to live their best life with AI!\nFor those on Orencia, my rheumatologist says that most of the side effects go away the longer you stay on it, with best results and tapering of side effects around 6 months. I’ve had 8 injections, and for the first 2-3 days after each shot, I feel like I’m coming down with the flu — muscle aches, coughing, sneezing, stuffy nose, sore throat. Anyone else experienced this? And if so, has it tapered off for you?\nThanks, happy to meet you all!",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I'm about 5 months out from being declared in remission from NHL/MZL (late-stage). I was on Bendamustine plus Rituxan/Prednisone during my treatment.\nNow, I'm just going in every 2 months for Rituxan maintenance. I've done two so far. The first one wasn't too bad but the second one feels like it's giving me side effects.\nI feel kind of hot and yucky and tend to go to bed earlier and sleep much longer. I have a lot of anxiety and brain fog and forget things a little more often. I have very long, detailed and vivid dreams. Actually, some pretty pleasant ones. I wake up feeling a little congested but anything that comes out of my sinuses or lungs is clear in color. Sometimes I wake up feeling really out of it, zoned-out and very spacy. I had some hoarseness yesterday morning that cleared up and was just a little hoarse this morning but that has cleared up as well. I have GERD and have been hoarse before so maybe thats it.\nMy last Rituxan treatment was 3 days ago and I also had a phlebotomy on that same day. I have labs every week.\nMy BP/pulse/temp are always pretty normal and my last labs were pretty normal. I don't feel sick per se but just off and yucky and the worst is during the early morning hours.\nWhat side effects do you folks have from Rituxan maintenance?. Can any of you relate to my experience with Rituxan maintenance?. Thanks so much!.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I have high JC levels while on Tysabri so much dr recommended Rituximab. As I look at this drug there are a host of side effects including PML still. My question is what if any side effects do you have currently on Rituximab? When give Rituximab as an option what other drug did you choose. Ocrevus is not an option where I am.\nThanks in advance everyone.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I’ve been on actemra for 3 months - weekly injections. I have noticed since the beginning of January severe bloating almost everyday. I am on top of my gut health (take daily probiotics/eat probiotic and prebiotic rich foods, been dairy/gluten free for 5 years) and I’ve never had such bad bloating.\nI’m going to talk to my rheumatologist about it next week, but was wondering if anyone else had similar side effects.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Hello, I used to suffer from nausea and vomiting on my period along with insanely bad cramps which was relieved by taking ibuprofen every 6 ish hours for the first few days of my period. This was recommended and approved by a doctor.\nI usually take the liquid children’s form because it is gentler on my stomach, and I do worry about side effects.\nI am trans, and will be starting hormones soon, so this is not a long-term solution. I have done this for about three or so years. Am I in danger? I’ve read horror stories from people with fucked up stomachs from ibuprofen and am now worrying it will be me.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Hello, So I suffer from tension headaches 24/7 since April 7th 2024, I have been taking ibuprofen 400mg 3 times a week, And amitriptyline(this isn’t working it seems)\nIbuprofen works very well, but I’m today I noticed I have bloody stool, I know I shouldn’t be taking this, my goal is to find an alternative for relief now cuz I’m definitely worried.\nIs there anyone that has gone through the same experience? Would love to hear your story I’m super worried.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Hi there Currently on 800 mg ibuprofen twice a day and in between regular Tylenol. I’m on day 9 post horizontal impacted extraction and only started this regime on day 6 when I couldn’t sleep. Wondering what are the long or short term effects of taking these pain meds? I don’t want to destroy my stomach lining, do the meds impact gut bacteria?",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "If you take these medicines and go into the sun you can get hives/welts on your skin as if you have an actual sun allergy.\nI just thought some of older millennials should know.",
          User: "User",
          Bucket: "Side effects",
        },
      ]);
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
      setwebsiteData([
        { name: "Otezla", value: 25, value2: 35 },
        { name: "Enbrel", value: 12, value2: 31 },
        { name: "Humira", value: 14, value2: 20 },
        { name: "Stelara", value: 8, value2: 17 },
        { name: "Cimzia", value: 6, value2: 17 },
        { name: "Tremfya", value: 8, value2: 13 },
        { name: "Skyrizi", value: 7, value2: 8 },
        { name: "Xeljanz", value: 3, value2: 4 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 3, value2: 3 },
      ]);
      setwebsiteData2([
        { name: "Humira", value: 20, value2: 32 },
        { name: "Enbrel", value: 18, value2: 30 },
        { name: "Remicade", value: 15, value2: 25 },
        { name: "Orencia", value: 10, value2: 20 },
        { name: "Actemra", value: 8, value2: 18 },
        { name: "Xeljanz", value: 5, value2: 15 },
        { name: "Rinvoq", value: 4, value2: 10 },
        { name: "Cimzia", value: 3, value2: 8 },
        { name: "Simponi", value: 3, value2: 6 },
        { name: "Simponi Aria", value: 2, value2: 4 },
      ]);

      setwebsiteData3([
        { name: "Kineret", value: 38, value2: 40 },
        { name: "Arava", value: 15, value2: 35 },
        { name: "Plaquenil", value: 12, value2: 30 },
        { name: "Imuran", value: 10, value2: 28 },
        { name: "Trexall", value: 8, value2: 25 },
        { name: "Otrexup", value: 6, value2: 20 },
        { name: "Rasuvo", value: 4, value2: 16 },
        { name: "Kevzara", value: 3, value2: 12 },
        { name: "Stelara", value: 3, value2: 10 },
        { name: "Tremfya", value: 2, value2: 8 },
      ]);

      seteffectData([
        { name: "Otezla", value: 20, value2: 35 },
        { name: "Enbrel", value: 28, value2: 31 },
        { name: "Humira", value: 16, value2: 20 },
        { name: "Stelara", value: 16, value2: 17 },
        { name: "Cimzia", value: 6, value2: 17 },
        { name: "Tremfya", value: 2, value2: 13 },
        { name: "Skyrizi", value: 7, value2: 8 },
        { name: "Xeljanz", value: 1, value2: 4 },
        { name: "Rinvoq", value: 2, value2: 3 },
        { name: "Remicade", value: 4, value2: 3 },
      ]);
      seteffectData2([
        { name: "Humira", value: 20, value2: 40 },
        { name: "Enbrel", value: 18, value2: 35 },
        { name: "Remicade", value: 12, value2: 30 },
        { name: "Orencia", value: 8, value2: 25 },
        { name: "Actemra", value: 7, value2: 20 },
        { name: "Xeljanz", value: 5, value2: 15 },
        { name: "Rinvoq", value: 4, value2: 10 },
        { name: "Cimzia", value: 3, value2: 8 },
        { name: "Simponi", value: 2, value2: 6 },
        { name: "Simponi Aria", value: 1, value2: 3 },
      ]);

      seteffectData3([
        { name: "Kineret", value: 35, value2: 40 },
        { name: "Arava", value: 25, value2: 35 },
        { name: "Plaquenil", value: 20, value2: 30 },
        { name: "Imuran", value: 18, value2: 28 },
        { name: "Trexall", value: 12, value2: 22 },
        { name: "Otrexup", value: 10, value2: 18 },
        { name: "Rasuvo", value: 8, value2: 15 },
        { name: "Kevzara", value: 6, value2: 10 },
        { name: "Stelara", value: 5, value2: 8 },
        { name: "Tremfya", value: 4, value2: 6 },
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
        { name: "Tremfya", percentage: "0.77%" }, // Note: "Tremfya" appears twice, this is the second one.
      ]);
      setCommentsEfficacy([
        {
          platform: "Reddit",
          content:
            "I've been on Otezla for six months, and it has significantly reduced my flare-ups. I'm feeling more like myself again!",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "After switching to Enbrel, I noticed a huge improvement in my joint pain. It was a game-changer for my psoriatic arthritis.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I had high hopes for Humira, but unfortunately, it didn’t work for me. I experienced minimal relief, and my symptoms persisted.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "Starting Taltz was the best decision I made. My skin cleared up, and my joints feel much better. I’m so grateful for this medication!",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I tried Cimzia for my psoriatic arthritis, and while it worked well initially, the effectiveness seemed to wear off after a few months.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "The results with Skyrizi have been impressive! I’ve seen significant improvement in both my skin and joint symptoms since starting.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I had high expectations for Tremfya, but it didn’t help as much as I hoped. I still deal with a lot of pain and discomfort.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "After starting Cosentyx, my psoriatic arthritis symptoms improved dramatically. I finally feel like I have my life back!",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I was really excited about Rinvoq, but it didn’t provide the relief I was looking for. I ended up switching to something else.",
          User: "User",
          Bucket: "Efficacy",
        },
        {
          platform: "Reddit",
          content:
            "I’ve been on Zycof for a while now, and while it helped initially, I feel like it’s losing its effectiveness. I might need to consider other options soon.",
          User: "User",
          Bucket: "Efficacy",
        },
      ]);
      setCommentsSideEffects([
        {
          platform: "Reddit",
          content:
            "Otezla is particularly known for causing anxiety and depression. For most people (but not all), the gastrointestinal stuff passes after 1-2 weeks as the body acclimates to the drug.\nAll systemic drugs have a risk of side effects. The problem is that side effects are highly individual, and you can't predict whether you will experience any of them. You can look at the rates of side effects from published clinical trials, and this can be useful in giving you a picture of what to expect, but it just tells you the overall trend.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Hi, I have been on otezla for a number of years now. Everyone is different so side effects may vary. I have found it so much more tolerable than all the other drugs I have been on, stomach issues for the first few months but it has eased a bit now. My dermo said people can lose up to 3 stone on otezla. Depression has been a constant battle for me, it's probably a combination of otezla and circumstance, so keep an eye on your mood. All in all it seems to be relatively safe, I don't have to do monthly bloods now.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I just received a starter pack for Otezla. My main concern is the depression side effect that could happen.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Some people tolerate certain drugs, but not others.\nThose are all well documented side effects of Otezla.\nAre there other drugs that don't have those side effects? Sure. But you should really just be having this conversation with your doctor and not randoms on reddit.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "When I first heard that the side effects of Otezla are diarrhea, nausea, anxiety, and depression, I thought \"damn this thing sounds like an SSRI.\" If you google there's actually limited research that found SSRIs reduced the need for systemic psoriasis treatment for folks with mild symptoms. I'm incredibly curious now about the connection between psoriasis and mood disorders.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Also, good luck with the otezla! I hope you have a better experience with it. It definitely helped my psoriasis, just couldn’t tolerate the side effects. What country are you in btw? Do you know if they have Bimzelx?",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I’m on my fifth pill of the Otezla starter pack (taken three 10s and two 20s so far) and the side effects are completely debilitating at this point— I haven’t been able to leave bed or the couch much since starting. Flu-like symptoms including nausea (taking with food helps, and using zofran), headache, body aches, chills, exhaustion, and a prickly panicky feeling all over. I have a lot of fatigue at baseline but otherwise none of these are typical symptoms for me.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I’m about 5 weeks in and the first 8-9 days were terrible with bouts of nausea with lots of retching (but no actual vomiting) and urgent bowel movements and diarrhea multiple times per day. I still get waves of extreme nausea and retching that don’t seem to have any pattern and am still having multiple bowel movements per day but only rarely is it diarrhea. When I’m retching my heart will race as well and it takes several minutes for my heart rate to recover. Frankly I hate the side effects but my dermatologist is running out of options for me.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "Glad to hear you got through your side effects. I just started week two and hoping mine reduce. The Headaches, jitteryness and Nausea have been the worse for me.",
          User: "User",
          Bucket: "Side effects",
        },
        {
          platform: "Reddit",
          content:
            "I  am finishing my second week on Otezla today. it has been making me violently nauseous, killed my appetite to the point I am barely eating, and my stomach has been hurting almost constantly. when does it get better on this medicine? does it get better? i have mostly arthritis over psoriasis symptoms (recently DX’d) so i am trying to figure out what the right path for me is.",
          User: "User",
          Bucket: "Side effects",
        },
      ]);
      setTitle1("ALL");
      setTitle2("Biological Agents (Biologics)");
      setTitle3("DMARDs");
    } else if (selectedDisease === "Lung Cancer")
    {
      setKpiData([
        { title: "TOTAL FORUMS", number: 18 },
        { title: "TOTAL DISCUSSIONS", number: "740, 902" },
        { title: "TOTAL COMMENTS", number: "2000000" },
        { title: "AVG ENGAGEMENT", number: "2.7 comments/thread" },
    ]);
    setTopDrug([
      { name: "Keytruda", percentage: "12.5%" },
      { name: "Opdivo", percentage: "11.2%" },
      { name: "Tecentriq", percentage: "10.8%" },
      { name: "Avastin", percentage: "9.7%" },
      { name: "Tarceva", percentage: "8.5%" },
      { name: "Iressa", percentage: "7.9%" },
      { name: "Alimta", percentage: "7.2%" },
      { name: "Tagrisso", percentage: "6.8%" },
      { name: "Xalkori", percentage: "6.4%" },
      { name: "Alecensa", percentage: "5.9%" },
      { name: "Imfinzi", percentage: "5.4%" },
      { name: "Camptosar", percentage: "5.0%" },
      { name: "Cyclophosphamide", percentage: "4.6%" },
      { name: "Adriamycin", percentage: "4.1%" },
      { name: "Etopophos", percentage: "3.7%" },
      { name: "Carboplatin", percentage: "3.4%" },
      { name: "Cisplatin", percentage: "3.0%" },
      { name: "Gilotrif", percentage: "2.8%" },
      { name: "Lorbrena", percentage: "2.5%" },
      { name: "Rybrevant", percentage: "2.2%" },
      { name: "Zykadia", percentage: "1.9%" },
      { name: "Vizimpro", percentage: "1.6%" },
      { name: "Portrazza", percentage: "1.3%" },
      { name: "Cyramza", percentage: "1.1%" },
      { name: "Gavreto", percentage: "0.9%" },
      { name: "Retevmo", percentage: "0.8%" },
      { name: "Lazertinib", percentage: "0.7%" },
      { name: "Sutent", percentage: "0.5%" },
      { name: "Afinitor", percentage: "0.3%" },
      { name: "Sandostatin", percentage: "0.1%" },
  ]);
    }
  };

  // --------------- // Fectching Data complete //-----------------//

  // State for selected disease and KPI data
  const [kpiData, setKpiData] = useState([
    { title: "TOTAL FORUMS", number: 20 },
    { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
    { title: "TOTAL COMMENTS", number: "11,000,000" },
    { title: "AVG ENGAGEMENT", number: "8/thread" },
  ]);

  const [TopDrug, setTopDrug] = useState([
    {
      name: "Ozempic",
      percentage: "11.61%",
    },
    {
      name: "Januvia",
      percentage: "9.46%",
    },
    {
      name: "Jardiance",
      percentage: "8.81%",
    },
    {
      name: "Victoza",
      percentage: "7.73%",
    },
    {
      name: "Glucophage",
      percentage: "6.86%",
    },
    {
      name: "Trulicity",
      percentage: "6.22%",
    },
    {
      name: "Wegovy",
      percentage: "4.51%",
    },
    {
      name: "Saxenda",
      percentage: "3.86%",
    },
    {
      name: "Fortamet",
      percentage: "3.43%",
    },
    {
      name: "Mounjaro",
      percentage: "3%",
    },
    {
      name: "Invokana",
      percentage: "2.78%",
    },
    {
      name: "Byetta",
      percentage: "2.57%",
    },
    {
      name: "Farxiga",
      percentage: "2.14%",
    },
    {
      name: "Levemir",
      percentage: "1.93%",
    },
    {
      name: "Janumet",
      percentage: "1.71%",
    },
    {
      name: "Onglyza",
      percentage: "1.5%",
    },
    {
      name: "Humalog",
      percentage: "1.29%",
    },
    {
      name: "Novolog",
      percentage: "1.07%",
    },
    {
      name: "Basaglar",
      percentage: "0.64%",
    },
    {
      name: "Fiasp",
      percentage: "0.43%",
    },
    {
      name: "Aspart",
      percentage: "0.34%",
    },
    {
      name: "Apidra",
      percentage: "0.26%",
    },
    {
      name: "Nesina",
      percentage: "0.21%",
    },
    {
      name: "Steglatro",
      percentage: "0.17%",
    },
    {
      name: "Evogliptin",
      percentage: "0.09%",
    },
    {
      name: "Omarigliptin",
      percentage: "0.04%",
    },
    {
      name: "Jentadueto",
      percentage: "0.04%",
    },
  ]);

  const [websiteData, setwebsiteData] = useState([
    { name: "Ozempic", value: 13, value2: 15 }, // Keep
    { name: "Victoza", value: 10, value2: 13 }, // Replace
    { name: "Trulicity", value: 8, value2: 10 }, // Replace
    { name: "Wegovy", value: 7, value2: 9 }, // Replace
    { name: "Saxenda", value: 6, value2: 7 }, // Replace
    { name: "Mounjaro", value: 4, value2: 6 }, // Replace
    { name: "Byetta", value: 2, value2: 3 }, // New
  ]);
  const [websiteData2, setwebsiteData2] = useState([
    { name: "Jardiance", value: 11, value2: 15 }, // Keep value
    { name: "Glucophage", value: 10, value2: 14 }, // Keep value
    { name: "Fortamet", value: 8, value2: 10 }, // Keep value
    { name: "Invokana", value: 7, value2: 9 }, // New entry with old value
    { name: "Farxiga", value: 6, value2: 9 }, // New entry with old value
    { name: "Levemir", value: 4, value2: 6 }, // New entry with old value
    { name: "Humalog", value: 3, value2: 5 }, // New entry with old value
    { name: "Novolog", value: 3, value2: 4 }, // New entry with old value
    { name: "Basaglar", value: 3, value2: 4 }, // New entry with old value
    { name: "Fiasp", value: 3, value2: 2 }, // New entry with old value
  ]);
  const [websiteData3, setwebsiteData3] = useState([
    { name: "Januvia", value: 12, value2: 16 }, // Adjusted value
    { name: "Janumet", value: 11, value2: 14 }, // New entry with old value
    { name: "Onglyza", value: 6, value2: 11 }, // New entry with old value
    { name: "Nesina", value: 7, value2: 10 }, // New entry with old value
    { name: "Evogliptin", value: 6, value2: 7 }, // New entry with old value
    { name: "Omarigliptin", value: 4, value2: 6 }, // New entry with old value
    { name: "Jentadueto", value: 5, value2: 6 }, // New entry with old value
  ]);
  const [effectData, seteffectData] = useState([
    { name: "Ozempic", value: 19, value2: 20 }, // Keep
    { name: "Victoza", value: 10, value2: 18 }, // Replace
    { name: "Trulicity", value: 15, value2: 17 }, // Replace
    { name: "Wegovy", value: 7, value2: 14 }, // Replace
    { name: "Saxenda", value: 6, value2: 10 }, // Replace
    { name: "Mounjaro", value: 4, value2: 6 }, // Replace
    { name: "Byetta", value: 2, value2: 3 }, // New
  ]);
  const [effectData2, seteffectData2] = useState([
    { name: "Jardiance", value: 14, value2: 18 }, // Keep value
    { name: "Glucophage", value: 13, value2: 16 }, // Keep value
    { name: "Fortamet", value: 8, value2: 13 }, // Keep value
    { name: "Invokana", value: 6, value2: 10 }, // New entry with old value
    { name: "Farxiga", value: 9, value2: 9 }, // New entry with old value
    { name: "Levemir", value: 4, value2: 9 }, // New entry with old value
    { name: "Humalog", value: 3, value2: 5 }, // New entry with old value
    { name: "Novolog", value: 1, value2: 4 }, // New entry with old value
    { name: "Basaglar", value: 4, value2: 4 }, // New entry with old value
    { name: "Fiasp", value: 3, value2: 2 }, // New entry with old value
  ]);
  const [effectData3, seteffectData3] = useState([
    { name: "Januvia", value: 15, value2: 16 }, // Adjusted value
    { name: "Janumet", value: 11, value2: 14 }, // New entry with old value
    { name: "Onglyza", value: 6, value2: 11 }, // New entry with old value
    { name: "Nesina", value: 10, value2: 10 }, // New entry with old value
    { name: "Evogliptin", value: 6, value2: 7 }, // New entry with old value
    { name: "Omarigliptin", value: 6, value2: 6 }, // New entry with old value
    { name: "Jentadueto", value: 2, value2: 6 }, // New entry with old value
  ]);

  return (
    <>
      <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />

      <Container fluid>
        {/* <Container>
          <Row>
            Column for the first chart, taking 6 out of 12 grid columns
            <Col md={12}>
              <ProductStack />
            </Col>
          </Row>
        </Container> */}
        <Container className="mt-2 p-3">
          <Card>
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
        <Container className="mt-2 p-3">
          <Row>
            <Col lg={4} style={{ padding: "inherit" }} className="h-100">
              <SegmentPart data={SegmentPartData} />
            </Col>
            <Col lg={8}>
              <TopBrands data={TopDrug} />
            </Col>
          </Row>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Efficacy</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={websiteData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={websiteData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={websiteData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsEfficacy} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Side effects</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={effectData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={effectData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={effectData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsSideEffects} />
          </Card>
        </Container>
      </Container>
    </>
  );
}
