import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/content.css";
import { DoubleBarChart } from "../charts/DoubleBarChart";
import jsonData from "../demo/conversion.json"; // Import your JSON data file
import { SegmentPart } from "../components/SegmentPart";
import { TopBrands } from "../components/TopBrands";
import { CommentSection } from "../components/CommentSection";
import { Header } from "../components/Header";
import TrialStack from "../charts/TrialStack";
import ValuesChart from "../charts/ValuesChart";
import TrialStackChart from "../charts/TrialStackChart";
import { chartData1, chartData10, chartData11, chartData12, chartData2, chartData3 } from "../static/data";
// Function to filter data by category
const filterDataByCategory = (category) => {
  return jsonData.filter((item) => item.Category === category);
};

export default function TrialPage() {
  // State for selected disease and KPI data
  const [selectedDisease, setSelectedDisease] = useState("");
  const [kpiData, setKpiData] = useState([
    { title: "TOTAL FORUMS", number: 20 },
    { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
    { title: "TOTAL COMMENTS", number: "11,000,000" },
    { title: "AVG ENGAGEMENT", number: "8/thread" },
  ]);

  const [title1, setTitle1] = useState("Diabetes with Weightloss");
  const [title2, setTitle2] = useState("Diabetes");
  const [title3, setTitle3] = useState("Gliptins");

  const [SegmentPartData, setSegmentPartData] = useState([
    {
      name: "Patient-Centricity-Sentiment",
    },
    {
      name: "Transparency",
    },
    {
      name: "Trial Support",
    },
  ]);
  const [TopDrug, setTopDrug] = useState([
    {
      name: "Mounjaro",
      percentage: "1.12",
    },
    {
      name: "Zynquista",
      percentage: "0.92",
    },
    {
      name: "Tzield",
      percentage: "0.64",
    },
    {
      name: "ORMD-0801 ",
      percentage: "0.53",
    },
    {
      name: "Efpeglenatide ",
      percentage: "0.39",
    },
    {
      name: "Cagrilintide ",
      percentage: "0.31",
    },
    {
      name: "Lyumjev",
      percentage: "0.29",
    },
    {
      name: "Pegylated Exendin-4 ",
      percentage: "0.23",
    },
    {
      name: "Ilaris",
      percentage: "0.16",
    },
    {
      name: "NNC9204-1177 ",
      percentage: "0.05",
    },
  ]);

  const [commentsPcs, setCommentsPcs] = useState([
    {
      platform: "Reddit",
      content:
        "I just kicked off the Mounjaro trial and while the team is super supportive I’m really struggling with the diet they want me to follow. It feels so restrictive! I just hope I can stick with it.",
    },
    {
      platform: "Reddit",
      content:
        "Been in the Cagrilintide trial for a month now and honestly I’m feeling pretty mixed. The nausea has hit me hard and even though the staff is great it’s tougher than I thought. Not sure if this is worth it yet.",
    },
    {
      platform: "Reddit",
      content:
        "I just wrapped up my first month on Efpeglenatide and I’m loving the energy boost! But I’ve also been dealing with some stomach issues that are pretty annoying. Just hoping the good stuff keeps coming!",
    },
    {
      platform: "Reddit",
      content:
        "Thinking about jumping into the NNC9204-1177 trial but I’m freaking out a bit about the side effects. I’ve had bad reactions to meds before so it’s making me hesitate. Anyone else feel this way?",
    },
    {
      platform: "Reddit",
      content:
        "The community vibe during my Mounjaro trial is awesome but I’m finding it hard to keep up with everything. Sometimes I feel totally overwhelmed by what they expect. Just trying not to burn out!",
    },
    {
      platform: "Reddit",
      content:
        "Joined the Cagrilintide trial hoping to shed some pounds but I’m honestly feeling a bit frustrated. The side effects are more than I thought and it’s hard to stay positive when I’m not seeing results. Thinking about bailing.",
    },
    {
      platform: "Reddit",
      content:
        "I’m really happy about my weight loss on Efpeglenatide but I’ve been super tired a lot. It’s tough to stay active when I just wanna nap. Trying to balance everything without losing my mind.",
    },
    {
      platform: "Reddit",
      content:
        "Being part of the NNC9204-1177 trial has its highs and lows. The team is cool but I sometimes feel like just another number in the study. I wish there was a bit more personal touch—it’d make it feel more special.",
    },
    {
      platform: "Reddit",
      content:
        "I’m getting used to the Mounjaro trial but the lifestyle changes are way harder than I expected. The staff is really supportive but when I don’t see any progress it can be pretty discouraging.",
    },
    {
      platform: "Reddit",
      content:
        "Looking back on my time in the Cagrilintide trial I feel a mix of empowerment and frustration. Connecting with others has been awesome but the side effects are rough and make me wonder if this is the right choice for me.",
    },
  ]);
  const [commentsTransparency, setCommentsTransparency] = useState([
    {
      platform: "Reddit",
      content:
        "I just started the Mounjaro trial and I have to say the staff is super friendly. But I really wish they’d be more upfront about the diet. It feels super restrictive and knowing the reasoning behind it would help me stick with it.",
    },
    {
      platform: "Reddit",
      content:
        "Been in the Cagrilintide trial for a month now and honestly I’m kind of torn. The team is great about explaining side effects but man this nausea is brutal! I could use a little more clarity on what to expect going forward.",
    },
    {
      platform: "Reddit",
      content:
        "I’m a month into the Efpeglenatide trial and I’m really feeling the energy boost! But I wish they had warned me about the stomach issues beforehand. It’s frustrating to deal with stuff I wasn’t expecting.",
    },
    {
      platform: "Reddit",
      content:
        "Thinking about joining the NNC9204-1177 trial but I’m pretty anxious about side effects. I’d feel way better if the team shared more about how they handle adverse reactions. Just want to know what I might be getting into.",
    },
    {
      platform: "Reddit",
      content:
        "The community vibe in my Mounjaro trial is awesome! But sometimes I feel overwhelmed with what they expect from me. If the team was a bit clearer about everything it would definitely take some pressure off.",
    },
    {
      platform: "Reddit",
      content:
        "I joined the Cagrilintide trial hoping to lose weight but I’m honestly frustrated. The staff is pretty honest about side effects but I wish they’d give me more info on how long it usually takes to see results. It’s hard to stay motivated!",
    },
    {
      platform: "Reddit",
      content:
        "I’m happy with my weight loss on Efpeglenatide but I’ve been feeling super drained lately. It would be great if the trial team could share how common this is just so I know I’m not the only one dealing with it.",
    },
    {
      platform: "Reddit",
      content:
        "Being part of the NNC9204-1177 trial has its ups and downs. The team is really nice but I sometimes feel like just another number. If they were more open about the process I think I’d feel a lot more connected.",
    },
    {
      platform: "Reddit",
      content:
        "Getting used to the Mounjaro trial is tougher than I thought! The lifestyle changes are intense. The staff is super supportive but if they explained why I need to make these changes it would help me stay on track.",
    },
    {
      platform: "Reddit",
      content:
        "Reflecting on my time in the Cagrilintide trial I feel both empowered and confused. I’ve made some great connections but I wish I had a clearer idea of what’s next. A little transparency would really help!",
    },
  ]);
  const [commentsTrialSupport, setCommentsTrialSupport] = useState([
    {
      platform: "Reddit",
      content:
        "So I just signed up for the Mounjaro trial and honestly I’m feeling a mix of excitement and nerves. I’ve read so many positive stories about it helping with weight loss but I can’t shake the worry about potential side effects. Anyone else been through this? I’d love to hear what your experiences were like!",
    },
    {
      platform: "Reddit",
      content:
        "I’ve been thinking about joining a Cagrilintide trial but I keep hearing mixed reviews about the support. I really want to feel like I have someone to talk to if I have questions or concerns. It’s a big step for me and I’d love to hear if anyone has had a good experience or any tips on how to navigate it.",
    },
    {
      platform: "Reddit",
      content:
        "Right now I’m in an Efpeglenatide trial and I have to say the support has blown me away! The staff checks in with me regularly and they really seem to care about how I’m feeling throughout the process. It’s nice to know I’m not just another participant; they remember my name and my story. Has anyone else felt this level of care?",
    },
    {
      platform: "Reddit",
      content:
        "I just wrapped up my time in the NNC9204-1177 trial and I have some mixed feelings. At the beginning the support was fantastic—so many check-ins and encouragement. But as time went on it felt like the focus shifted more to data collection than to us participants. I found myself feeling a bit lost toward the end. Did anyone else experience this?",
    },
    {
      platform: "Reddit",
      content:
        "I’m super hopeful about the Mounjaro trial! I’ve seen a ton of positive stories and testimonials which really gives me hope. I’m curious though—did anyone face side effects? I want to prepare myself and have a plan in place if I do. Any advice would be super helpful!",
    },
    {
      platform: "Reddit",
      content:
        "I’m really on the fence about the Cagrilintide trial. A friend of mine did it and said the support was great at first but then it really dropped off. That worries me because I want to feel supported throughout the entire process. If anyone has insights or advice on how to make the most of it I’d love to hear!",
    },
    {
      platform: "Reddit",
      content:
        "I just joined an Efpeglenatide trial and wow I’m genuinely impressed! The staff is so attentive and seems to really care about our thoughts and feelings. They even asked for our feedback during the trial which makes me feel valued. It’s nice to be part of something where I feel heard. Anyone else have a similar experience?",
    },
    {
      platform: "Reddit",
      content:
        "Completing the NNC9204-1177 trial was quite an eye-opener for me. At first the support was amazing—everyone was super helpful and encouraging. But as we got deeper into the trial I felt like they started to focus more on the numbers and data than on us participants. I found myself wishing for that initial support again. Did anyone else feel that way?",
    },
    {
      platform: "Reddit",
      content:
        "Has anyone else noticed how supportive the staff is in the Mounjaro trial? I’ve really appreciated all the check-ins and the personal touch they bring. It feels like they’re genuinely invested in our progress and that makes such a difference. I’m curious if others have had similar experiences.",
    },
    {
      platform: "Reddit",
      content:
        "I’m a bit hesitant about Cagrilintide. I’ve heard such mixed things about the support and I really don’t want to feel lost if I have questions during the trial. It’s a big step for me and I want to make sure I have someone to rely on throughout the process. Any tips from those who’ve been through it would be greatly appreciated!",
    },
  ]);

  // Handler for the dropdown change event
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
      setTopDrug([
        {
          name: "Mounjaro",
          percentage: "1.12",
        },
        {
          name: "Zynquista",
          percentage: "0.92",
        },
        {
          name: "Tzield",
          percentage: "0.64",
        },
        {
          name: "ORMD-0801 ",
          percentage: "0.53",
        },
        {
          name: "Efpeglenatide ",
          percentage: "0.39",
        },
        {
          name: "Cagrilintide ",
          percentage: "0.31",
        },
        {
          name: "Lyumjev",
          percentage: "0.29",
        },
        {
          name: "Pegylated Exendin-4 ",
          percentage: "0.23",
        },
        {
          name: "Ilaris",
          percentage: "0.16",
        },
        {
          name: "NNC9204-1177 ",
          percentage: "0.05",
        },
      ]);
      setCommentsPcs([
        {
          platform: "Reddit",
          content:
            "I just kicked off the Mounjaro trial and while the team is super supportive I’m really struggling with the diet they want me to follow. It feels so restrictive! I just hope I can stick with it.",
        },
        {
          platform: "Reddit",
          content:
            "Been in the Cagrilintide trial for a month now and honestly I’m feeling pretty mixed. The nausea has hit me hard and even though the staff is great it’s tougher than I thought. Not sure if this is worth it yet.",
        },
        {
          platform: "Reddit",
          content:
            "I just wrapped up my first month on Efpeglenatide and I’m loving the energy boost! But I’ve also been dealing with some stomach issues that are pretty annoying. Just hoping the good stuff keeps coming!",
        },
        {
          platform: "Reddit",
          content:
            "Thinking about jumping into the NNC9204-1177 trial but I’m freaking out a bit about the side effects. I’ve had bad reactions to meds before so it’s making me hesitate. Anyone else feel this way?",
        },
        {
          platform: "Reddit",
          content:
            "The community vibe during my Mounjaro trial is awesome but I’m finding it hard to keep up with everything. Sometimes I feel totally overwhelmed by what they expect. Just trying not to burn out!",
        },
        {
          platform: "Reddit",
          content:
            "Joined the Cagrilintide trial hoping to shed some pounds but I’m honestly feeling a bit frustrated. The side effects are more than I thought and it’s hard to stay positive when I’m not seeing results. Thinking about bailing.",
        },
        {
          platform: "Reddit",
          content:
            "I’m really happy about my weight loss on Efpeglenatide but I’ve been super tired a lot. It’s tough to stay active when I just wanna nap. Trying to balance everything without losing my mind.",
        },
        {
          platform: "Reddit",
          content:
            "Being part of the NNC9204-1177 trial has its highs and lows. The team is cool but I sometimes feel like just another number in the study. I wish there was a bit more personal touch—it’d make it feel more special.",
        },
        {
          platform: "Reddit",
          content:
            "I’m getting used to the Mounjaro trial but the lifestyle changes are way harder than I expected. The staff is really supportive but when I don’t see any progress it can be pretty discouraging.",
        },
        {
          platform: "Reddit",
          content:
            "Looking back on my time in the Cagrilintide trial I feel a mix of empowerment and frustration. Connecting with others has been awesome but the side effects are rough and make me wonder if this is the right choice for me.",
        },
      ]);
      setCommentsTransparency([
        {
          platform: "Reddit",
          content:
            "I just started the Mounjaro trial and I have to say the staff is super friendly. But I really wish they’d be more upfront about the diet. It feels super restrictive and knowing the reasoning behind it would help me stick with it.",
        },
        {
          platform: "Reddit",
          content:
            "Been in the Cagrilintide trial for a month now and honestly I’m kind of torn. The team is great about explaining side effects but man this nausea is brutal! I could use a little more clarity on what to expect going forward.",
        },
        {
          platform: "Reddit",
          content:
            "I’m a month into the Efpeglenatide trial and I’m really feeling the energy boost! But I wish they had warned me about the stomach issues beforehand. It’s frustrating to deal with stuff I wasn’t expecting.",
        },
        {
          platform: "Reddit",
          content:
            "Thinking about joining the NNC9204-1177 trial but I’m pretty anxious about side effects. I’d feel way better if the team shared more about how they handle adverse reactions. Just want to know what I might be getting into.",
        },
        {
          platform: "Reddit",
          content:
            "The community vibe in my Mounjaro trial is awesome! But sometimes I feel overwhelmed with what they expect from me. If the team was a bit clearer about everything it would definitely take some pressure off.",
        },
        {
          platform: "Reddit",
          content:
            "I joined the Cagrilintide trial hoping to lose weight but I’m honestly frustrated. The staff is pretty honest about side effects but I wish they’d give me more info on how long it usually takes to see results. It’s hard to stay motivated!",
        },
        {
          platform: "Reddit",
          content:
            "I’m happy with my weight loss on Efpeglenatide but I’ve been feeling super drained lately. It would be great if the trial team could share how common this is just so I know I’m not the only one dealing with it.",
        },
        {
          platform: "Reddit",
          content:
            "Being part of the NNC9204-1177 trial has its ups and downs. The team is really nice but I sometimes feel like just another number. If they were more open about the process I think I’d feel a lot more connected.",
        },
        {
          platform: "Reddit",
          content:
            "Getting used to the Mounjaro trial is tougher than I thought! The lifestyle changes are intense. The staff is super supportive but if they explained why I need to make these changes it would help me stay on track.",
        },
        {
          platform: "Reddit",
          content:
            "Reflecting on my time in the Cagrilintide trial I feel both empowered and confused. I’ve made some great connections but I wish I had a clearer idea of what’s next. A little transparency would really help!",
        },
      ]);
      setCommentsTrialSupport([
        {
          platform: "Reddit",
          content:
            "So I just signed up for the Mounjaro trial and honestly I’m feeling a mix of excitement and nerves. I’ve read so many positive stories about it helping with weight loss but I can’t shake the worry about potential side effects. Anyone else been through this? I’d love to hear what your experiences were like!",
        },
        {
          platform: "Reddit",
          content:
            "I’ve been thinking about joining a Cagrilintide trial but I keep hearing mixed reviews about the support. I really want to feel like I have someone to talk to if I have questions or concerns. It’s a big step for me and I’d love to hear if anyone has had a good experience or any tips on how to navigate it.",
        },
        {
          platform: "Reddit",
          content:
            "Right now I’m in an Efpeglenatide trial and I have to say the support has blown me away! The staff checks in with me regularly and they really seem to care about how I’m feeling throughout the process. It’s nice to know I’m not just another participant; they remember my name and my story. Has anyone else felt this level of care?",
        },
        {
          platform: "Reddit",
          content:
            "I just wrapped up my time in the NNC9204-1177 trial and I have some mixed feelings. At the beginning the support was fantastic—so many check-ins and encouragement. But as time went on it felt like the focus shifted more to data collection than to us participants. I found myself feeling a bit lost toward the end. Did anyone else experience this?",
        },
        {
          platform: "Reddit",
          content:
            "I’m super hopeful about the Mounjaro trial! I’ve seen a ton of positive stories and testimonials which really gives me hope. I’m curious though—did anyone face side effects? I want to prepare myself and have a plan in place if I do. Any advice would be super helpful!",
        },
        {
          platform: "Reddit",
          content:
            "I’m really on the fence about the Cagrilintide trial. A friend of mine did it and said the support was great at first but then it really dropped off. That worries me because I want to feel supported throughout the entire process. If anyone has insights or advice on how to make the most of it I’d love to hear!",
        },
        {
          platform: "Reddit",
          content:
            "I just joined an Efpeglenatide trial and wow I’m genuinely impressed! The staff is so attentive and seems to really care about our thoughts and feelings. They even asked for our feedback during the trial which makes me feel valued. It’s nice to be part of something where I feel heard. Anyone else have a similar experience?",
        },
        {
          platform: "Reddit",
          content:
            "Completing the NNC9204-1177 trial was quite an eye-opener for me. At first the support was amazing—everyone was super helpful and encouraging. But as we got deeper into the trial I felt like they started to focus more on the numbers and data than on us participants. I found myself wishing for that initial support again. Did anyone else feel that way?",
        },
        {
          platform: "Reddit",
          content:
            "Has anyone else noticed how supportive the staff is in the Mounjaro trial? I’ve really appreciated all the check-ins and the personal touch they bring. It feels like they’re genuinely invested in our progress and that makes such a difference. I’m curious if others have had similar experiences.",
        },
        {
          platform: "Reddit",
          content:
            "I’m a bit hesitant about Cagrilintide. I’ve heard such mixed things about the support and I really don’t want to feel lost if I have questions during the trial. It’s a big step for me and I want to make sure I have someone to rely on throughout the process. Any tips from those who’ve been through it would be greatly appreciated!",
        },
      ]);
      setPcsDiabetesWeightloss([
        { name: "Mounjaro", value: "2170", value2: "930" },
        { name: "Cagrilintide", value: "1471", value2: "630" },
        { name: "Efpeglenatide", value: "631", value2: "270" },
        { name: "NNC9204-1177", value: "629", value2: "269" },
      ]);
      setGraphPcsDiabetes([
        { name: "Zynquista", value: "497", value2: "253" },
        { name: "Tzield", value: "421", value2: "201" },
        { name: "ORM-D0801", value: "349", value2: "199" },
        { name: "Lyumjev", value: "201", value2: "101" },
        { name: "Ilaris", value: "101", value2: "31" },
      ]);
      setGraphPcsGliptins([
        {
          name: "Pegylated Exendin-4",
          value: "101",
          value2: "31",
        },
      ]);
      setTransparencyDiabetesWeightloss([
        { name: "Mounjaro", value: "799", value2: "501" },
        { name: "Efpeglenatide", value: "349", value2: "151" },
        { name: "Cagrilintide", value: "251", value2: "101" },
        { name: "NNC9204-1177", value: "51", value2: "17" },
      ]);
      setGraphTransparencyDiabetes([
        { name: "Zynquista", value: "601", value2: "301" },
        { name: "Tzield", value: "501", value2: "201" },
        { name: "ORM-D0801", value: "401", value2: "151" },
        { name: "Lyumjev", value: "151", value2: "37" },
        { name: "Ilaris", value: "71", value2: "13" },
      ]);
      setGraphTransparencyGliptins([
        { name: "Pegylated Exendin-4", value: "786", value2: "132" },
      ]);
      setTrialSupportDiabetesWeightloss([
        { name: "Mounjaro", value: "2170", value2: "930" },
        { name: "Efpeglenatide", value: "631", value2: "270" },
        { name: "Cagrilintide", value: "1471", value2: "630" },
        { name: "NNC9204-1177", value: "629", value2: "269" },
      ]);
      setGraphTrialSupportDiabetes([
        { name: "Zynquista", value: "497", value2: "253" },
        { name: "Tzield", value: "421", value2: "201" },
        { name: "ORM-D0801", value: "349", value2: "199" },
        { name: "Lyumjev", value: "201", value2: "101" },
        { name: "Ilaris", value: "101", value2: "31" },
      ]);
      setGraphTrialSupportGliptins([
        { name: "Pegylated Exendin-4", value: "101", value2: "31" },
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
      setCommentsPcs([
        {
          platform: "Reddit",
          content:
            'Communication during clinical trials is key. I was in a study where updates were sparse, and it left me feeling uncertain about what was happening with my treatment."',
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "I really appreciate when trials include a patient advisory board. It’s crucial to have patient voices in the design and implementation of research focused on RA.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "The informed consent process in clinical trials for RA needs to be clearer. I felt overwhelmed by the jargon and would’ve liked a simpler explanation of what I was getting into.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "Seeing trial results that focus on quality of life is so important for RA patients. It’s not just about reducing inflammation; it’s about living better.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "I’ve noticed that some clinical trials don’t address the long-term effects of treatment. It’s important for us to know what we might be facing years down the road.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "The clinical trial I participated in offered great support, but I still felt isolated. It would be beneficial if there were more community-building activities for participants.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            'I appreciate that clinical trials for Rheumatoid Arthritis are starting to include more diverse populations. It’s important for us patients to see how new treatments affect different groups."',
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "I wish more clinical trials focused on real-world outcomes, like how a drug affects our daily lives, not just lab results. It would help us understand the actual impact on our Rheumatoid Arthritis.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "Participating in a clinical trial for Rheumatoid Arthritis helped me feel more in control of my condition. It was empowering to contribute to research, even if I didn’t experience a positive outcome.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "The trial I joined for Rheumatoid Arthritis was very patient-centric. They prioritized our feedback and made adjustments based on our experiences. It felt great to know our opinions mattered.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
        {
          platform: "Reddit",
          content:
            "Communication during clinical trials for Rheumatoid Arthritis is key. I was in a study where updates were sparse, and it left me feeling uncertain about what was happening with my treatment.",
          User: "User",
          Bucket: "Patient centricity sentiment",
        },
      ]);
      setCommentsTransparency([
        {
          platform: "Reddit",
          content:
            "I wish clinical trials for Rheumatoid Arthritis were more transparent about potential side effects. I went in thinking it would be a miracle cure, but I ended up facing some tough challenges.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "It’s frustrating how little information is often shared about the progress of clinical trials for Rheumatoid Arthritis. I want to know how things are going and what to expect.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "The lack of transparency in clinical trial results for Rheumatoid Arthritis is concerning. I’ve seen too many studies where they don’t report negative outcomes or adverse effects.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate when trial sponsors are open about their findings, good or bad. Transparency in clinical trials for Rheumatoid Arthritis helps build trust in the research process.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "I joined a Rheumatoid Arthritis trial, but they didn’t keep us updated on the results. It felt like we were in the dark, and I’d like to see better communication in the future.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "Transparency around the eligibility criteria for Rheumatoid Arthritis clinical trials is crucial. Many people get discouraged when they realize they don’t meet the requirements after investing time.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "I wish there were clearer guidelines on how data is shared after a clinical trial for Rheumatoid Arthritis ends. Patients deserve to know what happened and how it impacts future treatments.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "The informed consent process in Rheumatoid Arthritis trials needs more transparency. I felt like I was signing away my rights without fully understanding what I was agreeing to.",
          User: "User",
          Bucket: "Transparency",
        },
        {
          platform: "Reddit",
          content:
            "Seeing detailed results from previous trials for Rheumatoid Arthritis would help patients make informed decisions. Transparency should be a priority in this field.",
          User: "User",
          Bucket: "Transparency",
        },
      ]);
      setCommentsTrialSupport([
        {
          platform: "Reddit",
          content:
            "I participated in a clinical trial for Rheumatoid Arthritis, and the support from the research team was phenomenal. They were always available to answer questions and provide reassurance.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The trial support I received for my Rheumatoid Arthritis study made all the difference. They provided educational resources that helped me understand the process better.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I felt very supported throughout my Rheumatoid Arthritis clinical trial. The nurses were attentive and made sure I was comfortable during each visit.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The communication from the trial coordinators was excellent. They kept me updated on everything happening in my Rheumatoid Arthritis study, which eased a lot of my concerns.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I joined a clinical trial for Rheumatoid Arthritis, but the lack of support was disappointing. I wish the team had checked in more frequently to see how I was doing.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The trial support I received helped me navigate the ups and downs of my treatment. They really took the time to listen to my concerns about my Rheumatoid Arthritis.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "It would be great if all clinical trials for Rheumatoid Arthritis offered patient support groups. It would help participants connect and share experiences.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The staff during my Rheumatoid Arthritis trial were not only supportive but also very informative. They made sure I understood the potential risks and benefits.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I think having a dedicated support contact for clinical trials would be beneficial. Sometimes, I felt lost trying to figure out who to reach out to with my questions about the Rheumatoid Arthritis study.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I appreciated the psychological support offered during my Rheumatoid Arthritis clinical trial. It really helped to have someone to talk to about my feelings during the process.",
          User: "User",
          Bucket: "Trial support",
        },
      ]);
      setPcsDiabetesWeightloss([
        { name: "Humira", value: "1890", value2: "850" },
        { name: "Enbrel", value: "1350", value2: "600" },
        { name: "Remicade", value: "610", value2: "270" },
        { name: "Orencia", value: "605", value2: "265" },
        { name: "Actemra", value: "320", value2: "150" },
        { name: "Xeljanz", value: "275", value2: "120" },
        { name: "Rinvoq", value: "210", value2: "90" },
        { name: "Cimzia", value: "165", value2: "70" },
        { name: "Simponi", value: "130", value2: "55" },
        { name: "Simponi Aria", value: "100", value2: "45" },
      ]);

      setGraphPcsDiabetes([
        { name: "Humira", value: "582", value2: "292" },
        { name: "Enbrel", value: "476", value2: "235" },
        { name: "Remicade", value: "332", value2: "169" },
        { name: "Orencia", value: "253", value2: "127" },
        { name: "Actemra", value: "191", value2: "95" },
        { name: "Xeljanz", value: "152", value2: "73" },
        { name: "Rinvoq", value: "124", value2: "62" },
        { name: "Cimzia", value: "98", value2: "48" },
        { name: "Simponi", value: "78", value2: "39" },
        { name: "Simponi Aria", value: "59", value2: "30" },
      ]);
      setGraphPcsGliptins([
        { name: "Kineret", value: "1920", value2: "870" },
        { name: "Arava", value: "1380", value2: "620" },
        { name: "Plaquenil", value: "620", value2: "280" },
        { name: "Imuran", value: "615", value2: "275" },
        { name: "Trexall", value: "330", value2: "160" },
        { name: "Otrexup", value: "285", value2: "130" },
        { name: "Rasuvo", value: "220", value2: "95" },
        { name: "Kevzara", value: "170", value2: "75" },
        { name: "Stelara", value: "135", value2: "60" },
        { name: "Tremfya", value: "105", value2: "50" },
      ]);

      setTransparencyDiabetesWeightloss([
        { name: "Humira", value: "1820", value2: "860" },
        { name: "Enbrel", value: "1400", value2: "630" },
        { name: "Remicade", value: "620", value2: "290" },
        { name: "Orencia", value: "610", value2: "280" },
        { name: "Actemra", value: "330", value2: "150" },
        { name: "Xeljanz", value: "290", value2: "120" },
        { name: "Rinvoq", value: "220", value2: "100" },
        { name: "Cimzia", value: "170", value2: "70" },
        { name: "Simponi", value: "130", value2: "55" },
        { name: "Simponi Aria", value: "100", value2: "45" },
      ]);
      setGraphTransparencyDiabetes([
        { name: "Humira", value: "1890", value2: "880" },
        { name: "Enbrel", value: "1460", value2: "640" },
        { name: "Remicade", value: "630", value2: "300" },
        { name: "Orencia", value: "620", value2: "270" },
        { name: "Actemra", value: "340", value2: "160" },
        { name: "Xeljanz", value: "295", value2: "130" },
        { name: "Rinvoq", value: "225", value2: "110" },
        { name: "Cimzia", value: "180", value2: "80" },
        { name: "Simponi", value: "135", value2: "60" },
        { name: "Simponi Aria", value: "110", value2: "50" },
      ]);
      setGraphTransparencyGliptins([
        { name: "Kineret", value: "2000", value2: "850" },
        { name: "Arava", value: "1400", value2: "620" },
        { name: "Plaquenil", value: "620", value2: "290" },
        { name: "Imuran", value: "610", value2: "270" },
        { name: "Trexall", value: "340", value2: "160" },
        { name: "Otrexup", value: "290", value2: "130" },
        { name: "Rasuvo", value: "230", value2: "100" },
        { name: "Kevzara", value: "175", value2: "80" },
        { name: "Stelara", value: "140", value2: "70" },
        { name: "Tremfya", value: "110", value2: "55" },
      ]);
      setTrialSupportDiabetesWeightloss([
        { name: "Humira", value: "2100", value2: "900" },
        { name: "Enbrel", value: "1550", value2: "700" },
        { name: "Remicade", value: "650", value2: "310" },
        { name: "Orencia", value: "630", value2: "280" },
        { name: "Actemra", value: "350", value2: "170" },
        { name: "Xeljanz", value: "300", value2: "140" },
        { name: "Rinvoq", value: "240", value2: "110" },
        { name: "Cimzia", value: "190", value2: "90" },
        { name: "Simponi", value: "145", value2: "65" },
        { name: "Simponi Aria", value: "115", value2: "55" },
      ]);
      setGraphTrialSupportDiabetes([
        { name: "Humira", value: "2100", value2: "900" },
        { name: "Enbrel", value: "1550", value2: "700" },
        { name: "Remicade", value: "650", value2: "310" },
        { name: "Orencia", value: "630", value2: "280" },
        { name: "Actemra", value: "350", value2: "170" },
        { name: "Xeljanz", value: "300", value2: "140" },
        { name: "Rinvoq", value: "240", value2: "110" },
        { name: "Cimzia", value: "190", value2: "90" },
        { name: "Simponi", value: "145", value2: "65" },
        { name: "Simponi Aria", value: "115", value2: "55" },
      ]);

      setGraphTrialSupportGliptins([
        { name: "Kineret", value: "2000", value2: "850" },
        { name: "Arava", value: "1400", value2: "620" },
        { name: "Plaquenil", value: "620", value2: "290" },
        { name: "Imuran", value: "610", value2: "270" },
        { name: "Trexall", value: "340", value2: "160" },
        { name: "Otrexup", value: "290", value2: "130" },
        { name: "Rasuvo", value: "230", value2: "100" },
        { name: "Kevzara", value: "175", value2: "80" },
        { name: "Stelara", value: "140", value2: "70" },
        { name: "Tremfya", value: "110", value2: "55" },
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
      setCommentsPcs([
        {
          platform: "Reddit",
          content:
            "Participating in a clinical trial for apremilast was an eye-opening experience. The team genuinely cared about my feedback, making me feel valued as a patient.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "I was excited to join a trial for etanercept, but I felt like my concerns were often overlooked. They need to prioritize patient experiences more!",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "The trial for adalimumab had fantastic patient support. They provided resources and had regular check-ins, which made me feel like my well-being was a priority.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "I appreciated how the clinical trial for ustekinumab included patient input in the study design. It felt like they truly wanted to understand our experiences.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "I felt lost in the trial for secukinumab. While the researchers were knowledgeable, I didn’t feel like my individual needs were being considered. More focus on patient centricity would help.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "My experience in the trial for tildrakizumab was mostly positive. They took the time to explain everything, and I felt empowered to share my thoughts on the treatment.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "I joined a trial for guselkumab, and I was impressed with how they listened to patient feedback. It’s refreshing to see researchers value our experiences.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "While I was hopeful about the trial for brodalumab, I found the communication lacking. There were times I felt out of the loop, and more transparency would have helped.",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "The trial for rinvoq was great in terms of support, but I wish they had involved patients more in the decision-making processes. Our input matters!",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
        {
          platform: "Reddit",
          content:
            "I had mixed feelings about the trial for tofacitinib. While they had good resources, I often felt like a number rather than a valued participant. Patient centricity needs improvement!",
          User: "User",
          Bucket: "Patient centricity sentiment",
          "": "",
        },
      ]);
      setCommentsTransparency([
        {
          platform: "Reddit",
          content:
            "I appreciated the transparency during my psoriatic arthritis trial. The research team shared results and updates regularly, which made me feel involved in the process.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "The psoriatic arthritis trial lacked transparency. I often had to ask for updates, and I felt left in the dark about important information regarding my treatment.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "The communication about the psoriatic arthritis trial was great. They were upfront about the potential risks and benefits, which helped me make informed decisions.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "I wish the clinical trial for psoriatic arthritis had been more transparent. I felt like some important details were glossed over during the initial meetings.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "The transparency regarding the psoriatic arthritis trial was commendable. They shared data openly, which made me trust the research team and feel secure in my participation.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "I found the psoriatic arthritis trial to be very clear about its procedures and expectations. It was reassuring to know what to expect throughout the study.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "While I enjoyed participating in the psoriatic arthritis trial, I wanted more transparency about how my feedback would be used in the research. I needed clarity on its impact.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "The psoriatic arthritis trial was frustrating due to the lack of transparency. I had so many questions, but it often felt like I wasn’t getting the answers I needed.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "I appreciated how open the research team was about the psoriatic arthritis study's progress. It made me feel like a part of something important.",
          User: "User",
          Bucket: "Transprency",
        },
        {
          platform: "Reddit",
          content:
            "The lack of transparency in the psoriatic arthritis trial was disappointing. I often felt uncertain about what was happening and wished they had communicated more clearly.",
          User: "User",
          Bucket: "Transprency",
        },
      ]);
      setCommentsTrialSupport([
        {
          platform: "Reddit",
          content:
            "The support during my psoriatic arthritis trial was exceptional. The research staff were always available to answer questions and provide assistance whenever I needed it.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I felt that the support in the psoriatic arthritis trial was lacking. There were times when I needed help, and it was hard to reach someone who could assist me.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I appreciated the continuous support throughout the psoriatic arthritis trial. The regular check-ins made me feel valued and reassured about my participation.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "While I loved being part of the psoriatic arthritis trial, the support could have been better. I had some concerns that didn’t get addressed promptly.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The support team for the psoriatic arthritis trial was fantastic! They really took the time to ensure I understood everything and felt comfortable.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I had a mixed experience with support during my psoriatic arthritis trial. While some staff were great, others seemed overwhelmed and less attentive.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "Participating in the psoriatic arthritis trial was a journey, and the support team made it easier. They guided me through every step and were very responsive.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "I was disappointed with the support during the psoriatic arthritis trial. I felt like I was navigating everything alone, which made it a stressful experience.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "The research team provided excellent support during my psoriatic arthritis trial. They were compassionate and made sure I felt heard and supported throughout.",
          User: "User",
          Bucket: "Trial support",
        },
        {
          platform: "Reddit",
          content:
            "Support during the psoriatic arthritis trial was hit or miss. Some days I felt well taken care of, while other days I struggled to get the assistance I needed.",
          User: "User",
          Bucket: "Trial support",
        },
      ]);
      setPcsDiabetesWeightloss([
        { name: "Humira", value: "1920", value2: "860" },
        { name: "Enbrel", value: "1400", value2: "620" },
        { name: "Remicade", value: "630", value2: "290" },
        { name: "Orencia", value: "620", value2: "275" },
        { name: "Actemra", value: "340", value2: "160" },
        { name: "Xeljanz", value: "300", value2: "140" },
        { name: "Rinvoq", value: "230", value2: "110" },
        { name: "Cimzia", value: "180", value2: "80" },
        { name: "Simponi", value: "140", value2: "65" },
        { name: "Simponi Aria", value: "110", value2: "55" },
      ]);
      setGraphPcsDiabetes([
        { name: "Humira", value: "580", value2: "300" },
        { name: "Enbrel", value: "470", value2: "240" },
        { name: "Remicade", value: "340", value2: "170" },
        { name: "Orencia", value: "260", value2: "130" },
        { name: "Actemra", value: "200", value2: "100" },
        { name: "Xeljanz", value: "150", value2: "70" },
        { name: "Rinvoq", value: "130", value2: "65" },
        { name: "Cimzia", value: "100", value2: "50" },
        { name: "Simponi", value: "80", value2: "40" },
        { name: "Simponi Aria", value: "60", value2: "35" },
      ]);
      setGraphPcsGliptins([
        { name: "Kineret", value: "1950", value2: "880" },
        { name: "Arava", value: "1400", value2: "630" },
        { name: "Plaquenil", value: "630", value2: "290" },
        { name: "Imuran", value: "620", value2: "270" },
        { name: "Trexall", value: "340", value2: "170" },
        { name: "Otrexup", value: "290", value2: "140" },
        { name: "Rasuvo", value: "230", value2: "100" },
        { name: "Kevzara", value: "175", value2: "80" },
        { name: "Stelara", value: "140", value2: "65" },
        { name: "Tremfya", value: "110", value2: "55" },
      ]);
      setTransparencyDiabetesWeightloss([
        { name: "Humira", value: "1850", value2: "870" },
        { name: "Enbrel", value: "1450", value2: "640" },
        { name: "Remicade", value: "630", value2: "300" },
        { name: "Orencia", value: "620", value2: "290" },
        { name: "Actemra", value: "340", value2: "160" },
        { name: "Xeljanz", value: "300", value2: "130" },
        { name: "Rinvoq", value: "230", value2: "110" },
        { name: "Cimzia", value: "180", value2: "75" },
        { name: "Simponi", value: "140", value2: "60" },
        { name: "Simponi Aria", value: "110", value2: "50" },
      ]);
      setGraphTransparencyDiabetes([
        { name: "Humira", value: "1920", value2: "890" },
        { name: "Enbrel", value: "1480", value2: "650" },
        { name: "Remicade", value: "640", value2: "310" },
        { name: "Orencia", value: "625", value2: "275" },
        { name: "Actemra", value: "350", value2: "165" },
        { name: "Xeljanz", value: "305", value2: "140" },
        { name: "Rinvoq", value: "230", value2: "115" },
        { name: "Cimzia", value: "185", value2: "85" },
        { name: "Simponi", value: "140", value2: "65" },
        { name: "Simponi Aria", value: "115", value2: "55" },
      ]);
      setGraphTransparencyGliptins([
        { name: "Kineret", value: "2100", value2: "900" },
        { name: "Arava", value: "1500", value2: "670" },
        { name: "Plaquenil", value: "650", value2: "310" },
        { name: "Imuran", value: "620", value2: "280" },
        { name: "Trexall", value: "360", value2: "170" },
        { name: "Otrexup", value: "300", value2: "140" },
        { name: "Rasuvo", value: "240", value2: "110" },
        { name: "Kevzara", value: "185", value2: "85" },
        { name: "Stelara", value: "150", value2: "75" },
        { name: "Tremfya", value: "120", value2: "60" },
      ]);

      setTrialSupportDiabetesWeightloss([
        { name: "Humira", value: "2200", value2: "950" },
        { name: "Enbrel", value: "1600", value2: "750" },
        { name: "Remicade", value: "670", value2: "320" },
        { name: "Orencia", value: "640", value2: "290" },
        { name: "Actemra", value: "360", value2: "180" },
        { name: "Xeljanz", value: "310", value2: "150" },
        { name: "Rinvoq", value: "250", value2: "120" },
        { name: "Cimzia", value: "200", value2: "100" },
        { name: "Simponi", value: "150", value2: "70" },
        { name: "Simponi Aria", value: "125", value2: "60" },
      ]);

      setGraphTrialSupportDiabetes([
        { name: "Humira", value: "2200", value2: "950" },
        { name: "Enbrel", value: "1600", value2: "750" },
        { name: "Remicade", value: "670", value2: "320" },
        { name: "Orencia", value: "640", value2: "290" },
        { name: "Actemra", value: "360", value2: "180" },
        { name: "Xeljanz", value: "310", value2: "150" },
        { name: "Rinvoq", value: "250", value2: "120" },
        { name: "Cimzia", value: "200", value2: "100" },
        { name: "Simponi", value: "150", value2: "70" },
        { name: "Simponi Aria", value: "125", value2: "60" },
      ]);

      setGraphTrialSupportGliptins([
        { name: "Kineret", value: "2100", value2: "900" },
        { name: "Arava", value: "1500", value2: "670" },
        { name: "Plaquenil", value: "650", value2: "310" },
        { name: "Imuran", value: "620", value2: "280" },
        { name: "Trexall", value: "360", value2: "170" },
        { name: "Otrexup", value: "300", value2: "140" },
        { name: "Rasuvo", value: "240", value2: "110" },
        { name: "Kevzara", value: "185", value2: "85" },
        { name: "Stelara", value: "150", value2: "75" },
        { name: "Tremfya", value: "120", value2: "60" },
      ]);

      setTitle1("ALL");
      setTitle2("Biological Agents (Biologics)");
      setTitle3("DMARDs");
    }
  };

  const [graphPcsDiabetesWeightloss, setPcsDiabetesWeightloss] = useState([
    { name: "Mounjaro", value: "2170", value2: "930" },
    { name: "Cagrilintide", value: "1471", value2: "630" },
    { name: "Efpeglenatide", value: "631", value2: "270" },
    { name: "NNC9204-1177", value: "629", value2: "269" },
  ]);

  const [graphPcsDiabetes, setGraphPcsDiabetes] = useState([
    { name: "Zynquista", value: "497", value2: "253" },
    { name: "Tzield", value: "421", value2: "201" },
    { name: "ORM-D0801", value: "349", value2: "199" },
    { name: "Lyumjev", value: "201", value2: "101" },
    { name: "Ilaris", value: "101", value2: "31" },
  ]);

  const [graphPcsGliptins, setGraphPcsGliptins] = useState([
    {
      name: "Pegylated Exendin-4",
      value: "101",
      value2: "31",
    },
  ]);

  const [
    graphTransparencyDiabetesWeightloss,
    setTransparencyDiabetesWeightloss,
  ] = useState([
    { name: "Mounjaro", value: "799", value2: "501" },
    { name: "Efpeglenatide", value: "349", value2: "151" },
    { name: "Cagrilintide", value: "251", value2: "101" },
    { name: "NNC9204-1177", value: "51", value2: "17" },
  ]);

  const [graphTransparencyDiabetes, setGraphTransparencyDiabetes] = useState([
    { name: "Zynquista", value: "601", value2: "301" },
    { name: "Tzield", value: "501", value2: "201" },
    { name: "ORM-D0801", value: "401", value2: "151" },
    { name: "Lyumjev", value: "151", value2: "37" },
    { name: "Ilaris", value: "71", value2: "13" },
  ]);

  const [graphTransparencyGliptins, setGraphTransparencyGliptins] = useState([
    { name: "Pegylated Exendin-4", value: "786", value2: "132" },
  ]);

  const [
    graphTrialSupportDiabetesWeightloss,
    setTrialSupportDiabetesWeightloss,
  ] = useState([
    { name: "Mounjaro", value: "2170", value2: "930" },
    { name: "Efpeglenatide", value: "631", value2: "270" },
    { name: "Cagrilintide", value: "1471", value2: "630" },
    { name: "NNC9204-1177", value: "629", value2: "269" },
  ]);

  const [graphTrialSupportDiabetes, setGraphTrialSupportDiabetes] = useState([
    { name: "Zynquista", value: "497", value2: "253" },
    { name: "Tzield", value: "421", value2: "201" },
    { name: "ORM-D0801", value: "349", value2: "199" },
    { name: "Lyumjev", value: "201", value2: "101" },
    { name: "Ilaris", value: "101", value2: "31" },
  ]);

  const [graphTrialSupportGliptins, setGraphTrialSupportGliptins] = useState([
    { name: "Pegylated Exendin-4", value: "101", value2: "31" },
  ]);

  return (
    <>
      <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
      <Container fluid>
        {/* <Container>
          <Row>
            Column for the first chart, taking 6 out of 12 grid columns
            <Col md={12}>
              <TrialStack />
            </Col>
          </Row>
        </Container> */}
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData10} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData11} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData12} />
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
              <h6 className="chart-title m-3">Patient-Centricity-Sentiment</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphPcsDiabetesWeightloss}
                    title={title1}
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={graphPcsDiabetes} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={graphPcsGliptins} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsPcs} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Transparency</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTransparencyDiabetesWeightloss}
                    title={title1}
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTransparencyDiabetes}
                    title={title2}
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTransparencyGliptins}
                    title={title3}
                  />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsTransparency} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Trial Support</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTrialSupportDiabetesWeightloss}
                    title={title1}
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTrialSupportDiabetes}
                    title={title2}
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart
                    data={graphTrialSupportGliptins}
                    title={title3}
                  />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsTrialSupport} />
          </Card>
        </Container>
      </Container>
    </>
  );
}
// ---------------- // Actual Code // ---------------- //
// import React from "react";
// import { useState } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "../css/content.css";
// import { DoubleBarChart1, DoubleBarChart2, DoubleBarChart3 } from "../charts/DoubleBarChart";
// import jsonData from "../demo/conversion.json"; // Import your JSON data file
// import SegmentPart from "../components/SegmentPart";
// import TopBrands from "../components/TopBrands";
// import CommentSection from "../components/CommentSection";
// import { Header } from "../components/Header";

