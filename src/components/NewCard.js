import React, { useState } from "react";
import "../css/content.css";
import { Card, Col, Row } from "react-bootstrap";
import { DoubleBarChart } from "../charts/DoubleBarChart";
import { CommentSection } from "./CommentSection";

export default function NewCard(params) {
    const [title1, setTitle1] = useState("Diabetes with Weightloss");
    const [title2, setTitle2] = useState("Diabetes");
    const [title3, setTitle3] = useState("Gliptins");

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

    return (
        <>
            <div style={{textAlign: "justify"}}>
                <Card style={{border:"none" }}>
                    <Row>
                        {/* <h6 className="chart-title m-3">Website</h6> */}
                        <Col lg={4}>
                            <Card className="p-3 m-2 h-100" style={{textAlign: "justify"}}>
                                <h6 className="top-forum m-3">Ads</h6>
                                <h2 className="chart-title mb-1 ms-3 mt-3">Visual Suggestions:</h2>
                                <p className=" m-3" >
                                    <ul>
                                        <li>Use real patient images that are diverse and relatable.</li>
                                        <li>Include high-quality visuals like before-after transformations and clean graphics.</li>
                                        <li> Design bold CTAs with contrasting buttons to drive action.</li>

                                    </ul>
                                    
                                    
                                    
                                   </p>
                                <h2 className="chart-title mb-1 ms-3 mt-3"> Content Suggestions:</h2>
                                <p className=" m-3">
                                    <ul>
                                        <li>Focus on empathetic messaging with real patient stories.</li>
                                        <li> Highlight clear benefits (e.g., "Achieve X% weight loss in 3 months").</li>
                                        <li> Use actionable CTAs like “Talk to your doctor today” or “Learn more about managing diabetes.”</li>
                                    </ul>
                                   
                                   </p>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="p-3 m-2 h-100">
                                <h6 className="top-forum m-3">Social Media Content</h6>
                                <h2 className="chart-title mb-1 ms-3 mt-3">Visual Suggestions:</h2>
                                <p className=" m-3">
                                    <ul>
                                        <li>Create infographics for quick tips and benefits (e.g., “5 Habits for Diabetes Control”).</li>
                                        <li>Post short videos (15-30 seconds) featuring patient journeys or treatment education.</li>
                                        <li>Share before-and-after visuals or user-generated content.</li>
                                    </ul>
                                    
                                   </p>
                                <h2 className="chart-title mb-1 ms-3 mt-3"> Content Suggestions:</h2>
                                <p className=" m-3">
                                    <ul>
                                        <li>Use polls and interactive posts to boost engagement (e.g., “What’s your biggest challenge managing diabetes?”).</li>
                                        <li>Share educational content: Bite-sized tips and health facts.</li>
                                        <li>Highlight patient success with testimonials: “Patient X improved in 3 months.”</li>
                                    </ul>
                                    </p>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="p-3 m-2 h-100">
                                <h6 className="top-forum m-3"> Website Content</h6>
                                <h2 className="chart-title mb-1 ms-3 mt-3">Visual Suggestions:</h2>
                                <p className=" m-3">
                                <ul>
                                        <li>Use a clean layout with a mix of images, videos, and icons for clarity.</li>
                                        <li>Add CTA buttons after key sections to guide patients (e.g., "Learn More" or "Book a Consultation").</li>
                                        <li>Showcase success stories with before-after visuals and videos.</li>
                                    </ul>
                                    
                                    
                                    </p>
                                <h2 className="chart-title mb-1 ms-3 mt-3 "> Content Suggestions:</h2>
                                <p className=" m-3">
                                <ul>
                                        <li>Structure pages clearly: Benefits, How It Works, and Success Stories sections.</li>
                                        <li>Simplify medical language with clear, patient-friendly terms.</li>
                                        <li>Include relatable patient testimonials and treatment outcomes to build trust.</li>
                                    </ul>
                                    </p>
                            </Card>
                        </Col>
                        {/* <Col lg={4}>
                        <Card className="p-3 m-2">
                            <DoubleBarChart data={websiteData2} title={title2} />
                        </Card>
                    </Col> */}
                        {/* <Col lg={4}>
                        <Card className="p-3 m-2">
                            <DoubleBarChart data={websiteData3} title={title3} />
                        </Card>
                    </Col> */}
                    </Row>
                    {/* Render CommentSection only if no disease is selected */}
                    {/* <CommentSection commentsData={commentsWebsiteData} /> */}
                </Card>
            </div >
        </>
    )

}