import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/content.css";
import { DoubleBarChart } from "../charts/DoubleBarChart";
import jsonData from "../demo/conversion.json"; // Import your JSON data file
import { SegmentPart } from "../components/SegmentPart";
import { TopBrands } from "../components/TopBrands";
import { CommentSection } from "../components/CommentSection";
import { Header } from "../components/Header";
import ContentStack from "../charts/ContentStack";
import ValuesChart from "../charts/ValuesChart";
import TrialStackChart from "../charts/TrialStackChart";
import { chartData1, chartData2, chartData3 } from "../static/data";
// Function to filter data by category
const filterDataByCategory = (category) => {
  return jsonData.filter((item) => item.Category === category);
};

export default function ContentPage() {
  // State for selected disease and KPI data
  const [selectedDisease, setSelectedDisease] = useState("");
  const [kpiData, setKpiData] = useState([
    { title: "TOTAL FORUMS", number: 20 },
    { title: "TOTAL DISCUSSIONS", number: "1,20,000" },
    { title: "TOTAL COMMENTS", number: "11,000,000" },
    { title: "AVG ENGAGEMENT", number: "8/thread" },
  ]);
  const [SegmentPartData, setSegmentPartData] = useState([
    {
      name: "Website",
    },
    {
      name: "TV ads",
    },
    {
      name: "Brochure",
    },
    {
      name: "Verbal communication",
    },
  ]);
  const [TopDrug, setTopDrug] = useState([
    {
      name: "Ozempic",
      percentage: "1.12%",
    },
    {
      name: "Januvia",
      percentage: "0.92%",
    },
    {
      name: "Jardiance",
      percentage: "0.85%",
    },
    {
      name: "Victoza",
      percentage: "0.75%",
    },
    {
      name: "Glucophage",
      percentage: "0.66%",
    },
    {
      name: "Trulicity",
      percentage: "0.6%",
    },
    {
      name: "Wegovy",
      percentage: "0.44%",
    },
    {
      name: "Saxenda",
      percentage: "0.37%",
    },
    {
      name: "Fortamet",
      percentage: "0.33%",
    },
    {
      name: "Mounjaro",
      percentage: "0.29%",
    },
    {
      name: "Invokana",
      percentage: "0.27%",
    },
    {
      name: "Byetta",
      percentage: "0.25%",
    },
    {
      name: "Farxiga",
      percentage: "0.21%",
    },
    {
      name: "Levemir",
      percentage: "0.19%",
    },
    {
      name: "Janumet",
      percentage: "0.17%",
    },
    {
      name: "Onglyza",
      percentage: "0.15%",
    },
    {
      name: "Humalog",
      percentage: "0.12%",
    },
    {
      name: "Novolog",
      percentage: "0.1%",
    },
    {
      name: "Basaglar",
      percentage: "0.06%",
    },
    {
      name: "Fiasp",
      percentage: "0.04%",
    },
    {
      name: "Aspart",
      percentage: "0.03%",
    },
    {
      name: "Apidra",
      percentage: "0.03%",
    },
    {
      name: "Nesina",
      percentage: "0.02%",
    },
    {
      name: "Steglatro",
      percentage: "0.02%",
    },
    {
      name: "Evogliptin",
      percentage: "0.01%",
    },
    {
      name: "Omarigliptin",
      percentage: "0%",
    },
    {
      name: "Jentadueto",
      percentage: "0%",
    },
  ]);
  const [commentsWebsiteData, setCommentsWebsiteData] = useState([
    {
      platform: "Reddit",
      content:
        "Hey - I hope it goes well for you 😁 I'm a pharmacy tech on the West Coast and here are a few things to keep in mind:\nthere is a shortage of ozempic mounjaro saxenda - consistent supply may be a problem and require you bouncing between pharmacies to get it monthly\nsome insurances cover this for weight loss but most don't without a PA (prior authorization) from the doctor's office or a diagnosis of diabetes.\nit's hella expensive - I've had people lose their minds about how much it costs with insurance coverage! There are coupons available (definitely take the time to find them on the ozempic website) that will help with the copay with commercial insurance; coupons will not work with Medicare/Medicaid Tricare and state funded insurance.\nplease look up what a coverage gap AKA donut hole\nplease respect the pharmacy staff lol\nI say all this not to dissuade you! Just some info to keep in mind oftentimes these get overlooked by prescribers and leads to so many problems. I wish you all the best.",
    },
    {
      platform: "Reddit",
      content:
        "There’s a lot of buzz recently about Ozempic which is one of many semaglutide injection drugs that help people moderate their food intake and hunger levels. Some variations are meant just to treat type 2 diabetes like Ozempic. Other drugs like WeGovy are meant to treat obesity as well.\nWhat I take issue with is that a lot of commenters have stated that they see Ozempic as a “lose weight quick drug” and a cheat. I think this is simply the wrong way to look at the issue. Obesity is a medical issue that can be treated in many ways. For some people seeing a nutritionist and going to the gym is all that is needed but for many more this simply doesn’t work. I would argue that actually most Americans know generally what a good diet looks like. They may not have all the details but most people can tell you that more vegetables and less meat carbs and sugar will create a calorie deficit and help you lose weight. However food simply tastes really good any many people rely on it as a sort of emotional crutch. Many also lack the time energy and desire to cook healthy food for themselves. There are many who also simply have a naturally large appetite and need to eat more in order to feel full.\nWhat those people need is not a reminder to try “diet and exercise” they need medical help. Semaglutide injections seem to have low risk of serious side effects and can help those people eat less and not feel hungry. All this moralizing about who “deserves” help and who should just suck it up and go to the gym is proving to be detrimental to overall health.\nAlso I’m aware that there is currently a shortage of Semaglutide injections right now but lets set that aside and assume that can be addressed with a more robust supply chain.",
    },
    {
      platform: "Reddit",
      content:
        "Due to a medical condition I need to take metformin. So I wanted to know where I can buy it from? I've searched in some apotheek websites and haven't found it. Is it sold in other kind of stores? Usually how much does it cost? Also I'm an expat and have a medical prescription from my doctor back at home. Could I use this prescription to buy my metformin here in the Netherlands or would I need to go to a GP to get a new one? And if I need to go to a GP would they continue with my doctor's diagnosis and treatment or would they need to reconfirm my situation/do tests? If so how much should I expect to pay for blood tests GP appointments etc? How would that work with the health insurance? Should I tell the insurance my situation to see if they cover it or not? Is metformin something they normally cover? I know they're a lot of questions but I'm really lost about this and any guidance would be of great help.",
    },
    {
      platform: "Reddit",
      content:
        "Hi been lurking for a month diagnosed in Jan '23.\nMy insurance is crap so hence the two PCPs I've dealt with so far have not been ideal. I am at a point where I don't know what I don't know and am fumbling about for answers as I figure out the questions.\nI can't find a practical answer on this question from anywhere PCPs or scientific websites about how to stop the near-constant diarrhea side effect from taking metformin. I'm trying my best but there just doesn't seem to be any math/logic to the input/output equation.\nAny help in being able to stop pooping uncontrollably would be most appreciated. Thank you.",
    },
    {
      platform: "Reddit",
      content:
        "I an on vacation and my Ozempic came in the mail.. it got sent back to the post office until I return. I didn't know it has to be Refrigerated. Is the pen wasted now?",
    },
    {
      platform: "Reddit",
      content:
        "How are you all getting semaglutide injections to be affordable for your patients? I’m struggling with this. And I’m not talking about when it’s covered by insurance for diabetics. I mean for non-diabetic patients whose BMIs 30+ and want it for weight loss? I honestly think it’s a good drug for this but insurance rarely covers it just for obesity. And out-of-pocket it’s usually over $1000/month for my patients pricing them out of it.\nI’ve heard of weight loss clinics getting it much cheaper for their patients... Is there a trick I don’t know about? Or a discount program? Any advice at all is appreciated.",
    },
    {
      platform: "Reddit",
      content:
        "I had asked him 3 months ago and he stated he didn’t want to go that route just yet because he wanted to try metformin first and he hadn’t prescribed it much and also knew Ozempic was hard to get covered by insurance plus he tries to advocate on people working on their diet for weight loss first. Well 3 months passed and my A1C went from 7.3 to 7.2 not too bad he said but I told him I had a really bad time remembering to take the metformin with every meal and probably only took like 60% of my prescription. I asked again about Ozempic and stated I would look into compounding pharmacy’s to pay out of pocket I just wanted to see if he would be ok with prescribing it and looking over my treatment with it as I really wanted to lower my A1C to a non diabetic number and wanted ti work on my weight loss. To my surprise he said we could try it and that he actually had samples for me to start. I was thinking it was going to be a single dose but he opened his fridge and gave me a 3 month supply. He said he forgets he has them and has a bunch. Excited to start this journey. Now to save up for the 3 months after this.",
    },
    {
      platform: "Reddit",
      content:
        "I want to carry ozempec from India to USA. How long can unopened ozempec be left refrigerated?",
    },
    {
      platform: "Reddit",
      content:
        "Last night I did my first injection of 0.25% into my thigh. No marks from the injection site this morning. I seem to be functioning normally and so far no sign of side effects. I am at 99.4 kilos and a BMI of 29.7 or body fat of 29.3. My BP is normal this morning.\nI live in Portugal so the instructions were in Portuguese. I did my best to translate but after watching a couple of YouTube videos this morning I see I missed a few fine points but it seems I injected successfully. My learning is to watch the videos and go to the official Ozempic website for clear directions.\nWhen I went to the pharmacy I bought their only box left so I will need to plan ahead for my next purchase given the demand. As you can see I have an opportunity to bring down my body fat and improve my cholesterol levels.",
    },
    {
      platform: "Reddit",
      content:
        "Is anyone else having trouble using their Ozempic discount card? Apparently there was a nationwide cyberattack & pharmacies have been unable to process the discount resulting in ridiculous prices for the medication. If you're having issues you can give Nordisk (Ozempic manufacturer) a call at 1-800-727-6500. They can provide you with new BIN & PCN numbers to give to the pharmacist so they can process your discount. When you call have your discount card handy as they'll ask you for your group number. Also get comfy when you call because you'll likely be on hold for awhile. Hope this helps someone. I know there are folks who can't afford this medication without that discount! ☹",
    },
  ]);
  const [commentsAds, setCommentsAds] = useState([
    {
      platform: "Reddit",
      content:
        "I'm home sick & was surprised to open HBO Max & be met by Oprah's hour-long Ozempic commercial (that's all it really is in my opinion). I am incredibly interested in hearing all of your thoughts and emotions criticisms and analysis. Obviously I would love to hear Aubrey & Mike scream about it - but I assume that will take some time.",
    },
    {
      platform: "Reddit",
      content:
        "It’s out of control. I just got served an ad with a picture of someone injecting.\nEdit: I used to work in advertising and use ad blockers. Reddit is the only platform I see Ozempic ads in annoyingly interspersed throughout the feed.",
    },
    {
      platform: "Reddit",
      content:
        "Over the past month patients keep asking me for Ozempic by name saying that all the Hollywood stars use it. Most are not diabetic.\nAs far as I know Wegovy is the version of semaglutide approved for weight loss in non-diabetics not Ozempic so why are people asking for Ozempic specifically? I’m not on other social media so can someone tell me where are they seeing these ads?\nAnd if the GLP1 agonists are making this huge push for the weight loss market why are they not increasing supply to meet the demand? Now my diabetes patients are having trouble getting this medication.\nOn the plus side uncontrolled diabetics who used to be skittish about GLP-1 agonists because of needles are now really excited to start them.",
    },
    {
      platform: "Reddit",
      content:
        "It's bad enough when marketing uses a song for ads. Worse when they change the lyrics. But to have the singer and writer take his song and it destroy is for money for a drug is heartbreaking and frustrating. Maybe if he really needed the money but damn this really really bothers me. Anyone else?",
    },
    {
      platform: "Reddit",
      content:
        "Feels like I get an ozempic ad on every tenth Reddit post. It's all I get. I am recovering from an eating disorder and it's really triggering to constantly see ads for some weight loss drug. I'm not overweight and I'm not trying to lose weight so I'm not even sure why they are sending me these ads. I'm just so sick of it and I wish there was some way to tell those ads in particular to fuck off. Society's obsession with some quick fix to weight loss is really unhealthy and unrealistic as well.\nEdit: There IS a setting to disable this and other potentially triggering ads.\nProfile > account settings > scroll all the way to the bottom and you can turn off ads for dating alcohol gambling pregnancy weight loss religion and maybe some others?\nYippee",
    },
    {
      platform: "Reddit",
      content: "BIG EYE ROLL at this ad below an MP post on my Reddit feed.",
    },
    {
      platform: "Reddit",
      content: " get so many ads for this now on a daily.. so fucked up",
    },
    {
      platform: "Reddit",
      content:
        "My God. What on earth is it with these ads on YouTube Instagram and other social media platforms?\nIt seems that all of them have one goal in mind which is to make make AS MUCH noise as possible within at LEAST time as possible.\nThe music in the background of these ads is usually just screaming (the Lyft ad that often comes up before YouTube vids is a good example) or really loud music that makes my ears bleed.\nAnother good example is the Google Pixel ads.\nI almost always instinctively mute the volume before the ad plays because of the sheer level of noise it emanates.\nThen there’s the mobile game ads which I don’t even know how to describe. It’s like some half-assed character going around with bad graphics shooting stuff saying “oh yeah” and screaming or it’s some rage bait scenario in which people are having a normal conversation until somebody butts in with something like “it’s great you’re getting married but I have level 99 soldier in (Wtv game”",
    },
    {
      platform: "Reddit",
      content:
        "Just heard on “Marketplace” that the low-dose Wegovy shortage will be until 2024. Sigh.\nI’ll add a link to the interview as soon as they post it.\nThe Novo Nordisk site has changed its shortage language from “fall 2023” to “we anticipate that Wegovy® supply disruption will be ongoing.” So basically no end date.\nI hope Eli Lilly is scaling up Mounjaro production now so that I can gleefully watch them steal all of Novo Nordisk’s Wegovy customers as soon as Mounjaro gets the FDA green light for weight loss.",
    },
    {
      platform: "Reddit",
      content:
        "I can’t believe Jardiance could ever outdo itself. So. Enraging.",
    },
  ]);
  const [commentsBrochure, setCommentsBrochure] = useState([
    {
      platform: "Reddit",
      content:
        "Let me start by saying that there will be people that answer this and say ”Ozempic cannot cause low blood sugar unless your are taking another medication for diabetes”  That is absolute nonsense yes that’s what the ozempic brochure and information will tell you but don’t believe everything you read - it’s true for 99% of the people that is a true statement but for the 1% that have these occurrences it’s real.",
    },
    {
      platform: "Reddit",
      content:
        "Meaning im insulin dependent but with diet and exercise i can finagle my numbers that was as well. In my case its the small individual things that make a difference. Like figuring out what is definitely not good for you. Any information online or in the brochures are a general across the board type deal.",
    },
    {
      platform: "Reddit",
      content:
        "Just got the Trulicity brochure and it’s ridiculous how they sugarcoat everything. Barely any mention of side effects just pages of how 'convenient' it is. Like I need actual information not a sales pitch.",
    },
    {
      platform: "Reddit",
      content: "Anyone else find the Januvia brochure totally useless?",
    },
    {
      platform: "Reddit",
      content:
        "Ozempic brochure is such a joke. All they do is hype up the weight loss and 'easy dosing' but barely mention the side effects. I had to dig reddit to find anything useful",
    },
  ]);
  const [commentsVerbalCommunication, setCommentsVerbalCommunication] =
    useState([
      {
        platform: "Reddit",
        content:
          "I was with my doctor this morning who recommended I use Ozempic injections to help with weight loss. How many people have used it here? How did it feel and would you recommend it?",
      },
      {
        platform: "Reddit",
        content:
          "In the midst of all this Kendrick and Drake beef the word Ozempic is one of the many that really stood out to me. Apparently drake was taking it to lose weight or some shit. Silly Ol’ BBL Drizzy. Anyways I felt compelled to look it up bc I didn’t even know what ozempic was but from what I’ve read it can severely lower the amount of insulin we’d need to take on a daily basis as type 1 diabetics. Def something to look into if you’re struggling with costs of insulin.",
      },
      {
        platform: "Reddit",
        content:
          "I already take 1000mg of metformin twice a day. I am terrified of taking new meds. Is this a pretty good drug or should I be prepared for negative side effects?\nI should also add my blood sugar levels tested at 330 today.",
      },
      {
        platform: "Reddit",
        content:
          "I am taking just the Januvia after Metformin made my glucose numbers go up (WTH right?). Has anyone one else taken it solo - without any other meds? What were/are your results?",
      },
      {
        platform: "Reddit",
        content:
          "Hello I’m new to this subreddit. I’ve been dealing with type 2 for years. I used to take metformin and it sucked but it did help me lose weight. Though those pesky GI issues never went away while on it. I was eventually able to get off it and did good for years but this year my A1C has gotten pretty bad. Even after losing some weight cutting out junk and exercising my A1C went from 10.2 to just 10. I am so frustrated and discouraged especially because I was given three months by my doctor to get it under control this no diabetes meds and I worked hard and with little result. So because he knows I’m not good with Metformin he’s now prescribed Januvia. I’ve researched it and now terrified to take it but I know I have to. But all I can find is bad experiences of people who took it has anyone here taken it with good results? What was your experience like?",
      },
      {
        platform: "Reddit",
        content:
          "Just got prescribed Januvia. I'm already taking metformin but my sugar is still high. Wondering if Januvia will help get it under control.",
      },
      {
        platform: "Reddit",
        content:
          "Hi all! This goes for Saxenda and any other weight loss meds. I’m getting discouraged from how little weight I’ve lost on Victoza compared to others I’ve read about. Normally I’d give a medication more time to work (I’ve been on it almost 6 weeks) but most of what I’ve read is people losing the most weight within the first month or even the first 2 weeks. If you’ve tried Victoza please share how it worked/didn’t work for you. I’d love to know how long you took it your dose timeline and when and how much weight you lost. Also open to tips if any come to mind.\nI’m a 25 year old non-diabetic female at 5’4 and 280lbs. I lost about 200lbs naturally with diet and exercise and got down to 190lbs for the first time since I was a child. I hit a plateau and then the pandemic depression and emotional distress in moving back home brought me back up to 280lbs within one year. I decided to try a weight loss med to just get a little motivation back. Only Victoza was covered by insurance and able to be found.\nI’ve been on it for about 6 weeks now. I took 0.6 dose for 4 weeks and only lost 2lbs. I’ve now been on 1.2 dose for almost 2 weeks and while I haven’t weighed myself I notice very little difference. Meanwhile I’m eating healthily and much less in portion and have stopped emotionally eating entirely. I still work out but not as much — due to the side effects hitting me hard. Constant fluttery stomach and migraine heavy nausea lightheadedness and increasingly excessive fatigue. It’s been tolerable so far especially because it’s taken my appetite away and I’ve eaten so much less.\nSo to have lost nearly no weight is very disheartening. My insurance denied my request for Wegovy coverage which I’m debating on appealing. I really hoped Victoza would be effective. Has anyone had a similar experience with not losing much weight? Did it ever start working better? What’s your Victoza story? Thanks!",
      },
      {
        platform: "Reddit",
        content:
          "I have been a type 2 for a while (I’ll get serious then let life get in the way). But my endocrinologist started me on Jardience and Bydureon. I ended up being allergic to the Bydureon and got switched to Victoza. No issues with the meds until I recently had my gall bladder taken out. Now it seems like to food stays too long in my stomach and rots? I know I’m going to be sick when I start burping that rotten egg smell.\nThe endo doc told me to lower my dosage from 1.8ml to a 0.6ml until my body can tolerate it again. It’s been 2 mths since I had the gall bladder surgery and I though I would have “ leveled out” by now. My surgeon is no help since I’ve physically healed and not in any more pain. My doctor tells me to follow a low fat diet and give time to my body to adjust to the surgery.\nHas anyone else had or heard of this issue?",
      },
      {
        platform: "Reddit",
        content:
          "So I've been on Victoza for nearly 3 months and it's been working wonders on my blood sugar. I went to get my refill and my insurance won't pay for it it's nearly 1000 dollars pharmacist says the doc needs to call insurance. I call doctor's office nurse says they'll call.\nLater that day doc calls me back and says Yep got it approved should be ready for pickup. I go to the pharmacy and come to find out my doctor didn't bother calling insurance as I requested and just changed my prescription to Ozempic without telling me or discussing this new medication with me at all.\nSo fuck that doctor won't be going back there but I'm curious if anyone here has experience with making the switch over from Victoza and can tell me how it affected them? The pharmacist was very reassuring but I'm just really nervous about changing something that has been working so well.",
      },
    ]);
  // const [setData]
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
      setwebsiteData([
        { name: "Ozempic", value: 12, value2: 15 },
        { name: "Victoza", value: 10, value2: 12 },
        { name: "Trulicity", value: 8, value2: 10 },
        { name: "Wegovy", value: 7, value2: 9 },
        { name: "Saxenda", value: 6, value2: 7 },
        { name: "Mounjaro", value: 4, value2: 6 },
        { name: "Byetta", value: 3, value2: 4 },
      ]);
      setwebsiteData2([
        { name: "Jardiance", value: 13, value2: 15 },
        { name: "Glucophage", value: 9, value2: 13 },
        { name: "Fortamet", value: 6, value2: 10 },
        { name: "Invokana", value: 8, value2: 9 },
        { name: "Farxiga", value: 6, value2: 7 },
        { name: "Levemir", value: 5, value2: 6 },
        { name: "Humalog", value: 3, value2: 4 },
        { name: "Novolog", value: 2, value2: 4 },
        { name: "Basaglar", value: 3, value2: 3 },
        { name: "Fiasp", value: 2, value2: 3 },
      ]);
      setwebsiteData3([
        { name: "Januvia", value: 14, value2: 15 },
        { name: "Janumet", value: 10, value2: 12 },
        { name: "Onglyza", value: 6, value2: 10 },
        { name: "Nesina", value: 8, value2: 9 },
        { name: "Evogliptin", value: 6, value2: 7 },
      ]);
      setTvData([
        { name: "Ozempic", value: 12, value2: 17 }, // New
        { name: "Victoza", value: 10, value2: 14 }, // New
        { name: "Trulicity", value: 8, value2: 12 }, // New
        { name: "Wegovy", value: 7, value2: 9 }, // New
        { name: "Saxenda", value: 6, value2: 7 }, // New
        { name: "Mounjaro", value: 4, value2: 6 }, // New
        { name: "Byetta", value: 3, value2: 4 },
      ]);
      setTvData2([
        { name: "Jardiance", value: 10, value2: 16 },
        { name: "Glucophage", value: 12, value2: 14 },
        { name: "Fortamet", value: 6, value2: 10 },
        { name: "Invokana", value: 8, value2: 9 },
        { name: "Farxiga", value: 6, value2: 7 },
        { name: "Levemir", value: 4, value2: 6 },
        { name: "Humalog", value: 3, value2: 4 },
        { name: "Novolog", value: 2, value2: 4 },
        { name: "Basaglar", value: 1, value2: 3 },
        { name: "Fiasp", value: 2, value2: 3 },
      ]);
      setTvData3([
        { name: "Januvia", value: 11, value2: 15 }, // New
        { name: "Janumet", value: 7, value2: 12 }, // New
        { name: "Onglyza", value: 6, value2: 10 }, // New
        { name: "Nesina", value: 8, value2: 9 }, // New
        { name: "Evogliptin", value: 6, value2: 7 }, // New
      ]);
      setTopDrug([
        {
          name: "Ozempic",
          percentage: "1.12%",
        },
        {
          name: "Januvia",
          percentage: "0.92%",
        },
        {
          name: "Jardiance",
          percentage: "0.85%",
        },
        {
          name: "Victoza",
          percentage: "0.75%",
        },
        {
          name: "Glucophage",
          percentage: "0.66%",
        },
        {
          name: "Trulicity",
          percentage: "0.6%",
        },
        {
          name: "Wegovy",
          percentage: "0.44%",
        },
        {
          name: "Saxenda",
          percentage: "0.37%",
        },
        {
          name: "Fortamet",
          percentage: "0.33%",
        },
        {
          name: "Mounjaro",
          percentage: "0.29%",
        },
        {
          name: "Invokana",
          percentage: "0.27%",
        },
        {
          name: "Byetta",
          percentage: "0.25%",
        },
        {
          name: "Farxiga",
          percentage: "0.21%",
        },
        {
          name: "Levemir",
          percentage: "0.19%",
        },
        {
          name: "Janumet",
          percentage: "0.17%",
        },
        {
          name: "Onglyza",
          percentage: "0.15%",
        },
        {
          name: "Humalog",
          percentage: "0.12%",
        },
        {
          name: "Novolog",
          percentage: "0.1%",
        },
        {
          name: "Basaglar",
          percentage: "0.06%",
        },
        {
          name: "Fiasp",
          percentage: "0.04%",
        },
        {
          name: "Aspart",
          percentage: "0.03%",
        },
        {
          name: "Apidra",
          percentage: "0.03%",
        },
        {
          name: "Nesina",
          percentage: "0.02%",
        },
        {
          name: "Steglatro",
          percentage: "0.02%",
        },
        {
          name: "Evogliptin",
          percentage: "0.01%",
        },
        {
          name: "Omarigliptin",
          percentage: "0%",
        },
        {
          name: "Jentadueto",
          percentage: "0%",
        },
      ]);
      setCommentsWebsiteData([
        {
          platform: "Reddit",
          content:
            "Hey - I hope it goes well for you 😁 I'm a pharmacy tech on the West Coast and here are a few things to keep in mind:\nthere is a shortage of ozempic mounjaro saxenda - consistent supply may be a problem and require you bouncing between pharmacies to get it monthly\nsome insurances cover this for weight loss but most don't without a PA (prior authorization) from the doctor's office or a diagnosis of diabetes.\nit's hella expensive - I've had people lose their minds about how much it costs with insurance coverage! There are coupons available (definitely take the time to find them on the ozempic website) that will help with the copay with commercial insurance; coupons will not work with Medicare/Medicaid Tricare and state funded insurance.\nplease look up what a coverage gap AKA donut hole\nplease respect the pharmacy staff lol\nI say all this not to dissuade you! Just some info to keep in mind oftentimes these get overlooked by prescribers and leads to so many problems. I wish you all the best.",
        },
        {
          platform: "Reddit",
          content:
            "There’s a lot of buzz recently about Ozempic which is one of many semaglutide injection drugs that help people moderate their food intake and hunger levels. Some variations are meant just to treat type 2 diabetes like Ozempic. Other drugs like WeGovy are meant to treat obesity as well.\nWhat I take issue with is that a lot of commenters have stated that they see Ozempic as a “lose weight quick drug” and a cheat. I think this is simply the wrong way to look at the issue. Obesity is a medical issue that can be treated in many ways. For some people seeing a nutritionist and going to the gym is all that is needed but for many more this simply doesn’t work. I would argue that actually most Americans know generally what a good diet looks like. They may not have all the details but most people can tell you that more vegetables and less meat carbs and sugar will create a calorie deficit and help you lose weight. However food simply tastes really good any many people rely on it as a sort of emotional crutch. Many also lack the time energy and desire to cook healthy food for themselves. There are many who also simply have a naturally large appetite and need to eat more in order to feel full.\nWhat those people need is not a reminder to try “diet and exercise” they need medical help. Semaglutide injections seem to have low risk of serious side effects and can help those people eat less and not feel hungry. All this moralizing about who “deserves” help and who should just suck it up and go to the gym is proving to be detrimental to overall health.\nAlso I’m aware that there is currently a shortage of Semaglutide injections right now but lets set that aside and assume that can be addressed with a more robust supply chain.",
        },
        {
          platform: "Reddit",
          content:
            "Due to a medical condition I need to take metformin. So I wanted to know where I can buy it from? I've searched in some apotheek websites and haven't found it. Is it sold in other kind of stores? Usually how much does it cost? Also I'm an expat and have a medical prescription from my doctor back at home. Could I use this prescription to buy my metformin here in the Netherlands or would I need to go to a GP to get a new one? And if I need to go to a GP would they continue with my doctor's diagnosis and treatment or would they need to reconfirm my situation/do tests? If so how much should I expect to pay for blood tests GP appointments etc? How would that work with the health insurance? Should I tell the insurance my situation to see if they cover it or not? Is metformin something they normally cover? I know they're a lot of questions but I'm really lost about this and any guidance would be of great help.",
        },
        {
          platform: "Reddit",
          content:
            "Hi been lurking for a month diagnosed in Jan '23.\nMy insurance is crap so hence the two PCPs I've dealt with so far have not been ideal. I am at a point where I don't know what I don't know and am fumbling about for answers as I figure out the questions.\nI can't find a practical answer on this question from anywhere PCPs or scientific websites about how to stop the near-constant diarrhea side effect from taking metformin. I'm trying my best but there just doesn't seem to be any math/logic to the input/output equation.\nAny help in being able to stop pooping uncontrollably would be most appreciated. Thank you.",
        },
        {
          platform: "Reddit",
          content:
            "I an on vacation and my Ozempic came in the mail.. it got sent back to the post office until I return. I didn't know it has to be Refrigerated. Is the pen wasted now?",
        },
        {
          platform: "Reddit",
          content:
            "How are you all getting semaglutide injections to be affordable for your patients? I’m struggling with this. And I’m not talking about when it’s covered by insurance for diabetics. I mean for non-diabetic patients whose BMIs 30+ and want it for weight loss? I honestly think it’s a good drug for this but insurance rarely covers it just for obesity. And out-of-pocket it’s usually over $1000/month for my patients pricing them out of it.\nI’ve heard of weight loss clinics getting it much cheaper for their patients... Is there a trick I don’t know about? Or a discount program? Any advice at all is appreciated.",
        },
        {
          platform: "Reddit",
          content:
            "I had asked him 3 months ago and he stated he didn’t want to go that route just yet because he wanted to try metformin first and he hadn’t prescribed it much and also knew Ozempic was hard to get covered by insurance plus he tries to advocate on people working on their diet for weight loss first. Well 3 months passed and my A1C went from 7.3 to 7.2 not too bad he said but I told him I had a really bad time remembering to take the metformin with every meal and probably only took like 60% of my prescription. I asked again about Ozempic and stated I would look into compounding pharmacy’s to pay out of pocket I just wanted to see if he would be ok with prescribing it and looking over my treatment with it as I really wanted to lower my A1C to a non diabetic number and wanted ti work on my weight loss. To my surprise he said we could try it and that he actually had samples for me to start. I was thinking it was going to be a single dose but he opened his fridge and gave me a 3 month supply. He said he forgets he has them and has a bunch. Excited to start this journey. Now to save up for the 3 months after this.",
        },
        {
          platform: "Reddit",
          content:
            "I want to carry ozempec from India to USA. How long can unopened ozempec be left refrigerated?",
        },
        {
          platform: "Reddit",
          content:
            "Last night I did my first injection of 0.25% into my thigh. No marks from the injection site this morning. I seem to be functioning normally and so far no sign of side effects. I am at 99.4 kilos and a BMI of 29.7 or body fat of 29.3. My BP is normal this morning.\nI live in Portugal so the instructions were in Portuguese. I did my best to translate but after watching a couple of YouTube videos this morning I see I missed a few fine points but it seems I injected successfully. My learning is to watch the videos and go to the official Ozempic website for clear directions.\nWhen I went to the pharmacy I bought their only box left so I will need to plan ahead for my next purchase given the demand. As you can see I have an opportunity to bring down my body fat and improve my cholesterol levels.",
        },
        {
          platform: "Reddit",
          content:
            "Is anyone else having trouble using their Ozempic discount card? Apparently there was a nationwide cyberattack & pharmacies have been unable to process the discount resulting in ridiculous prices for the medication. If you're having issues you can give Nordisk (Ozempic manufacturer) a call at 1-800-727-6500. They can provide you with new BIN & PCN numbers to give to the pharmacist so they can process your discount. When you call have your discount card handy as they'll ask you for your group number. Also get comfy when you call because you'll likely be on hold for awhile. Hope this helps someone. I know there are folks who can't afford this medication without that discount! ☹",
        },
      ]);
      setCommentsAds([
        {
          platform: "Reddit",
          content:
            "I'm home sick & was surprised to open HBO Max & be met by Oprah's hour-long Ozempic commercial (that's all it really is in my opinion). I am incredibly interested in hearing all of your thoughts and emotions criticisms and analysis. Obviously I would love to hear Aubrey & Mike scream about it - but I assume that will take some time.",
        },
        {
          platform: "Reddit",
          content:
            "It’s out of control. I just got served an ad with a picture of someone injecting.\nEdit: I used to work in advertising and use ad blockers. Reddit is the only platform I see Ozempic ads in annoyingly interspersed throughout the feed.",
        },
        {
          platform: "Reddit",
          content:
            "Over the past month patients keep asking me for Ozempic by name saying that all the Hollywood stars use it. Most are not diabetic.\nAs far as I know Wegovy is the version of semaglutide approved for weight loss in non-diabetics not Ozempic so why are people asking for Ozempic specifically? I’m not on other social media so can someone tell me where are they seeing these ads?\nAnd if the GLP1 agonists are making this huge push for the weight loss market why are they not increasing supply to meet the demand? Now my diabetes patients are having trouble getting this medication.\nOn the plus side uncontrolled diabetics who used to be skittish about GLP-1 agonists because of needles are now really excited to start them.",
        },
        {
          platform: "Reddit",
          content:
            "It's bad enough when marketing uses a song for ads. Worse when they change the lyrics. But to have the singer and writer take his song and it destroy is for money for a drug is heartbreaking and frustrating. Maybe if he really needed the money but damn this really really bothers me. Anyone else?",
        },
        {
          platform: "Reddit",
          content:
            "Feels like I get an ozempic ad on every tenth Reddit post. It's all I get. I am recovering from an eating disorder and it's really triggering to constantly see ads for some weight loss drug. I'm not overweight and I'm not trying to lose weight so I'm not even sure why they are sending me these ads. I'm just so sick of it and I wish there was some way to tell those ads in particular to fuck off. Society's obsession with some quick fix to weight loss is really unhealthy and unrealistic as well.\nEdit: There IS a setting to disable this and other potentially triggering ads.\nProfile > account settings > scroll all the way to the bottom and you can turn off ads for dating alcohol gambling pregnancy weight loss religion and maybe some others?\nYippee",
        },
        {
          platform: "Reddit",
          content:
            "BIG EYE ROLL at this ad below an MP post on my Reddit feed.",
        },
        {
          platform: "Reddit",
          content: " get so many ads for this now on a daily.. so fucked up",
        },
        {
          platform: "Reddit",
          content:
            "My God. What on earth is it with these ads on YouTube Instagram and other social media platforms?\nIt seems that all of them have one goal in mind which is to make make AS MUCH noise as possible within at LEAST time as possible.\nThe music in the background of these ads is usually just screaming (the Lyft ad that often comes up before YouTube vids is a good example) or really loud music that makes my ears bleed.\nAnother good example is the Google Pixel ads.\nI almost always instinctively mute the volume before the ad plays because of the sheer level of noise it emanates.\nThen there’s the mobile game ads which I don’t even know how to describe. It’s like some half-assed character going around with bad graphics shooting stuff saying “oh yeah” and screaming or it’s some rage bait scenario in which people are having a normal conversation until somebody butts in with something like “it’s great you’re getting married but I have level 99 soldier in (Wtv game”",
        },
        {
          platform: "Reddit",
          content:
            "Just heard on “Marketplace” that the low-dose Wegovy shortage will be until 2024. Sigh.\nI’ll add a link to the interview as soon as they post it.\nThe Novo Nordisk site has changed its shortage language from “fall 2023” to “we anticipate that Wegovy® supply disruption will be ongoing.” So basically no end date.\nI hope Eli Lilly is scaling up Mounjaro production now so that I can gleefully watch them steal all of Novo Nordisk’s Wegovy customers as soon as Mounjaro gets the FDA green light for weight loss.",
        },
        {
          platform: "Reddit",
          content:
            "I can’t believe Jardiance could ever outdo itself. So. Enraging.",
        },
      ]);
      setCommentsBrochure([
        {
          platform: "Reddit",
          content:
            "Let me start by saying that there will be people that answer this and say ”Ozempic cannot cause low blood sugar unless your are taking another medication for diabetes”  That is absolute nonsense yes that’s what the ozempic brochure and information will tell you but don’t believe everything you read - it’s true for 99% of the people that is a true statement but for the 1% that have these occurrences it’s real.",
        },
        {
          platform: "Reddit",
          content:
            "Meaning im insulin dependent but with diet and exercise i can finagle my numbers that was as well. In my case its the small individual things that make a difference. Like figuring out what is definitely not good for you. Any information online or in the brochures are a general across the board type deal.",
        },
        {
          platform: "Reddit",
          content:
            "Just got the Trulicity brochure and it’s ridiculous how they sugarcoat everything. Barely any mention of side effects just pages of how 'convenient' it is. Like I need actual information not a sales pitch.",
        },
        {
          platform: "Reddit",
          content: "Anyone else find the Januvia brochure totally useless?",
        },
        {
          platform: "Reddit",
          content:
            "Ozempic brochure is such a joke. All they do is hype up the weight loss and 'easy dosing' but barely mention the side effects. I had to dig reddit to find anything useful",
        },
      ]);
      setCommentsVerbalCommunication([
        {
          platform: "Reddit",
          content:
            '""I caught the post yesterday about \'people lying about Ozempic\' and was too late to the party to share my experience.\nI worked with my doctor last summer and was prescribed Ozempic for weight loss. At the time I was 38 yrs old 6\' 2"""" and 365lbs and am Male. At the time I had just done my annual checkup and all of my blood work was normal - no high A1C no high cholesterol sodium etc etc.\nAs a bit of back story to this - In the past I pretty much would just eat until the food in front of me was gone. That\'s what I was taught growing up - eat until your plate is clean. It\'s a habit I\'ve struggled with and have yet to overcome. I don\'t really know the difference between """"hungry"""" and """"not full."""" For me it\'s basically """"I\'m hungry"""" and then """"holy shit I\'m so fucking stuffed I could pop."""',
        },
        {
          platform:
            "So last summer my doc started me on Ozempic at 0.25mg weekly dosage. I was at this dose for about 3 months and then increased to 0.5mg weekly.",
          content: "",
        },
        {
          platform:
            "For the first two months the change was absolutely un-freaking-believable. I would sit down to a meal eat some and actually FEEL FULL. I was able to easily stop eating with portions of food on my plate and feel completely satisfied. In those first two months I dropped 15lbs.",
          content: "",
        },
        {
          platform:
            "In month three I was still actually feeling full at meals snacking between meals less but the weight wasn't really dropping any longer. This is why the doc increased me to 0.5mg.",
          content: "",
        },
        {
          platform:
            "After starting the 0.5mg/week dose this is where it all went downhill fast. The side effects came on hard fast and strong. If I ate more than say half a sandwich at a meal I would become so overwhelmingly bloated that I was burping constantly (like literally two big burps every 3 minutes for hours). On top of that at this point it made my burps smell and taste so ungodly disgusting (think straight sulfur plus an outhouse at a nascar race in summer at the end of race weekend).",
          content: "",
        },
        {
          platform:
            "Additionally there were three times in a two week period that I became so bloated that it made me vomit - a lot; and I'm not exaggerating that it was complete projectile vomiting out of my mouth and nose. It was an absolutely ungodly horrible experience.",
          content: "",
        },
        {
          platform:
            'As if those side effects weren\'t bad enough it also gave me horrible uncontrollable diarrhea that met the clinical definition of """"severe"""". There were a few days where I couldn\'t leave the toilet for more than 10-15 minutes at a time. There was one night I fell asleep on the toilet because I was so tired from getting up to RUN to the toilet to poo.',
          content: "",
        },
        {
          platform:
            "Anyways - I stopped taking Ozempic after that experience. However working with my doc's input I did stop taking it for just over a month (until my system was back to normal) and then tried the 0.25mg dosage again to see if I still had all of the side effects or not - I did.",
          content: "",
        },
        {
          platform:
            'So the reason to share this is I wanted to put out there my real world experience. I\'m hopefully in the minority of users that get the horrible side effects and hopefully your experiences will be better than mine. The key takeaways for me is that I need to learn the difference between """"full"""" and """"not hungry"""" and stop treating them as the same feeling. It also taught me that Yes I indeed can actually make it by without snacking and without eating a bunch of food at every meal. Hopefully at some point I\'ll build up better self control and be able to manage that without medication."""',
          content: "",
        },
        {
          platform: "Reddit",
          content:
            "I was with my doctor this morning who recommended I use Ozempic injections to help with weight loss. How many people have used it here? How did it feel and would you recommend it?",
        },
        {
          platform: "Reddit",
          content:
            "In the midst of all this Kendrick and Drake beef the word Ozempic is one of the many that really stood out to me. Apparently drake was taking it to lose weight or some shit. Silly Ol’ BBL Drizzy. Anyways I felt compelled to look it up bc I didn’t even know what ozempic was but from what I’ve read it can severely lower the amount of insulin we’d need to take on a daily basis as type 1 diabetics. Def something to look into if you’re struggling with costs of insulin.",
        },
        {
          platform: "Reddit",
          content:
            "I already take 1000mg of metformin twice a day. I am terrified of taking new meds. Is this a pretty good drug or should I be prepared for negative side effects?\nI should also add my blood sugar levels tested at 330 today.",
        },
        {
          platform: "Reddit",
          content:
            "I am taking just the Januvia after Metformin made my glucose numbers go up (WTH right?). Has anyone one else taken it solo - without any other meds? What were/are your results?",
        },
        {
          platform: "Reddit",
          content:
            "Hello I’m new to this subreddit. I’ve been dealing with type 2 for years. I used to take metformin and it sucked but it did help me lose weight. Though those pesky GI issues never went away while on it. I was eventually able to get off it and did good for years but this year my A1C has gotten pretty bad. Even after losing some weight cutting out junk and exercising my A1C went from 10.2 to just 10. I am so frustrated and discouraged especially because I was given three months by my doctor to get it under control this no diabetes meds and I worked hard and with little result. So because he knows I’m not good with Metformin he’s now prescribed Januvia. I’ve researched it and now terrified to take it but I know I have to. But all I can find is bad experiences of people who took it has anyone here taken it with good results? What was your experience like?",
        },
        {
          platform: "Reddit",
          content:
            "Just got prescribed Januvia. I'm already taking metformin but my sugar is still high. Wondering if Januvia will help get it under control.",
        },
        {
          platform: "Reddit",
          content:
            "Hi all! This goes for Saxenda and any other weight loss meds. I’m getting discouraged from how little weight I’ve lost on Victoza compared to others I’ve read about. Normally I’d give a medication more time to work (I’ve been on it almost 6 weeks) but most of what I’ve read is people losing the most weight within the first month or even the first 2 weeks. If you’ve tried Victoza please share how it worked/didn’t work for you. I’d love to know how long you took it your dose timeline and when and how much weight you lost. Also open to tips if any come to mind.\nI’m a 25 year old non-diabetic female at 5’4 and 280lbs. I lost about 200lbs naturally with diet and exercise and got down to 190lbs for the first time since I was a child. I hit a plateau and then the pandemic depression and emotional distress in moving back home brought me back up to 280lbs within one year. I decided to try a weight loss med to just get a little motivation back. Only Victoza was covered by insurance and able to be found.\nI’ve been on it for about 6 weeks now. I took 0.6 dose for 4 weeks and only lost 2lbs. I’ve now been on 1.2 dose for almost 2 weeks and while I haven’t weighed myself I notice very little difference. Meanwhile I’m eating healthily and much less in portion and have stopped emotionally eating entirely. I still work out but not as much — due to the side effects hitting me hard. Constant fluttery stomach and migraine heavy nausea lightheadedness and increasingly excessive fatigue. It’s been tolerable so far especially because it’s taken my appetite away and I’ve eaten so much less.\nSo to have lost nearly no weight is very disheartening. My insurance denied my request for Wegovy coverage which I’m debating on appealing. I really hoped Victoza would be effective. Has anyone had a similar experience with not losing much weight? Did it ever start working better? What’s your Victoza story? Thanks!",
        },
        {
          platform: "Reddit",
          content:
            "I have been a type 2 for a while (I’ll get serious then let life get in the way). But my endocrinologist started me on Jardience and Bydureon. I ended up being allergic to the Bydureon and got switched to Victoza. No issues with the meds until I recently had my gall bladder taken out. Now it seems like to food stays too long in my stomach and rots? I know I’m going to be sick when I start burping that rotten egg smell.\nThe endo doc told me to lower my dosage from 1.8ml to a 0.6ml until my body can tolerate it again. It’s been 2 mths since I had the gall bladder surgery and I though I would have “ leveled out” by now. My surgeon is no help since I’ve physically healed and not in any more pain. My doctor tells me to follow a low fat diet and give time to my body to adjust to the surgery.\nHas anyone else had or heard of this issue?",
        },
        {
          platform: "Reddit",
          content:
            "So I've been on Victoza for nearly 3 months and it's been working wonders on my blood sugar. I went to get my refill and my insurance won't pay for it it's nearly 1000 dollars pharmacist says the doc needs to call insurance. I call doctor's office nurse says they'll call.\nLater that day doc calls me back and says \"\"Yep got it approved should be ready for pickup.\"\" I go to the pharmacy and come to find out my doctor didn't bother calling insurance as I requested and just changed my prescription to Ozempic without telling me or discussing this new medication with me at all.\nSo fuck that doctor won't be going back there but I'm curious if anyone here has experience with making the switch over from Victoza and can tell me how it affected them? The pharmacist was very reassuring but I'm just really nervous about changing something that has been working so well.",
        },
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
      setwebsiteData([
        { name: "Humira", value: 14, value2: 17 },
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
        { name: "Humira", value: 15, value2: 17 },
        { name: "Enbrel", value: 9, value2: 14 },
        { name: "Remicade", value: 8, value2: 10 },
        { name: "Orencia", value: 3, value2: 9 },
        { name: "Actemra", value: 6, value2: 7 },
        { name: "Xeljanz", value: 5, value2: 6 },
        { name: "Rinvoq", value: 4, value2: 5 },
        { name: "Cimzia", value: 2, value2: 4 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 3, value2: 3 },
      ]);
      setwebsiteData3([
        { name: "Kineret", value: 14, value2: 17 }, // New
        { name: "Arava", value: 9, value2: 14 }, // New
        { name: "Plaquenil", value: 7, value2: 12 }, // New
        { name: "Imuran", value: 6, value2: 11 }, // New
        { name: "Trexall", value: 6, value2: 8 }, // New
        { name: "Otrexup", value: 4, value2: 7 }, // New
        { name: "Rasuvo", value: 3, value2: 5 }, // New
        { name: "Kevzara", value: 3, value2: 4 }, // New
        { name: "Stelara", value: 3, value2: 4 }, // New
        { name: "Tremfya", value: 2, value2: 2 }, // New
      ]);

      setTvData([
        { name: "Humira", value: 11, value2: 17 },
        { name: "Enbrel", value: 8, value2: 14 },
        { name: "Remicade", value: 9, value2: 12 },
        { name: "Orencia", value: 7, value2: 11 },
        { name: "Actemra", value: 6, value2: 8 },
        { name: "Xeljanz", value: 5, value2: 7 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 3, value2: 4 },
        { name: "Simponi", value: 3, value2: 4 },
        { name: "Simponi Aria", value: 2, value2: 3 },
      ]);
      setTvData2([
        { name: "Humira", value: 14, value2: 17 },
        { name: "Enbrel", value: 9, value2: 14 },
        { name: "Remicade", value: 7, value2: 12 },
        { name: "Orencia", value: 9, value2: 11 },
        { name: "Actemra", value: 7, value2: 8 },
        { name: "Xeljanz", value: 4, value2: 7 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 3, value2: 4 },
        { name: "Simponi", value: 1, value2: 4 },
        { name: "Simponi Aria", value: 2, value2: 3 },
      ]);
      setTvData3([
        { name: "Kineret", value: 12, value2: 17 }, // New
        { name: "Arava", value: 9, value2: 14 }, // New
        { name: "Plaquenil", value: 8, value2: 12 }, // New
        { name: "Imuran", value: 6, value2: 11 }, // New
        { name: "Trexall", value: 6, value2: 8 }, // New
        { name: "Otrexup", value: 4, value2: 7 }, // New
        { name: "Rasuvo", value: 2, value2: 5 }, // New
        { name: "Kevzara", value: 3, value2: 4 }, // New
        { name: "Stelara", value: 2, value2: 4 }, // New
        { name: "Tremfya", value: 1, value2: 2 }, // New
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
      setCommentsWebsiteData([
        {
          platform: "Reddit",
          content:
            "Go on the Humira website and sign up for their savings program. I pay $5 a month.",
          user: "tamaroo",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "Seems I'm not the only one with this issue. A similar thing happened to me. The difference is I pay out of pocket, then get reimbursed through complete rebate. The first claim this year in January went through with no issue. The second claim was just denied stating that I exceeded the plan maximum and they have a Benefit Verification performed. I'm not sure what that is. Humira's website states that the maximum is $14K. So I'm not sure what's going on. I've been on hold with them for 45+ minutes at this point. I'm hoping to get this resolved. How did you make out. Did you get it resolved?",
          user: "fenderguitar83",
          Bucket: "",
        },
        {
          platform: "",
          content: "Website",
          user: "",
          Bucket: "",
        },
        {
          platform: "Reddit",
          content:
            "So that would be much less than one person per every 100 people? I also read on Humira’s website that it increases the risk for t-cell cancer by 3 folds (so 300%) and looked up the incidence rate for t-cell in every 1 mil ppl which was 8.55 then multiplied it by 3 which would be 25.65 out of 1 mil then converted it into a percentage which would be .002565% which makes me feel a lot better. (If I did that correctly). I’m just adding this in for reference for anyone else who got scared by the “3 fold increase” on humira’s website.",
          user: "YMCApoolboy",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            'I have been getting Enbrel with co-pay card for several years. I have new insurance which has re-classified Enbrel as ""non-essential health benefit"" requiring a 30% co-pay, not applied to out of pocket max, which will be about $2700 per month. The only way to avoid this is to join their SaveOnSP program and give them access to my co-pay assistance and let them monitor my account.\nOn Enbrel website there is some fine print that basically says that I have to inform them if I am on a ""co-pay maximizer"". It sounds like I could lose my co-pay assistance.\nI hate being in this position. I am afraid to lose access to Enbrel which has been working extremely well to control my RA. I feel like I am caught between insurance co and pharma.\nI am in a state that banned co-pay maximizes, but my employer is in a state that allows them.\nAnyone else dealt with this or have advice?',
          user: "sarelja",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "OP, it sounds like maybe you are using the auto injector pen? I had a similar experience to you the first time I tried to do it myself and some of the medicine leaked out. Couple of ideas:\nI was initially taught to pinch the area where you’ll inject, as another commenter mentioned. For me that didn’t work, so I went back for a second nurse consult and she showed me an alternate way which is holding the area completely flat- that worked a lot better for me.\nfor me, upper thigh has always hurt more than my stomach.\nif you go on the Enbrel website, I’m pretty sure there is a number you can call to talk to someone and get tips It took a few injections for me to get the hang of it. Good luck, it will get easier. :)",
          user: "jbreezy30",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "According to Enbrel’s website, the Autoinjector with the minis, the SureClick, and the prefilled syringes all have Latex. It looks like there may be 25 mg vials that don’t have latex.",
          user: "mrsredfast",
          Bucket: "",
        },
        {
          platform: "",
          content: "Website",
          user: "",
          Bucket: "",
        },
        {
          platform: "Reddit",
          content:
            "So I was in the same boat as you. When I moved from Cosentyx to Engbrel, I had to start doing injections on my own. I was pretty panicked about injecting anything into myself, let alone such a \"serious\" medication. But I realised it's something that has to be done, and that if it's given in such a packaging that self-injection is the intended goal, then it really isn't that unsafe. I found a really in depth guide online on Enbrel's website, and watching the video tutorial and reading the instructions made it much easier.",
          user: "toheenezilalat\n",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "Remicade.com Remicade’s website lists skin cancer as a possible side effect.\nI obviously don’t know about every biologic, but my GI insisted I get skin checks with my dermatologist every 6 months while on any biologics. I have been on Humira, Remicade, and now Entyvio. I experienced sun sensitivity on both Humira and Remicade and my GI said it wasn’t rare and to be vigilant about sunscreen and dermatologist visits. I’ve needed a handful of suspicious moles removed since starting biologics.",
          user: "User",
          Bucket: "Website",
        },
      ]);
      setCommentsAds([
        {
          platform: "Reddit",
          content:
            'Au contraire. Do you not remember the Humira commercials where the singer in the band kept having to leave the band standing there on stage while she was "doing her business"?',
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Lol, humira was right for me. No cool humira commercials, though ",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Enbrel Advert - someone posted they saw it, but couldn’t find the link a few months back. Found it!",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Every time I watch TV, there's another ad for Humira. It feels like they're pushing it hard, but they don’t really explain the long-term side effects. Anyone else feel weird seeing these ads constantly?",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Enbrel commercials make it look like people with RA are just living their best lives after starting it. I’ve tried it, and yeah, it helps, but it’s not this magical fix like they make it seem in the ads.",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Has anyone else noticed how much they’re pushing Simponi lately? I’ve seen the ad five times this week alone! I’m on it, but the price is ridiculous despite all this advertising. They should spend less on ads and lower the cost.",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "I keep seeing Humira ads and it honestly frustrates me because they show these happy people climbing mountains. Like, I get it helps, but no one’s showing the side effects or what happens if it doesn’t work.",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "I’ve seen the Remicade commercials, and they make it seem like life goes back to normal right after starting it. I wish they were more realistic about the time it takes to see results, not to mention the infusion process isn’t exactly convenient.",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Cimzia ads keep popping up, and it’s kind of overwhelming. I’m on it, and it works okay, but it’s weird seeing it on TV all the time when the reality of managing RA is so much more complicated.",
          user: "User",
          Bucket: "Ads",
        },
        {
          platform: "Reddit",
          content:
            "Does anyone else feel like these Humira and Enbrel ads are trying to make it look like everyone can afford these treatments? Like, they gloss over the part where you might need to fight insurance for coverage.",
          user: "User",
          Bucket: "Ads",
        },
      ]);
      setCommentsBrochure([
        {
          platform: "Reddit",
          content:
            "I picked up Humira from the pharmacy and the info sheet was like 10 pages long! It’s so overwhelming. They need to simplify these things for people who just want to understand the side effects.",
          user: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Enbrel brochure they gave me was full of medical jargon. I had to Google half of it. You’d think they’d make it easier for patients to understand what they’re getting into.",
          user: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I got a leaflet with my Simponi prescription, and it barely mentioned the fatigue side effect. That’s been the hardest part for me, but it was glossed over in the info sheet.",
          user: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "Has anyone else noticed how scary the Remicade information leaflet is? They list every possible side effect, and it freaked me out before I even started the treatment!",
          user: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate that the Cimzia brochure has clear visuals, but it still doesn’t explain how long it takes to see real results. That part was a bit frustrating when I started.",
          user: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The leaflet that came with my Orencia was mostly fine, but they didn’t emphasize enough that I might need other meds alongside it. I wish they were clearer about combo treatments.",
          user: "User",
          Bucket: "Brochure",
        },
      ]);
      setCommentsVerbalCommunication([
        {
          platform: "Reddit",
          content:
            "When I picked up Humira, the pharmacist was really helpful and went over how to inject it. Still, I was so nervous. I wish they had offered a demo or something.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "My nurse explained how to use Enbrel, but she rushed through the side effects. I had to Google everything afterward because I didn’t feel like I got enough info.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "The pharmacist gave me a really thorough explanation for Simponi injections. Honestly, I appreciated that because I was freaked out about doing it myself.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "Has anyone else had issues with their Remicade nurse not really explaining what to expect during the infusion? I wish they had walked me through the whole process beforehand.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "I had a really good nurse for my Cimzia injection training. She even showed me how to properly dispose of the needles. It made starting the treatment way less intimidating.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "The pharmacist gave me a rundown of Orencia, but they didn’t explain that it might take weeks to see any effects. I only found out after I was frustrated with the slow progress.",
          user: "User",
          Bucket: "Verbal communications",
        },
        {
          platform: "Reddit",
          content:
            "When I started Actemra, the nurse went over the basics, but I wish she had been more clear about how often I’d need blood tests. That caught me off guard.",
          user: "User",
          Bucket: "Verbal communications",
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
        { name: "Otezla", value: 15, value2: 17 },
        { name: "Enbrel", value: 12, value2: 15 },
        { name: "Humira", value: 7, value2: 10 },
        { name: "Stelara", value: 8, value2: 9 },
        { name: "Cimzia", value: 6, value2: 7 },
        { name: "Tremfya", value: 4, value2: 6 },
        { name: "Skyrizi", value: 3, value2: 4 },
        { name: "Xeljanz", value: 4, value2: 4 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 3, value2: 3 },
      ]);
      setwebsiteData2([
        { name: "Otezla", value: 12, value2: 17 },
        { name: "Enbrel", value: 12, value2: 12 },
        { name: "Humira", value: 10, value2: 10 },
        { name: "Stelara", value: 7, value2: 9 },
        { name: "Cimzia", value: 6, value2: 7 },
        { name: "Tremfya", value: 4, value2: 6 },
        { name: "Skyrizi", value: 3, value2: 4 },
        { name: "Xeljanz", value: 3, value2: 4 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 3, value2: 3 },
      ]);
      setwebsiteData3([
        { name: "Kineret", value: 14, value2: 17 }, // New
        { name: "Arava", value: 12, value2: 14 }, // New
        { name: "Plaquenil", value: 10, value2: 10 }, // New
        { name: "Imuran", value: 8, value2: 9 }, // New
        { name: "Trexall", value: 6, value2: 8 }, // New
        { name: "Otrexup", value: 4, value2: 6 }, // New
        { name: "Rasuvo", value: 2, value2: 5 }, // New
        { name: "Kevzara", value: 3, value2: 4 }, // New
        { name: "Stelara", value: 2, value2: 4 }, // New
        { name: "Tremfya", value: 2, value2: 2 }, // New
      ]);

      setTvData([
        { name: "Otezla", value: 16, value2: 17 },
        { name: "Enbrel", value: 12, value2: 14 },
        { name: "Humira", value: 10, value2: 10 },
        { name: "Stelara", value: 5, value2: 9 },
        { name: "Cimzia", value: 6, value2: 8 },
        { name: "Tremfya", value: 2, value2: 6 },
        { name: "Skyrizi", value: 4, value2: 6 },
        { name: "Xeljanz", value: 1, value2: 4 },
        { name: "Rinvoq", value: 1, value2: 4 },
        { name: "Remicade", value: 2, value2: 2 },
      ]);
      setTvData2([
        { name: "Otezla", value: 10, value2: 14 },
        { name: "Enbrel", value: 12, value2: 14 },
        { name: "Humira", value: 10, value2: 10 },
        { name: "Stelara", value: 4, value2: 9 },
        { name: "Cimzia", value: 6, value2: 8 },
        { name: "Tremfya", value: 6, value2: 6 },
        { name: "Skyrizi", value: 2, value2: 5 },
        { name: "Xeljanz", value: 3, value2: 5 },
        { name: "Rinvoq", value: 2, value2: 5 },
        { name: "Remicade", value: 2, value2: 2 },
      ]);
      setTvData3([
        { name: "Kineret", value: 14, value2: 17 }, // New
        { name: "Arava", value: 12, value2: 14 }, // New
        { name: "Plaquenil", value: 10, value2: 10 }, // New
        { name: "Imuran", value: 8, value2: 9 }, // New
        { name: "Trexall", value: 6, value2: 8 }, // New
        { name: "Otrexup", value: 4, value2: 6 }, // New
        { name: "Rasuvo", value: 2, value2: 5 }, // New
        { name: "Kevzara", value: 3, value2: 4 }, // New
        { name: "Stelara", value: 2, value2: 4 }, // New
        { name: "Tremfya", value: 2, value2: 2 }, // New
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
      setCommentsWebsiteData([
        {
          platform: "Reddit",
          content:
            "The Otezla website has great resources! I loved the patient stories—it felt comforting to connect with others who understand what I'm going through.",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "I found the Enbrel site a bit cluttered, but the information on dosing and side effects was helpful. A clearer layout would make it easier to navigate!",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "The Humira website is a lifesaver. The patient support tools really helped me manage my treatment journey. I appreciate how they encourage community engagement.",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "The Taltz site had useful videos explaining how the drug works, which made me feel more informed. Would love to see more patient testimonials, though!",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "I found the Cimzia website quite informative, especially the section on coping strategies. It's nice to see a company acknowledge the emotional side of things.",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "The Skyrizi website looks sleek, but I was disappointed by the lack of personal experiences shared. I think it would help patients to see more real stories.",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate the resources on the Tremfya website, especially the downloadable guides for managing treatment. It shows they care about patient education!",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "I found the Cosentyx site user-friendly, but I wish it had more interactive features. A forum or chat function would be fantastic for connecting with other patients.",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "The Rinvoq website had a lot of good info, but I was hoping for a clearer explanation of potential side effects. A dedicated FAQ section would be helpful!",
          User: "User",
          Bucket: "Website",
        },
        {
          platform: "Reddit",
          content:
            "I love how the Zycof site emphasizes support and community. The resources available for mental health support are invaluable for patients like me!",
          User: "User",
          Bucket: "Website",
        },
      ]);
      setCommentsAds([
        {
          platform: "Reddit",
          content:
            "I saw an ad for Otezla that really resonated with me. It highlighted real patients and their journeys, making me feel less alone in my struggle with psoriatic arthritis.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Enbrel commercials always seem a bit too polished. I appreciate the effort, but I want to hear more authentic stories from everyday people, not just models!",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "I was impressed by a Humira ad that included information about support programs. It made me feel like the company cares about patients beyond just selling the drug.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Taltz ads have been so relatable! I love seeing real patients share their experiences—it's nice to know others are going through similar struggles.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "I've seen a few Cimzia ads that made me feel hopeful about treatment. It's encouraging to see success stories, but I wish they showed a wider range of experiences.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Skyrizi ads are visually stunning, but I think they lack depth. I want to know more about how the drug actually helps and hear from real patients!",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate the honesty in the Tremfya advertisements. They talk about side effects openly, which is refreshing and makes me trust the brand more.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Cosentyx ads are catchy, but they feel a bit too focused on the positive outcomes. I think they should address the challenges patients face as well.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "I recently saw a Rinvoq ad that focused on everyday life with psoriatic arthritis. It made me feel understood and seen, which is so important for patients.",
          User: "User",
          Bucket: "TV Ads",
        },
        {
          platform: "Reddit",
          content:
            "The Zycof advertisements are very informative, but they should include more emotional support content. It's crucial for us patients to feel supported in all aspects!",
          User: "User",
          Bucket: "TV Ads",
        },
      ]);
      setCommentsBrochure([
        {
          platform: "Reddit",
          content:
            "The Otezla brochure was really helpful! It explained how the drug works and included a lot of supportive resources. I felt more confident discussing it with my doctor.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I received a leaflet for Enbrel at my clinic, and while it had good info, I found it a bit too technical. A simpler breakdown would be appreciated for us patients!",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Humira information sheet was very thorough. I liked the FAQ section that addressed common concerns, especially about side effects. It made me feel less anxious.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I found the Taltz brochure visually appealing, but it lacked personal stories. Including testimonials from other patients would make it feel more relatable.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Cimzia information sheet did a great job of outlining treatment goals. It helped me understand what to expect during my treatment journey.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate the Skyrizi brochure's clear layout, but I wish it included more about lifestyle changes I could make to support my treatment. That would be helpful!",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Tremfya leaflet had some useful tips for managing symptoms alongside medication. I felt like it addressed the holistic approach to treatment.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "I found the Cosentyx brochure a bit overwhelming. It was packed with information, but I needed a more concise version that I could easily digest.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Rinvoq information sheet was very informative, especially the section on managing side effects. It really reassured me about starting treatment.",
          User: "User",
          Bucket: "Brochure",
        },
        {
          platform: "Reddit",
          content:
            "The Zycof leaflet included a lot of practical resources, like links to support groups. It made me feel less isolated in my journey with psoriatic arthritis.",
          User: "User",
          Bucket: "Brochure",
        },
      ]);
      setCommentsVerbalCommunication([
        {
          platform: "Reddit",
          content:
            'When I talked to my doctor about Otezla, he was really supportive and explained how it could help with my symptoms. It made me feel like I was part of the decision-making process."',
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "During my last appointment, my dermatologist discussed Enbrel with me in detail. I appreciated how she took the time to answer all my questions without rushing.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "I had a great conversation with my nurse about Humira. She shared her own experiences with the drug, which helped me feel more comfortable about starting it.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "I joined a support group, and hearing others talk about their experiences with Taltz was eye-opening. It was comforting to know I wasn’t alone in my struggles.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "When discussing Cimzia with my family, I felt a bit frustrated. They didn’t understand the emotional impact of my condition, but it helped to explain it to them.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "My friend who is on Skyrizi shared her experience with me, and it made a big difference. Hearing her positive feedback gave me hope about my treatment options.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "After my last visit, my doctor called to follow up on how I was doing with Tremfya. It was nice to feel cared for and supported in my treatment journey.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "I had a candid chat with my pharmacist about Cosentyx. She provided insights on managing side effects that I hadn’t considered, which was super helpful.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "My partner and I discussed starting Rinvoq together. Having that conversation made me feel more supported, knowing I had someone to lean on during treatment.",
          User: "User",
          Bucket: "Verbal communication",
        },
        {
          platform: "Reddit",
          content:
            "In a recent webinar, I listened to a panel discussing Zycof. The information they shared about patient experiences and tips was invaluable for my decision-making.",
          User: "User",
          Bucket: "Verbal communication",
        },
      ]);
      setTitle1("ALL");
      setTitle2("Biological Agents (Biologics)");
      setTitle3("DMARDs");
    }
  };

  const [websiteData, setwebsiteData] = useState([
    { name: "Ozempic", value: 12, value2: 15 },
    { name: "Victoza", value: 10, value2: 12 },
    { name: "Trulicity", value: 8, value2: 10 },
    { name: "Wegovy", value: 7, value2: 9 },
    { name: "Saxenda", value: 6, value2: 7 },
    { name: "Mounjaro", value: 4, value2: 6 },
    { name: "Byetta", value: 3, value2: 4 },
  ]);
  const [websiteData2, setwebsiteData2] = useState([
    { name: "Jardiance", value: 13, value2: 15 },
    { name: "Glucophage", value: 9, value2: 13 },
    { name: "Fortamet", value: 6, value2: 10 },
    { name: "Invokana", value: 8, value2: 9 },
    { name: "Farxiga", value: 6, value2: 7 },
    { name: "Levemir", value: 5, value2: 6 },
    { name: "Humalog", value: 3, value2: 4 },
    { name: "Novolog", value: 2, value2: 4 },
    { name: "Basaglar", value: 3, value2: 3 },
    { name: "Fiasp", value: 2, value2: 3 },
  ]);
  const [websiteData3, setwebsiteData3] = useState([
    { name: "Januvia", value: 14, value2: 15 },
    { name: "Janumet", value: 10, value2: 12 },
    { name: "Onglyza", value: 6, value2: 10 },
    { name: "Nesina", value: 8, value2: 9 },
    { name: "Evogliptin", value: 6, value2: 7 },
  ]);
  const [TvData, setTvData] = useState([
    { name: "Ozempic", value: 12, value2: 17 }, // New
    { name: "Victoza", value: 10, value2: 14 }, // New
    { name: "Trulicity", value: 8, value2: 12 }, // New
    { name: "Wegovy", value: 7, value2: 9 }, // New
    { name: "Saxenda", value: 6, value2: 7 }, // New
    { name: "Mounjaro", value: 4, value2: 6 }, // New
    { name: "Byetta", value: 3, value2: 4 },
  ]);
  const [TvData2, setTvData2] = useState([
    { name: "Jardiance", value: 10, value2: 16 },
    { name: "Glucophage", value: 12, value2: 14 },
    { name: "Fortamet", value: 6, value2: 10 },
    { name: "Invokana", value: 8, value2: 9 },
    { name: "Farxiga", value: 6, value2: 7 },
    { name: "Levemir", value: 4, value2: 6 },
    { name: "Humalog", value: 3, value2: 4 },
    { name: "Novolog", value: 2, value2: 4 },
    { name: "Basaglar", value: 1, value2: 3 },
    { name: "Fiasp", value: 2, value2: 3 },
  ]);

  const [TvData3, setTvData3] = useState([
    { name: "Januvia", value: 11, value2: 15 }, // New
    { name: "Janumet", value: 7, value2: 12 }, // New
    { name: "Onglyza", value: 6, value2: 10 }, // New
    { name: "Nesina", value: 8, value2: 9 }, // New
    { name: "Evogliptin", value: 6, value2: 7 }, // New
  ]);

  const [title1, setTitle1] = useState("Diabetes with Weightloss");
  const [title2, setTitle2] = useState("Diabetes");
  const [title3, setTitle3] = useState("Gliptins");
  return (
    <>
      <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
      <Container fluid>
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData1} />
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
          </Card>
        </Container>
        <Container>
          <Row>
            {/* Column for the first chart, taking 6 out of 12 grid columns */}
            <Col md={12}>{/* <ContentStack /> */}</Col>
            <Col lg={12}>
              <Card className="p-3 m-2">
                <Container fluid className="p-0 mt-4">
                  {/* <Card className="w-100"> */}
                  <Card.Body className="p-0">
                    <h3 className="chart-title rt">Most frequent topics</h3>

                    <div
                      className="chart-container"
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src="https://multipliersolutions.in/patient-centricity/content.png"
                        alt="HeatMap"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </Card.Body>
                  {/* </Card> */}
                </Container>
              </Card>
            </Col>
          </Row>
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
              <h6 className="chart-title m-3">Website</h6>
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
            <CommentSection commentsData={commentsWebsiteData} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">TV ads</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsAds} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Brochure</h6>
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
            <CommentSection commentsData={commentsBrochure} />
          </Card>
        </Container>
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Verbal communication</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={TvData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsVerbalCommunication} />
          </Card>
        </Container>
      </Container>
    </>
  );
}

//---------------------// Actual Code //----------------------------//
// import React from "react";
// import { useState } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "../css/content.css";
// import { DoubleBarChart, DoubleBarChart2, DoubleBarChart3 } from "../charts/DoubleBarChart";
// import jsonData from "../demo/conversion.json"; // Import your JSON data file
// import SegmentPart from "../components/SegmentPart";
// import TopBrands from "../components/TopBrands";
// import CommentSection from "../components/CommentSection";
// import { Header } from "../components/Header";

// // Function to filter data by category
// const filterDataByCategory = (category) => {
//   return jsonData.filter((item) => item.Category === category);
// };

// export default function ContentPage() {

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
//                   <DoubleBarChart data={websiteData} />
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
//                   <DoubleBarChart data={websiteData} />
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
//                   <DoubleBarChart data={websiteData} />
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