// // Function to filter data by category
// const filterDataByCategory = (category) => {
//   return jsonData.filter((item) => item.Category === category);
// };

// export default function TrialPage() {

//    // Initialize kpiData with useState
//    const [kpiData, setKpiData] = useState([
//     { title: "TOTAL FORUMS", number: 20 },
//     { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//     { title: "TOTAL COMMENTS", number: "11,000,000" },
//     { title: "AVG ENGAGEMENT", number: "8/thread" },
//   ]);

//   // Handler for the dropdown change event
//   const handleDiseaseChange = (event) => {
//     const selectedDisease = event.target.value;
//     console.log("Selected Disease:", selectedDisease);

//     // Update kpiData based on the selected disease
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
//       // Reset or handle default case
//       setKpiData([
//         { title: "TOTAL FORUMS", number: 20 },
//         { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
//         { title: "TOTAL COMMENTS", number: "11,000,000" },
//         { title: "AVG ENGAGEMENT", number: "8/thread" },
//       ]);
//     }
//   };

//   // Filter data for each category
//   const websiteData = filterDataByCategory("Website");

//   return (
//     <>
//     <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
//       <Container>

//         <Container className="mt-2 p-3">
//           <Row>
//             <Col lg={4} style={{padding:"inherit"}} className="h-100">
//               <SegmentPart/>
//             </Col>

//             <Col lg={8}>
//              <TopBrands/>
//             </Col>
//           </Row>
//         </Container>
//         {/* Other sections */}

//         <Container className="mt-2 p-3">
//           <Card>
//             <Row>
//               <h6 className="chart-title m-3">Website</h6>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart1 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart2 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart3 data={websiteData} />
//                 </Card>
//               </Col>
//             </Row>
//             <CommentSection/>
//           </Card>
//         </Container>
//         <Container className="mt-2 p-3">
//           <Card>
//             <Row>
//               <h6 className="chart-title m-3">Website</h6>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart1 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart2 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart3 data={websiteData} />
//                 </Card>
//               </Col>
//             </Row>
//             <CommentSection/>
//           </Card>
//         </Container>
//         <Container className="mt-2 p-3">
//           <Card>
//             <Row>
//               <h6 className="chart-title m-3">Website</h6>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart1 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart2 data={websiteData} />
//                 </Card>
//               </Col>
//               <Col lg={4}>
//                 <Card className="p-3 m-2">
//                   <DoubleBarChart3 data={websiteData} />
//                 </Card>
//               </Col>
//             </Row>

//           <CommentSection/>
//           </Card>
//         </Container>
//         {/* Comments Section */}
//         {/* <DynamicCommentSection/> */}
//         {/* <CommentsSection/> */}
//       </Container>
//     </>
//   );
// }
