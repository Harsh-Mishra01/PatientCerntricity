import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/content.css";
import { DoubleBarChart } from "../charts/DoubleBarChart";
import jsonData from "../demo/conversion.json"; // Import your JSON data file
import { SegmentPart } from "../components/SegmentPart";
import { TopBrands } from "../components/TopBrands";

import { CommentSection } from "../components/CommentSection";
import { Header } from "../components/Header";
import SupportStack from "../charts/SupportStack";
import ValuesChart from "../charts/ValuesChart";
import TrialStackChart from "../charts/TrialStackChart";
import { chartData1, chartData2, chartData3, chartData7, chartData8, chartData9 } from "../static/data";
// Function to filter data by category
const filterDataByCategory = (category) => {
  return jsonData.filter((item) => item.Category === category);
};

export default function SupportPage() {
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
      name: "Financial Support",
    },
    {
      name: "Nursing support",
    },
    {
      name: "Paperwork support",
    },
  ]);

  const [TopDrug, setTopDrug] = useState([
    {
      name: "Ozempic",
      percentage: "1.20%",
    },
    {
      name: "Januvia",
      percentage: "1.00%",
    },
    {
      name: "Jardiance",
      percentage: "0.80%",
    },
    {
      name: "Victoza",
      percentage: "0.70%",
    },
    {
      name: "Trulicity",
      percentage: "0.60%",
    },
    {
      name: "Wegovy",
      percentage: "0.50%",
    },
    {
      name: "Saxenda",
      percentage: "0.40%",
    },
    {
      name: "Invokana",
      percentage: "0.30%",
    },
    {
      name: "Farxiga",
      percentage: "0.20%",
    },
    {
      name: "Byetta",
      percentage: "0.10%",
    },
    {
      name: "Apidra",
      percentage: "0.10%",
    },
    {
      name: "Levemir",
      percentage: "0.10%",
    },
    {
      name: "Humalog",
      percentage: "0.00%",
    },
    {
      name: "Novolog",
      percentage: "0.00%",
    },
    {
      name: "Fiasp",
      percentage: "0.00%",
    },
    {
      name: "Nesina",
      percentage: "0.00%",
    },
    {
      name: "Steglatro",
      percentage: "0.00%",
    },
    {
      name: "Evogliptin",
      percentage: "0.00%",
    },
    {
      name: "Omarigliptin",
      percentage: "0.00%",
    },
    {
      name: "Jentadueto",
      percentage: "0.00%",
    },
    {
      name: "Onglyza",
      percentage: "0.00%",
    },
    {
      name: "Basaglar",
      percentage: "0.00%",
    },
    {
      name: "Glucophage",
      percentage: "0.00%",
    },
    {
      name: "Fortamet",
      percentage: "0.00%",
    },
    {
      name: "Mounjaro",
      percentage: "0.00%",
    },
    {
      name: "Janumet",
      percentage: "0.00%",
    },
    {
      name: "Basaglar",
      percentage: "0.00%",
    },
  ]);
  const [commentsFinancialSupport, setCommentsFinancialSupport] = useState([
    {
      platform: "Reddit",
      content:
        "Is anyone else having trouble using their Ozempic discount card? Apparently there was a nationwide cyberattack & pharmacies have been unable to process the discount resulting in ridiculous prices for the medication. If you're having issues you can give Nordisk (Ozempic manufacturer) a call at 1-800-727-6500. They can provide you with new BIN & PCN numbers to give to the pharmacist so they can process your discount. When you call have your discount card handy as they'll ask you for your group number. Also get comfy when you call because you'll likely be on hold for awhile. Hope this helps someone. I know there are folks who can't afford this medication without that discount! ☹",
    },
    {
      platform: "Reddit",
      content:
        "Do you guys pay for ozempic? If you do how much? Does your insurance cover it? Do any of you use programs to get your meds like Found Golo or Noom?",
    },
    {
      platform: "Reddit",
      content:
        "Insurance won’t cover/approve me.\nQuestion\nShould I shell out the $1200.00 a month?",
    },
    {
      platform: "Reddit",
      content:
        "Hello I have started Ozempic yesterday at 0.25 mg. My doctor said I do not need to increase the dose if I lose weight but I am his first patient who is trying Ozempic. I have heard that people only lose weight on 1 mg and I want to know if anyone has experienced weight loss at lower doses. Thanks in advance.",
    },
    {
      platform: "Reddit",
      content:
        "My Walgreens said the discount card fails because I'm not diabetic and only using Zepbound for weight loss. I think that is incorrect - it's my health insurance that won't cover unless it's for diabetes not the discount card.\nThere is some kind of GoodRX discount that reduces the uninsured price from over $1200 to $1092.38. Is it possible that the GoodRx discount is what is not allowing the Lily discount card to work and if I can get them to process the Lily card showing I have no insurance then it will go through?\nWalgreens was extremely unhelpful.",
    },
    {
      platform: "Reddit",
      content:
        "Hi everyone I recently started down the path of insulin. My endocrinologist has me on Tresiba in the morning and then wants me to use NovoLog as needed when I eat. Between my insurance and a discount card the Tresiba price is actually really good. I was hoping the same would be said for the Novolog but so far I am turning up dead ends and the cheapest I have gotten it down to is $436. I am going to keep searching online for different discount cards but I was wondering if anyone had any pointers on ways to reduce the cost?",
    },
    {
      platform: "Reddit",
      content:
        "I'm a podder who switched from MDI 2 years ago. At that time I got an Rx discount card from Novo that made my copay $75 for 3 vials. I didn't realize the card had expired and my copay just jumped to $250.\nHas anyone had any experience or luck with trying to get another one of these cards? I know $250 isn't terrible and many others have much higher copays but I'm on a strict budget and having my Rx expense jump 233% is killer.",
    },
    {
      platform: "Reddit",
      content:
        "I went yesterday to refill my insulin prescription Novalog and cost even with insurance is thru the roof in my opinion. Insurance is Blue Cross of AL and I get 6 vials as a 3 month supply. Cost running thru insurance is almost $400 and cost with a manufacturer coupon is almost $200! Last year it was $131.00!\nWTH? I think two things are happening costs are up and my employer's insurance sucks! BTW yes I have already met my annual deductible.\nWhat do you folks pay? (US only please I realize other countries have it much better with healthcare!)\nEdit: Thanks to all for their input! I will read all of them when I have time wasn't expecting this many replies. I spent over an hour with my insurance company thing morning and seems like my employer changed prescription plans on January 1 which changed everything! First off prescriptions now do not go towards your annual deductible! WTH? The way our plan works now is meds have Tiers they are placed into and almost everything insulin or diabetic related that is an injectable is a Tier 2 drug to them. This means until I reach my out of pocket maximum for the year ($5700) insurance pays 25% and I pay 75% of the cost. On top of that I cannot use any of the manufacturers coupons in conjunction with insurance it's one or the other. If I do find a coupon that's cheaper and use it then that money doesn't go toward my annual out of pocket money.\nSorry but it's all a damn racket! I pay substantial money from my paycheck every two weeks and the prescription part of insurance just sucks!",
    },
    {
      platform: "Reddit",
      content:
        "Tips on saving money on Insulin?\nHello fellow Diabetics! I am type one (for about 14 years now) and recently was booted off my parents' heath insurance by turning the dreaded 26. My job has a TERRIBLE high deductible and I have to pay full price for my Humalog and Basaglar are running me upwards of $600+ a month. Do you guys have any tips coupons programs you use to lessen the blow of this expensive as hell disease in the United States?\nHelp me I'm poor and my pancreas doesn't work :(",
    },
    {
      platform: "Reddit",
      content:
        "First I know I am very fortunate to have good healthcare while so many in the US do not. I just saw this obscene cost (paid by insurance) on my Rx receipt and thought someone here might know what it actually represents.\nhttps://imgur.com/a/SMrH7Wa\nIf $1295.99 is the actual cost for 4 vials of insulin the system is even worse than I thought.\nEdit: U&C means ‘usual and customary’ and is otherwise known as a list price. This includes lots of inflation from pharmacy middlemen. Thank you all for the info.\nAlso ANYONE can receive $35 insulin using Novolog’s discount card. I’ll be sure to pass this along.",
    },
  ]);
  const [commentsNursingSupport, setCommentsNursingSupport] = useState([
    {
      platform: "Reddit",
      content:
        "Mine: T2DM patient went to larger hospital for toe amputation. While there nurses gave him…50 OF NOVARAPID INSTEAD OF 5. How this happened defies all logic and remains a mystery to me. Anyway pt ended up in ICU but made a good recovery. Share your stories.",
    },
    {
      platform: "Reddit",
      content:
        "I work in an urgent care and yesterday I consulted on a patient who went to the ER for feeling sick. He was diagnosed to be a diabetic with a hba1c of 12.8 and fasting blood glucose of 258. In-house urinalysis revealed ketone and glucose in the urine. He was very dehydrated. Technically I should refer him to the ER but patient reported that ER discharged them a week ago without any treatment as they have no insurance. the greatest issue is they are my supervisor’s acquaintance. So she started pitching in treatment plan from home. She told me to prescribe metformin (which is understandable) but she also wanted me to start him on 40 units of novolog 70/30 in the morning. I was not comfortable doing that. He is a newly diagnosed diabetic who needs extensive education about the disease. Patient is non-English speaking with a low literacy level. He came in with his stepdaughter who was not living with him. They also report a 20 pound weight loss in two months. this is a patient who at the very least needs to be followed up by a primary care provider with a comprehensive evaluation. He also had high lipids and high triglycerides and elevated liver enzymes. And I have two other patients waiting for me in the waiting room. How can I just like that? how can I just like that? Prescribed such a high unit high dose of insulin to a patient without teaching him on the techniques making him read demonstrate to me teaching him about signs of hypoglycemia and what to do when it happens Prescribe such a high dose of insulin to a patient without teaching him on the techniques making him return demonstrate to me teaching him about signs of hypoglycemia and what to do when it happens. I told her that I am not comfortable with the treatment plan and if she wants to do it she is free to do it herself. Am I wrong? Should I have done anything differently?",
    },
    {
      platform: "Reddit",
      content:
        "Honestly I feel like everybody is toting Ozempic as this miracle drug that helps people lose weight with no side effects. Years ago I seen it occasionally for my diabetics.\nNow I’ve seen tons of patients who’ve had problems with. I’ve had two patients within a few weeks of eachother who have been hospitalized because they’re having major problems with their pancreas from taking Ozempic.\nI can’t be the only one who’s been seeing this.",
    },
    {
      platform: "Reddit",
      content:
        "I am a nursing student and my professor always brings up articles before class. Today’s article about children using ozempic and getting bariatric surgery and basically went on a rant about how the food in this country is so devoid of nutrition and packaged foods are even worse.\nThere’s also much talk of this in my own live amongst friends and family mainly about it being “new” and a cheat code but with unknown long term side effects. I didn’t consider it in terms of application beyond that until this class because one day this will be a real issue I will be facing and I want to have a well rounded perspective.\nMy professor then went on to explain how while ozempic is probably a great solution for diabetics he fears that it’s a lifelong drug and that we can’t just teach people to eat better. My professor is also overweight himself which I would never rudely point out to make a point but it IS the point that education is not the barrier to a healthy weight! There’s fat nurses and doctors! That’s clearly NOT it!\nWhile everyone can agree that sociocultural things such as better school nutrition easier access to health cheap foods and better overall health education would benefit society I feel like we need to live in reality with this one.\nIt got me thinking why are we blaming fat people for their weight now that there’s a medical intervention that will actually help them with remarkable adherence? Dieting has low adherence. We put people on blood pressure medication and blood thinner for life and nobody bats an eye. Now we’re talking about a drug that will actually have the potential to replace all these other drugs because it attacks the root of those weight related health issues and everyone has a problem and is saying things like “it’s a great money maker” and “expiremental” (when really GLP medication HAS been around for around 10 years! still less than blood thinners and bp medications but this isn’t brand new!!!)\nWhat are your thoughts? How do you see this issue?",
    },
    {
      platform: "Reddit",
      content:
        "The title says it all. I work in a LTC facility I’m an RN supervisor. I have a lot of friends at this job except for one nurse that I work with. She I s one of the worst human beings on this planet. She is manipulative somehow has the DON ADON and our Unit Managers wrapped around her finger but everyone knows she’s a monster. We have two new people joining our staff and in that process we give all new staff members a PPD test. This nurse administered 0.1mLs of Humalog Insulin instead of Tuberculin solution. The DON had to call both of these (now potential) new employees to tell them they received insulin and not PPD solution. I wasn’t on shift yet but when I came into work everyone was talking about it. This morning this nurse was laughing about her mistake. She was not written up or reprimanded. This is also not her first huge mistake and I personally do not think she is a safe nurse to have around. My question is is this reportable? And who do I report it to? Department of Health Board of Nursing? I live in New York. Any advice would be appreciated.",
    },
    {
      platform: "Reddit",
      content:
        "Mine: T2DM patient went to larger hospital for toe amputation. While there nurses gave him…50 OF NOVARAPID INSTEAD OF 5. How this happened defies all logic and remains a mystery to me. Anyway pt ended up in ICU but made a good recovery. Share your stories.",
    },
    {
      platform: "Reddit",
      content:
        "One of my nursing school instructors told us about a student nurse who put orange juice in a patients IV because their blood sugar was low.",
    },
    {
      platform: "Reddit",
      content:
        "Saw a joke about giving a patient 10 ml of insulin and was wonder if that's just something you don't come back from or you can fix with a lot of D5. I have heard of patients going to the ICU for too much insulin but not sure how much they were given.",
    },
  ]);
  const [commentsPaperworkSupport, setCommentsPaperworkSupport] = useState([
    {
      platform: "Reddit",
      content:
        "Well…. I started ozempic April ‘23 I’m on SSDI and on Medicare/straight Medicaid in NY. everything was great. Lost 80lbs. Then had trouble with my refill.\nJust found out they stopped covering me so I’m SOL from insurance since despite having comorbid issues related to weight I don’t have type 2 diabetes.\nI’m bummed because it has helped me so much and has gotten me so much healthier going from 280 to 200. I don’t even know where to start but am considering other sources but also don’t know what is safe and not a scam etc. my concern is my health and between my thyroid and other issues this is the only thing that has worked for me.",
    },
    {
      platform: "Reddit",
      content:
        "How do you guys afford this? I have Aetna health through my job at GFS. And they want me to pay over 850 dollars for a 1 month supply. I'm diabetic and my BMI qualifies me. What are you guys doing to be able to afford this stuff?\nMy doctor is ripping me because she wants me om this stuff because I need to loose the weight but there's no way I can't even remotely afford that price monthly.\nPlease any advice and tips appreciated.\nI did try a discount card right from novocare.com it only took off 150 bucks.",
    },
    {
      platform: "Reddit",
      content:
        "I’m 260 lbs BMI is 35 and my doctor said they’d prescribe Ozempic but insurance will deny it because I’m not diabetic. What are my options? Should I try to find another doctor to prescribe it online?\nMy doctor clearly thinks that I’d benefit using it but I’m concerned that they got a directive from my company to not prescribe (it’s an in-company doctor and my company covers the cost of medicine in our plan). I’ve tried to lose this weight with diet and exercise but I haven’t been able to. Should i try an online service to get it prescribed? would that work? should i consider semaglutide in pills that i can get from mexico?",
    },
    {
      platform: "Reddit",
      content:
        "Is this happening to anyone else or is my insurance company just a special kind of horrible lol\n-I have insulin resistance/PCOS was on my way to becoming pre-diabetic/diabetic without this med. like yes I’ve lost weight and that’s good and part of what my body needed to do to get healthier and it sure wasn’t going to without medication help but I don’t take it specifically/just for weight loss. Idk if my insurance is just being gatekeep-y or what but I nearly had a heart attack when I went to check on my refill status and saw it was over $1000 for ONE PEN ",
    },
    {
      platform: "Reddit",
      content:
        "I have type 2 diabetes and currently don't have insurance. Luckily my daughter was able to find a discount card for insulin making it 35$ instead of 600$... however cannot find anything for januvia.. just a 1 week supply is 200$. Ridiculous..",
    },
    {
      platform: "Reddit",
      content:
        "Any recommendations for a clinic or doctor that prescribes the new weight loss drugs ?",
    },
    {
      platform: "Reddit",
      content:
        "Like the title says I need metformin and I have no insurance and am not sure what to do. Any help would be appreciated.",
    },
    {
      platform: "Reddit",
      content:
        "Hi the title says most of it. Asked my endocrinologist and gynecologist to please put me on metformin cause I’ve been struggling and they said “you definitely qualify for it but your insurance doesn’t cover it only people with diabetes” Has anybody else had this problem? Did you manage to get it through a different company? I really need it nothing works!",
    },
    {
      platform: "Reddit",
      content:
        "I've been managing my T2 for about 2 years now. I'm not on insulin. I'd like to use CGM to understand the impact of my food choices better. These can get expensive so I'd like to see if my insurance can cover them partly if not all the way.\nMy PCP says they cannot prescribe a CGM without me being on insulin. I'll be visiting the PCP again in a months and would like to provide them with examples where certain insuranceptoviders have covered the cost of aCGM without the patient being on insulin.\nAs an example somebody once told me that their PCP put down 'fear of needles' as justification for them to use a CGM and their insurance accepted that.\nIf you've had a similar experience or have other suggestions please share them here.",
    },
    {
      platform: "Reddit",
      content:
        'Back story: Admitted to hospital 10/2022 6\'4"" 240 lbs diagnosed with type 2 (A1C 10.5) below the knee amputation left side. Medicated with Levemir 12 units at bedtime and 1000mg Metformin twice a day. I got pretty aggressive with my diet zero sugar minimal simple carbs (whole wheat only for bread and pasta) lean protein snacks were fresh veggies and cottage cheese (not a sacrifice I\'ve always loved cottage cheese). December 2022 I had revision surgery and at the pre-surgical screening my A1C had dropped to 5.1. Doctor took me off insulin right away and had me come back in 90 days. By then my weight had dropped to 180 and I was feeling as good as a one-legged man in the ass-kicking contest called life can feel. My A1C had increased to 5.2 but the doc said that was still ""too low"" and insurance might stop paying for my Metformin (now 500mg once a day) or testing supplies. Is that even a thing that insurance will penalize you for being ""too low""? Sounds crazy to me.\nIn another 6 months I was able to increase my A1C to the 6.0 target the doctor had set but to do it I had to eat (still healthy) 5 or 6 times a day and I gained back 25 lbs. I just can\'t keep that up and now I\'m on track to go back to the low 5.x range for my next A1C test. I\'m not on insulin so not really concerned about going hypoglycemic. I never did get a satisfactory medical reason on why an A1C of 5.2 would be bad for me. I appreciate any thoughts you may offer.',
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
          name: "Ozempic",
          percentage: "1.20%",
        },
        {
          name: "Januvia",
          percentage: "1.00%",
        },
        {
          name: "Jardiance",
          percentage: "0.80%",
        },
        {
          name: "Victoza",
          percentage: "0.70%",
        },
        {
          name: "Trulicity",
          percentage: "0.60%",
        },
        {
          name: "Wegovy",
          percentage: "0.50%",
        },
        {
          name: "Saxenda",
          percentage: "0.40%",
        },
        {
          name: "Invokana",
          percentage: "0.30%",
        },
        {
          name: "Farxiga",
          percentage: "0.20%",
        },
        {
          name: "Byetta",
          percentage: "0.10%",
        },
        {
          name: "Apidra",
          percentage: "0.10%",
        },
        {
          name: "Levemir",
          percentage: "0.10%",
        },
        {
          name: "Humalog",
          percentage: "0.00%",
        },
        {
          name: "Novolog",
          percentage: "0.00%",
        },
        {
          name: "Fiasp",
          percentage: "0.00%",
        },
        {
          name: "Nesina",
          percentage: "0.00%",
        },
        {
          name: "Steglatro",
          percentage: "0.00%",
        },
        {
          name: "Evogliptin",
          percentage: "0.00%",
        },
        {
          name: "Omarigliptin",
          percentage: "0.00%",
        },
        {
          name: "Jentadueto",
          percentage: "0.00%",
        },
        {
          name: "Onglyza",
          percentage: "0.00%",
        },
        {
          name: "Basaglar",
          percentage: "0.00%",
        },
        {
          name: "Glucophage",
          percentage: "0.00%",
        },
        {
          name: "Fortamet",
          percentage: "0.00%",
        },
        {
          name: "Mounjaro",
          percentage: "0.00%",
        },
        {
          name: "Janumet",
          percentage: "0.00%",
        },
        {
          name: "Basaglar",
          percentage: "0.00%",
        },
      ]);
      setCommentsFinancialSupport([
        {
          platform: "Reddit",
          content:
            "Is anyone else having trouble using their Ozempic discount card? Apparently there was a nationwide cyberattack & pharmacies have been unable to process the discount resulting in ridiculous prices for the medication. If you're having issues you can give Nordisk (Ozempic manufacturer) a call at 1-800-727-6500. They can provide you with new BIN & PCN numbers to give to the pharmacist so they can process your discount. When you call have your discount card handy as they'll ask you for your group number. Also get comfy when you call because you'll likely be on hold for awhile. Hope this helps someone. I know there are folks who can't afford this medication without that discount! ☹",
        },
        {
          platform: "Reddit",
          content:
            "Do you guys pay for ozempic? If you do how much? Does your insurance cover it? Do any of you use programs to get your meds like Found Golo or Noom?",
        },
        {
          platform: "Reddit",
          content:
            "Insurance won’t cover/approve me.\nQuestion\nShould I shell out the $1200.00 a month?",
        },
        {
          platform: "Reddit",
          content:
            "Hello I have started Ozempic yesterday at 0.25 mg. My doctor said I do not need to increase the dose if I lose weight but I am his first patient who is trying Ozempic. I have heard that people only lose weight on 1 mg and I want to know if anyone has experienced weight loss at lower doses. Thanks in advance.",
        },
        {
          platform: "Reddit",
          content:
            "My Walgreens said the discount card fails because I'm not diabetic and only using Zepbound for weight loss. I think that is incorrect - it's my health insurance that won't cover unless it's for diabetes not the discount card.\nThere is some kind of GoodRX discount that reduces the uninsured price from over $1200 to $1092.38. Is it possible that the GoodRx discount is what is not allowing the Lily discount card to work and if I can get them to process the Lily card showing I have no insurance then it will go through?\nWalgreens was extremely unhelpful.",
        },
        {
          platform: "Reddit",
          content:
            "Hi everyone I recently started down the path of insulin. My endocrinologist has me on Tresiba in the morning and then wants me to use NovoLog as needed when I eat. Between my insurance and a discount card the Tresiba price is actually really good. I was hoping the same would be said for the Novolog but so far I am turning up dead ends and the cheapest I have gotten it down to is $436. I am going to keep searching online for different discount cards but I was wondering if anyone had any pointers on ways to reduce the cost?",
        },
        {
          platform: "Reddit",
          content:
            "I'm a podder who switched from MDI 2 years ago. At that time I got an Rx discount card from Novo that made my copay $75 for 3 vials. I didn't realize the card had expired and my copay just jumped to $250.\nHas anyone had any experience or luck with trying to get another one of these cards? I know $250 isn't terrible and many others have much higher copays but I'm on a strict budget and having my Rx expense jump 233% is killer.",
        },
        {
          platform: "Reddit",
          content:
            "I went yesterday to refill my insulin prescription Novalog and cost even with insurance is thru the roof in my opinion. Insurance is Blue Cross of AL and I get 6 vials as a 3 month supply. Cost running thru insurance is almost $400 and cost with a manufacturer coupon is almost $200! Last year it was $131.00!\nWTH? I think two things are happening costs are up and my employer's insurance sucks! BTW yes I have already met my annual deductible.\nWhat do you folks pay? (US only please I realize other countries have it much better with healthcare!)\nEdit: Thanks to all for their input! I will read all of them when I have time wasn't expecting this many replies. I spent over an hour with my insurance company thing morning and seems like my employer changed prescription plans on January 1 which changed everything! First off prescriptions now do not go towards your annual deductible! WTH? The way our plan works now is meds have Tiers they are placed into and almost everything insulin or diabetic related that is an injectable is a Tier 2 drug to them. This means until I reach my out of pocket maximum for the year ($5700) insurance pays 25% and I pay 75% of the cost. On top of that I cannot use any of the manufacturers coupons in conjunction with insurance it's one or the other. If I do find a coupon that's cheaper and use it then that money doesn't go toward my annual out of pocket money.\nSorry but it's all a damn racket! I pay substantial money from my paycheck every two weeks and the prescription part of insurance just sucks!",
        },
        {
          platform: "Reddit",
          content:
            "Tips on saving money on Insulin?\nHello fellow Diabetics! I am type one (for about 14 years now) and recently was booted off my parents' heath insurance by turning the dreaded 26. My job has a TERRIBLE high deductible and I have to pay full price for my Humalog and Basaglar are running me upwards of $600+ a month. Do you guys have any tips coupons programs you use to lessen the blow of this expensive as hell disease in the United States?\nHelp me I'm poor and my pancreas doesn't work :(",
        },
        {
          platform: "Reddit",
          content:
            "First I know I am very fortunate to have good healthcare while so many in the US do not. I just saw this obscene cost (paid by insurance) on my Rx receipt and thought someone here might know what it actually represents.\nhttps://imgur.com/a/SMrH7Wa\nIf $1295.99 is the actual cost for 4 vials of insulin the system is even worse than I thought.\nEdit: U&C means ‘usual and customary’ and is otherwise known as a list price. This includes lots of inflation from pharmacy middlemen. Thank you all for the info.\nAlso ANYONE can receive $35 insulin using Novolog’s discount card. I’ll be sure to pass this along.",
        },
      ]);
      setCommentsPaperworkSupport([
        {
          platform: "Reddit",
          content:
            "Mine: T2DM patient went to larger hospital for toe amputation. While there nurses gave him…50 OF NOVARAPID INSTEAD OF 5. How this happened defies all logic and remains a mystery to me. Anyway pt ended up in ICU but made a good recovery. Share your stories.",
        },
        {
          platform: "Reddit",
          content:
            "I work in an urgent care and yesterday I consulted on a patient who went to the ER for feeling sick. He was diagnosed to be a diabetic with a hba1c of 12.8 and fasting blood glucose of 258. In-house urinalysis revealed ketone and glucose in the urine. He was very dehydrated. Technically I should refer him to the ER but patient reported that ER discharged them a week ago without any treatment as they have no insurance. the greatest issue is they are my supervisor’s acquaintance. So she started pitching in treatment plan from home. She told me to prescribe metformin (which is understandable) but she also wanted me to start him on 40 units of novolog 70/30 in the morning. I was not comfortable doing that. He is a newly diagnosed diabetic who needs extensive education about the disease. Patient is non-English speaking with a low literacy level. He came in with his stepdaughter who was not living with him. They also report a 20 pound weight loss in two months. this is a patient who at the very least needs to be followed up by a primary care provider with a comprehensive evaluation. He also had high lipids and high triglycerides and elevated liver enzymes. And I have two other patients waiting for me in the waiting room. How can I just like that? how can I just like that? Prescribed such a high unit high dose of insulin to a patient without teaching him on the techniques making him read demonstrate to me teaching him about signs of hypoglycemia and what to do when it happens Prescribe such a high dose of insulin to a patient without teaching him on the techniques making him return demonstrate to me teaching him about signs of hypoglycemia and what to do when it happens. I told her that I am not comfortable with the treatment plan and if she wants to do it she is free to do it herself. Am I wrong? Should I have done anything differently?",
        },
        {
          platform: "Reddit",
          content:
            "Honestly I feel like everybody is toting Ozempic as this miracle drug that helps people lose weight with no side effects. Years ago I seen it occasionally for my diabetics.\nNow I’ve seen tons of patients who’ve had problems with. I’ve had two patients within a few weeks of eachother who have been hospitalized because they’re having major problems with their pancreas from taking Ozempic.\nI can’t be the only one who’s been seeing this.",
        },
        {
          platform: "Reddit",
          content:
            "I am a nursing student and my professor always brings up articles before class. Today’s article about children using ozempic and getting bariatric surgery and basically went on a rant about how the food in this country is so devoid of nutrition and packaged foods are even worse.\nThere’s also much talk of this in my own live amongst friends and family mainly about it being “new” and a cheat code but with unknown long term side effects. I didn’t consider it in terms of application beyond that until this class because one day this will be a real issue I will be facing and I want to have a well rounded perspective.\nMy professor then went on to explain how while ozempic is probably a great solution for diabetics he fears that it’s a lifelong drug and that we can’t just teach people to eat better. My professor is also overweight himself which I would never rudely point out to make a point but it IS the point that education is not the barrier to a healthy weight! There’s fat nurses and doctors! That’s clearly NOT it!\nWhile everyone can agree that sociocultural things such as better school nutrition easier access to health cheap foods and better overall health education would benefit society I feel like we need to live in reality with this one.\nIt got me thinking why are we blaming fat people for their weight now that there’s a medical intervention that will actually help them with remarkable adherence? Dieting has low adherence. We put people on blood pressure medication and blood thinner for life and nobody bats an eye. Now we’re talking about a drug that will actually have the potential to replace all these other drugs because it attacks the root of those weight related health issues and everyone has a problem and is saying things like “it’s a great money maker” and “expiremental” (when really GLP medication HAS been around for around 10 years! still less than blood thinners and bp medications but this isn’t brand new!!!)\nWhat are your thoughts? How do you see this issue?",
        },
        {
          platform: "Reddit",
          content:
            "The title says it all. I work in a LTC facility I’m an RN supervisor. I have a lot of friends at this job except for one nurse that I work with. She I s one of the worst human beings on this planet. She is manipulative somehow has the DON ADON and our Unit Managers wrapped around her finger but everyone knows she’s a monster. We have two new people joining our staff and in that process we give all new staff members a PPD test. This nurse administered 0.1mLs of Humalog Insulin instead of Tuberculin solution. The DON had to call both of these (now potential) new employees to tell them they received insulin and not PPD solution. I wasn’t on shift yet but when I came into work everyone was talking about it. This morning this nurse was laughing about her mistake. She was not written up or reprimanded. This is also not her first huge mistake and I personally do not think she is a safe nurse to have around. My question is is this reportable? And who do I report it to? Department of Health Board of Nursing? I live in New York. Any advice would be appreciated.",
        },
        {
          platform: "Reddit",
          content:
            "Mine: T2DM patient went to larger hospital for toe amputation. While there nurses gave him…50 OF NOVARAPID INSTEAD OF 5. How this happened defies all logic and remains a mystery to me. Anyway pt ended up in ICU but made a good recovery. Share your stories.",
        },
        {
          platform: "Reddit",
          content:
            "One of my nursing school instructors told us about a student nurse who put orange juice in a patients IV because their blood sugar was low.",
        },
        {
          platform: "Reddit",
          content:
            "Saw a joke about giving a patient 10 ml of insulin and was wonder if that's just something you don't come back from or you can fix with a lot of D5. I have heard of patients going to the ICU for too much insulin but not sure how much they were given.",
        },
      ]);
      setCommentsNursingSupport([
        {
          platform: "Reddit",
          content:
            "Well…. I started ozempic April ‘23 I’m on SSDI and on Medicare/straight Medicaid in NY. everything was great. Lost 80lbs. Then had trouble with my refill.\nJust found out they stopped covering me so I’m SOL from insurance since despite having comorbid issues related to weight I don’t have type 2 diabetes.\nI’m bummed because it has helped me so much and has gotten me so much healthier going from 280 to 200. I don’t even know where to start but am considering other sources but also don’t know what is safe and not a scam etc. my concern is my health and between my thyroid and other issues this is the only thing that has worked for me.",
        },
        {
          platform: "Reddit",
          content:
            "How do you guys afford this? I have Aetna health through my job at GFS. And they want me to pay over 850 dollars for a 1 month supply. I'm diabetic and my BMI qualifies me. What are you guys doing to be able to afford this stuff?\nMy doctor is ripping me because she wants me om this stuff because I need to loose the weight but there's no way I can't even remotely afford that price monthly.\nPlease any advice and tips appreciated.\nI did try a discount card right from novocare.com it only took off 150 bucks.",
        },
        {
          platform: "Reddit",
          content:
            "I’m 260 lbs BMI is 35 and my doctor said they’d prescribe Ozempic but insurance will deny it because I’m not diabetic. What are my options? Should I try to find another doctor to prescribe it online?\nMy doctor clearly thinks that I’d benefit using it but I’m concerned that they got a directive from my company to not prescribe (it’s an in-company doctor and my company covers the cost of medicine in our plan). I’ve tried to lose this weight with diet and exercise but I haven’t been able to. Should i try an online service to get it prescribed? would that work? should i consider semaglutide in pills that i can get from mexico?",
        },
        {
          platform: "Reddit",
          content:
            "Is this happening to anyone else or is my insurance company just a special kind of horrible lol\n-I have insulin resistance/PCOS was on my way to becoming pre-diabetic/diabetic without this med. like yes I’ve lost weight and that’s good and part of what my body needed to do to get healthier and it sure wasn’t going to without medication help but I don’t take it specifically/just for weight loss. Idk if my insurance is just being gatekeep-y or what but I nearly had a heart attack when I went to check on my refill status and saw it was over $1000 for ONE PEN ",
        },
        {
          platform: "Reddit",
          content:
            "I have type 2 diabetes and currently don't have insurance. Luckily my daughter was able to find a discount card for insulin making it 35$ instead of 600$... however cannot find anything for januvia.. just a 1 week supply is 200$. Ridiculous..",
        },
        {
          platform: "Reddit",
          content:
            "Any recommendations for a clinic or doctor that prescribes the new weight loss drugs ?",
        },
        {
          platform: "Reddit",
          content:
            "Like the title says I need metformin and I have no insurance and am not sure what to do. Any help would be appreciated.",
        },
        {
          platform: "Reddit",
          content:
            "Hi the title says most of it. Asked my endocrinologist and gynecologist to please put me on metformin cause I’ve been struggling and they said “you definitely qualify for it but your insurance doesn’t cover it only people with diabetes” Has anybody else had this problem? Did you manage to get it through a different company? I really need it nothing works!",
        },
        {
          platform: "Reddit",
          content:
            "I've been managing my T2 for about 2 years now. I'm not on insulin. I'd like to use CGM to understand the impact of my food choices better. These can get expensive so I'd like to see if my insurance can cover them partly if not all the way.\nMy PCP says they cannot prescribe a CGM without me being on insulin. I'll be visiting the PCP again in a months and would like to provide them with examples where certain insuranceptoviders have covered the cost of aCGM without the patient being on insulin.\nAs an example somebody once told me that their PCP put down 'fear of needles' as justification for them to use a CGM and their insurance accepted that.\nIf you've had a similar experience or have other suggestions please share them here.",
        },
        {
          platform: "Reddit",
          content:
            'Back story: Admitted to hospital 10/2022 6\'4"" 240 lbs diagnosed with type 2 (A1C 10.5) below the knee amputation left side. Medicated with Levemir 12 units at bedtime and 1000mg Metformin twice a day. I got pretty aggressive with my diet zero sugar minimal simple carbs (whole wheat only for bread and pasta) lean protein snacks were fresh veggies and cottage cheese (not a sacrifice I\'ve always loved cottage cheese). December 2022 I had revision surgery and at the pre-surgical screening my A1C had dropped to 5.1. Doctor took me off insulin right away and had me come back in 90 days. By then my weight had dropped to 180 and I was feeling as good as a one-legged man in the ass-kicking contest called life can feel. My A1C had increased to 5.2 but the doc said that was still ""too low"" and insurance might stop paying for my Metformin (now 500mg once a day) or testing supplies. Is that even a thing that insurance will penalize you for being ""too low""? Sounds crazy to me.\nIn another 6 months I was able to increase my A1C to the 6.0 target the doctor had set but to do it I had to eat (still healthy) 5 or 6 times a day and I gained back 25 lbs. I just can\'t keep that up and now I\'m on track to go back to the low 5.x range for my next A1C test. I\'m not on insulin so not really concerned about going hypoglycemic. I never did get a satisfactory medical reason on why an A1C of 5.2 would be bad for me. I appreciate any thoughts you may offer.',
        },
      ]);
      setwebsiteData([
        { name: "Ozempic", value: 12, value2: 15 },
        { name: "Victoza", value: 7, value2: 12 },
        { name: "Trulicity", value: 6, value2: 10 },
        { name: "Wegovy", value: 4, value2: 8 },
        { name: "Saxenda", value: 3, value2: 6 },
        { name: "Byetta", value: 3, value2: 4 },
      ]);
      setwebsiteData2([
        { name: "Jardiance", value: 8, value2: 15 },
        { name: "Glucophage", value: 7, value2: 14 }, // Added new entry
        { name: "Invokana", value: 6, value2: 12 },
        { name: "Farxiga", value: 5, value2: 10 },
        { name: "Apdira", value: 4, value2: 8 }, // Added new entry
        { name: "Levemir", value: 3, value2: 7 }, // Added new entry
        { name: "Byetta", value: 3, value2: 6 },
      ]);
      setwebsiteData3([
        { name: "Januvia", value: 12, value2: 18 },
        { name: "Janumet", value: 10, value2: 16 },
        { name: "Onglyza", value: 8, value2: 14 },
        { name: "Nesina", value: 7, value2: 12 },
        { name: "Evogliptin", value: 6, value2: 10 },
        { name: "Omarigliptin", value: 5, value2: 8 },
        { name: "Jentadueto", value: 4, value2: 6 },
      ]);
      setnursingData([
        { name: "Ozempic", value: 12, value2: 15 },
        { name: "Victoza", value: 7, value2: 9 },
        { name: "Trulicity", value: 6, value2: 7 },
        { name: "Wegovy", value: 4, value2: 6 },
        { name: "Saxenda", value: 3, value2: 4 },
        { name: "Byetta", value: 3, value2: 3 },
      ]);
      setnursingData2([
        { name: "Ozempic", value: 15, value2: 17 },
        { name: "Januvia", value: 13, value2: 15 },
        { name: "Jardiance", value: 8, value2: 12 },
        { name: "Victoza", value: 9, value2: 10 },
        { name: "Truclicity", value: 6, value2: 8 },
        { name: "Wegovy", value: 4, value2: 6 },
        { name: "Saxenda", value: 3, value2: 5 },
        { name: "Invokana", value: 3, value2: 4 },
        { name: "Farxiga", value: 2, value2: 4 },
        { name: "Byetta", value: 3, value2: 3 },
      ]);
      setnursingData3([
        { name: "Januvia", value: 15, value2: 20 },
        { name: "Janumet", value: 12, value2: 18 },
        { name: "Onglyza", value: 10, value2: 16 },
        { name: "Nesina", value: 8, value2: 14 },
        { name: "Evogliptin", value: 7, value2: 13 },
        { name: "Omarigliptin", value: 5, value2: 11 },
        { name: "Jentadueto", value: 4, value2: 10 },
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
        { name: "Humira", value: 14, value2: 26 },
        { name: "Enbrel", value: 9, value2: 22 },
        { name: "Remicade", value: 7, value2: 17 },
        { name: "Orencia", value: 6, value2: 15 },
        { name: "Actemra", value: 11, value2: 13 },
        { name: "Xeljanz", value: 4, value2: 11 },
        { name: "Rinvoq", value: 3, value2: 5 },
        { name: "Cimzia", value: 3, value2: 4 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 3, value2: 3 },
      ]);
      setwebsiteData3([
        { name: "Kineret", value: 25, value2: 30 },
        { name: "Arava", value: 20, value2: 27 },
        { name: "Plaquenil", value: 15, value2: 23 },
        { name: "Imuran", value: 12, value2: 20 },
        { name: "Trexall", value: 8, value2: 17 },
        { name: "Otrexup", value: 6, value2: 12 },
        { name: "Rasuvo", value: 5, value2: 10 },
        { name: "Kevzara", value: 4, value2: 8 },
        { name: "Stelara", value: 3, value2: 6 },
        { name: "Tremfya", value: 2, value2: 4 },
      ]);

      setnursingData([
        { name: "Humira", value: 28, value2: 28 },
        { name: "Enbrel", value: 22, value2: 25 },
        { name: "Remicade", value: 17, value2: 20 },
        { name: "Orencia", value: 13, value2: 18 },
        { name: "Actemra", value: 6, value2: 16 },
        { name: "Xeljanz", value: 7, value2: 14 },
        { name: "Rinvoq", value: 3, value2: 13 },
        { name: "Cimzia", value: 3, value2: 11 },
        { name: "Simponi", value: 3, value2: 5 },
        { name: "Simponi Aria", value: 3, value2: 2 },
      ]);
      setnursingData2([
        { name: "Humira", value: 28, value2: 30 },
        { name: "Enbrel", value: 22, value2: 21 },
        { name: "Remicade", value: 17, value2: 21 },
        { name: "Orencia", value: 13, value2: 19 },
        { name: "Actemra", value: 6, value2: 14 },
        { name: "Xeljanz", value: 7, value2: 11 },
        { name: "Rinvoq", value: 9, value2: 8 },
        { name: "Cimzia", value: 6, value2: 6 },
        { name: "Simponi", value: 3, value2: 3 },
        { name: "Simponi Aria", value: 3, value2: 2 },
      ]);
      setnursingData3([
        { name: "Kineret", value: 26, value2: 30 },
        { name: "Arava", value: 22, value2: 27 },
        { name: "Plaquenil", value: 19, value2: 23 },
        { name: "Imuran", value: 15, value2: 20 },
        { name: "Trexall", value: 11, value2: 17 },
        { name: "Otrexup", value: 8, value2: 14 },
        { name: "Rasuvo", value: 5, value2: 10 },
        { name: "Kevzara", value: 4, value2: 8 },
        { name: "Stelara", value: 3, value2: 6 },
        { name: "Tremfya", value: 2, value2: 4 },
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
      setCommentsFinancialSupport([
        {
          platform: "Reddit",
          content:
            "The Humira co-pay card saved me big time. I was freaking out about the cost until my doctor told me about it. It knocked my payment down to $5 a month.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I tried to get a Simponi co-pay card, but my insurance wouldn’t cover the drug at all. I ended up switching to something else because it was just too expensive.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "Anyone else have trouble using the Enbrel co-pay card? My pharmacy kept messing up the claim, and it took weeks to get it sorted. The savings are worth it, but it’s such a hassle sometimes.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I was on Remicade, but the insurance paperwork was a nightmare. Even with the co-pay assistance, I still ended up with a bunch of surprise bills. Wish they were more transparent.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I didn’t even know about the Cimzia co-pay card until a friend mentioned it. My insurance was giving me trouble, but the card brought my out-of-pocket cost way down.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I applied for the Orencia co-pay assistance, and it was a lifesaver. My insurance wouldn’t cover the full cost, but now I pay less than $10 a month.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "Has anyone else had problems with their Actemra co-pay card not working? My insurance company is giving me the runaround, and I’m stuck paying hundreds out of pocket.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I tried to get help with the Rituxan co-pay card, but it’s still super expensive, even with insurance. I’m starting to wonder if it’s worth it.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "My insurance initially denied Humira, but after some back-and-forth and applying for the co-pay card, I finally got it covered. It took months, though!",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "The Enbrel co-pay card was easy to apply for, but my insurance still made me jump through hoops to get coverage. They really make you work for these benefits.",
          User: "User",
          Bucket: "Financial support",
        },
      ]);
      setCommentsNursingSupport([
        {
          platform: "Reddit",
          content:
            "The nurse who helped me with Humira was amazing. She walked me through my first injection step by step and followed up a week later to see how I was doing. That support made a huge difference.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "When I started Enbrel, the nursing support was top-notch. They had someone available 24/7 if I had questions, and I called them a few times when I wasn’t sure about my dosage.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "I was really nervous about starting Simponi, but the nurse gave me so much reassurance. She even called me after a month to check in and see how I was feeling on the medication.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "The nursing support for Remicade was great at first, but after a few months, they stopped checking in. I kind of wish they were more consistent with their follow-up calls.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "The Cimzia nurse came to my house to show me how to inject the medication, which was super helpful since I was so anxious about doing it on my own. I didn’t expect that level of personal support.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "I had a nurse show me how to use Orencia, and she was really patient with me. I asked a million questions, and she answered everything. It made me feel a lot more confident.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "The nurse for my Actemra treatment was kind, but I felt like she didn’t have enough time for me. It seemed rushed, and I had to figure out some of the side effects on my own.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "Nursing support for Rituxan has been excellent. They helped me understand what to expect during infusions, and they always check in before and after each treatment.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "I didn’t get much from the Celebrex nurse team, but honestly, it’s not as complicated a drug to take compared to biologics. Still, it would’ve been nice to have more guidance upfront.",
          User: "User",
          Bucket: "Nursing support",
        },
        {
          platform: "Reddit",
          content:
            "The nurse for my Humira treatment was great at explaining things, but she didn’t mention some of the side effects I experienced. I ended up calling later for clarification, which was frustrating.",
          User: "User",
          Bucket: "Nursing support",
        },
      ]);
      setCommentsPaperworkSupport([
        {
          platform: "Reddit",
          content:
            "I got so lost in the Humira insurance paperwork. Luckily, my doctor’s office had a staff member who helped me navigate it all. I honestly would have given up without their support.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "When I was trying to get Enbrel covered, the paperwork was a nightmare. My nurse helped me fill it out, but it still took forever to hear back from the insurance company.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I had a great experience with Cimzia when it came to insurance. My pharmacist really walked me through the paperwork and made sure everything was submitted correctly.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "Getting Simponi approved felt like a full-time job. I ended up calling my insurance multiple times, and each rep told me different things. I wish my doctor’s office had better support for the paperwork.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "The Remicade paperwork was overwhelming, but my rheumatologist's office had a dedicated person to help. It made the process smoother, but it still took way longer than expected.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I found the insurance paperwork for Orencia confusing, but my nurse was so patient and helped me understand what was needed. I felt like I had someone in my corner.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "The paperwork for Rituxan was a mess, and my insurance kept denying it. Thankfully, my doctor’s office appealed it on my behalf, but it was so stressful waiting for answers.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "For my Actemra treatment, I had to fill out so many forms. The staff at the clinic were pretty helpful, but I still ended up making a few mistakes. I wish they had a checklist to follow.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "My experience with Celebrex was pretty straightforward. The pharmacy handled most of the paperwork, but I still had to double-check everything. It felt like I was babysitting the process.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I spent hours on the phone dealing with Enbrel insurance paperwork. The reps were all over the place with information. It would’ve been nice if my doctor’s office had a liaison for this.",
          User: "User",
          Bucket: "Paperwork support",
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
        { name: "Otezla", value: 15, value2: 22 },
        { name: "Enbrel", value: 17, value2: 18 },
        { name: "Humira", value: 15, value2: 15 },
        { name: "Stelara", value: 8, value2: 12 },
        { name: "Cimzia", value: 6, value2: 12 },
        { name: "Tremfya", value: 4, value2: 8 },
        { name: "Skyrizi", value: 7, value2: 7 },
        { name: "Xeljanz", value: 3, value2: 7 },
        { name: "Rinvoq", value: 4, value2: 5 },
        { name: "Remicade", value: 3, value2: 2 },
      ]);
      setwebsiteData2([
        { name: "Otezla", value: 15, value2: 17 },
        { name: "Enbrel", value: 12, value2: 12 },
        { name: "Humira", value: 6, value2: 10 },
        { name: "Stelara", value: 5, value2: 9 },
        { name: "Cimzia", value: 6, value2: 7 },
        { name: "Tremfya", value: 3, value2: 6 },
        { name: "Skyrizi", value: 2, value2: 4 },
        { name: "Xeljanz", value: 3, value2: 4 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 1, value2: 3 },
      ]);
      setwebsiteData3([
        { name: "Kineret", value: 18, value2: 20 },
        { name: "Arava", value: 15, value2: 17 },
        { name: "Plaquenil", value: 12, value2: 15 },
        { name: "Imuran", value: 10, value2: 12 },
        { name: "Trexall", value: 8, value2: 10 },
        { name: "Otrexup", value: 6, value2: 8 },
        { name: "Rasuvo", value: 5, value2: 6 },
        { name: "Kevzara", value: 4, value2: 5 },
        { name: "Stelara", value: 3, value2: 4 },
        { name: "Tremfya", value: 2, value2: 3 },
      ]);
      setnursingData([
        { name: "Otezla", value: 15, value2: 20 },
        { name: "Enbrel", value: 12, value2: 19 },
        { name: "Humira", value: 10, value2: 10 },
        { name: "Stelara", value: 8, value2: 9 },
        { name: "Cimzia", value: 6, value2: 6 },
        { name: "Tremfya", value: 4, value2: 6 },
        { name: "Skyrizi", value: 3, value2: 5 },
        { name: "Xeljanz", value: 3, value2: 3 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 3, value2: 2 },
      ]);
      setnursingData2([
        { name: "Otezla", value: 15, value2: 23 },
        { name: "Enbrel", value: 12, value2: 20 },
        { name: "Humira", value: 10, value2: 19 },
        { name: "Stelara", value: 8, value2: 17 },
        { name: "Cimzia", value: 6, value2: 14 },
        { name: "Tremfya", value: 4, value2: 10 },
        { name: "Skyrizi", value: 3, value2: 6 },
        { name: "Xeljanz", value: 3, value2: 4 },
        { name: "Rinvoq", value: 3, value2: 3 },
        { name: "Remicade", value: 1, value2: 1 },
      ]);
      setnursingData3([
        { name: "Kineret", value: 18, value2: 18 },
        { name: "Arava", value: 15, value2: 16 },
        { name: "Plaquenil", value: 12, value2: 14 },
        { name: "Imuran", value: 10, value2: 12 },
        { name: "Trexall", value: 8, value2: 10 },
        { name: "Otrexup", value: 6, value2: 8 },
        { name: "Rasuvo", value: 5, value2: 6 },
        { name: "Kevzara", value: 4, value2: 5 },
        { name: "Stelara", value: 3, value2: 4 },
        { name: "Tremfya", value: 2, value2: 3 },
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
      setCommentsFinancialSupport([
        {
          platform: "Reddit",
          content:
            "I was really relieved to find out that Otezla has a copay assistance program. It significantly reduced my out-of-pocket costs, making it more affordable.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "Navigating the Enbrel copay was a bit challenging at first. But once I got in touch with their support team, they helped me find resources to lower my costs.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I'm grateful for the financial assistance options available for Humira. Without it, I wouldn't be able to afford my medication, and it's made a world of difference.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I didn't realize that Taltz offered a savings program until my doctor mentioned it. It’s such a relief to know I won’t have to choose between my health and finances.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "The copay for Cimzia was a bit high, but I was able to get help through their patient assistance program. It really eased my financial burden.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I had a tough time affording Skyrizi, but I reached out to their support line and they were super helpful. They guided me through the application process for assistance.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "The financial support options for Tremfya are fantastic! I never expected to get so much help with my copay—it’s made my treatment journey a lot less stressful.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I felt overwhelmed with the costs of Cosentyx, but their financial support team was amazing. They helped me apply for grants that covered most of my expenses.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "The copay for Rinvoq was initially daunting, but their patient assistance program really came through for me. I’m so thankful for the support!",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I wasn’t aware of the financial aid available for Zycof until my pharmacist informed me. It’s such a relief to have that safety net while managing my treatment.",
          User: "User",
          Bucket: "Financial support",
        },
        {
          platform: "Reddit",
          content:
            "I can’t express how helpful my nurse has been since I started Otezla. She always checks in on me and provides tips for managing side effects. It’s so reassuring!",
          User: "User",
          Bucket: "Financial support",
        },
      ]);
      setCommentsNursingSupport([
        {
          platform: "Reddit",
          content:
            "The nursing support I received during my Enbrel treatment made a huge difference. My nurse was always available to answer my questions and gave me the confidence to manage my care.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "I had a great experience with my Humira nurse. She walked me through the injection process and was there to support me during my first dose. It made it much less intimidating.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "The nurse I spoke with about Taltz was incredibly knowledgeable. She shared strategies to handle flare-ups, and it felt like I had someone in my corner.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "I appreciate the follow-up calls from my Cimzia nurse. It’s nice to have someone checking in and offering advice on what to expect during treatment.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "My Skyrizi nurse took the time to explain everything in detail. I felt really supported and informed about my treatment plan.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "The nursing staff during my Tremfya consultations were great! They listened to my concerns and provided tailored advice that helped me manage my symptoms.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "Having a dedicated nurse for my Cosentyx treatment was a game changer. She made sure I understood the medication and how to deal with any potential side effects.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "My Rinvoq nurse was fantastic. She helped me create a personalized plan that incorporated my lifestyle, and it really made a difference in how I handle my arthritis.",
          User: "User",
          Bucket: "Nursing sopport",
        },
        {
          platform: "Reddit",
          content:
            "I felt so supported by my Zycof nurse. She not only educated me about the medication but also offered emotional support, which is so important when dealing with chronic pain.",
          User: "User",
          Bucket: "Nursing sopport",
        },
      ]);
      setCommentsPaperworkSupport([
        {
          platform: "Reddit",
          content:
            "The paperwork for Otezla was a nightmare until I got help from their support team. They walked me through the insurance requirements, which made it much easier!",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I struggled with the insurance forms for Enbrel. Thankfully, my doctor’s office had someone to assist with the paperwork, which was a lifesaver!",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "Navigating the insurance paperwork for Humira was overwhelming. I had to call the insurance company multiple times, and it felt like no one had the answers I needed.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "The online resources for Taltz were helpful, but I still got stuck with the paperwork. I wish there was more clarity on what was required by my insurance.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "The insurance approval process for Cimzia was confusing and frustrating. I ended up missing my dose because the paperwork took too long to process.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I felt completely overwhelmed with the insurance requirements for Skyrizi. I reached out for help, but the response was slow, and it made me feel unsupported.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "The paperwork for Tremfya was daunting. I had to fill out so many forms, and no one seemed to know what my insurance actually covered. It was so stressful!",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I had no idea how to handle the insurance forms for Cosentyx, and the support team was unresponsive when I reached out for help. It made everything so much harder.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "Getting the right paperwork done for Rinvoq felt impossible at times. The insurance process was slow, and I was left waiting weeks for a decision on my coverage.",
          User: "User",
          Bucket: "Paperwork support",
        },
        {
          platform: "Reddit",
          content:
            "I was really worried about the paperwork for Zycof, but their team provided some support. However, I still found myself lost in the details and overwhelmed.",
          User: "User",
          Bucket: "Paperwork support",
        },
      ]);
      setTitle1("ALL");
      setTitle2("Biological Agents (Biologics)");
      setTitle3("DMARDs");
    }
  };

  const [websiteData, setwebsiteData] = useState([
    { name: "Ozempic", value: 12, value2: 15 },
    { name: "Victoza", value: 7, value2: 12 },
    { name: "Trulicity", value: 6, value2: 10 },
    { name: "Wegovy", value: 4, value2: 8 },
    { name: "Saxenda", value: 3, value2: 6 },
    { name: "Byetta", value: 3, value2: 4 },
  ]);
  const [websiteData2, setwebsiteData2] = useState([
    { name: "Jardiance", value: 8, value2: 12 },
    { name: "Glucophage", value: 6, value2: 9 },
    { name: "Invokana", value: 3, value2: 6 },
    { name: "Farxiga", value: 2, value2: 5 },
    { name: "Apidra", value: 4, value2: 4 }, // Assuming "Apdira" was a typo for "Apidra"
    { name: "Levemir", value: 4, value2: 4 }, // Assuming "Levemir" fits here
  ]);
  const [websiteData3, setwebsiteData3] = useState([
    { name: "Januvia", value: 12, value2: 18 },
    { name: "Janumet", value: 10, value2: 16 },
    { name: "Onglyza", value: 8, value2: 14 },
    { name: "Nesina", value: 7, value2: 12 },
    { name: "Evogliptin", value: 6, value2: 10 },
    { name: "Omarigliptin", value: 5, value2: 8 },
    { name: "Jentadueto", value: 4, value2: 6 },
  ]);

  const [nursingData, setnursingData] = useState([
    { name: "Ozempic", value: 12, value2: 15 },
    { name: "Victoza", value: 7, value2: 9 },
    { name: "Trulicity", value: 6, value2: 7 },
    { name: "Wegovy", value: 4, value2: 6 },
    { name: "Saxenda", value: 3, value2: 4 },
    { name: "Byetta", value: 3, value2: 3 },
  ]);
  const [nursingData2, setnursingData2] = useState([
    { name: "Jardiance", value: 8, value2: 15 },
    { name: "Glucophage", value: 7, value2: 14 }, // Added new entry
    { name: "Invokana", value: 6, value2: 12 },
    { name: "Farxiga", value: 5, value2: 10 },
    { name: "Apdira", value: 4, value2: 8 }, // Added new entry
    { name: "Levemir", value: 3, value2: 7 }, // Added new entry
    { name: "Byetta", value: 3, value2: 6 },
  ]);

  const [nursingData3, setnursingData3] = useState([
    { name: "Januvia", value: 15, value2: 20 },
    { name: "Janumet", value: 12, value2: 18 },
    { name: "Onglyza", value: 10, value2: 16 },
    { name: "Nesina", value: 8, value2: 14 },
    { name: "Evogliptin", value: 7, value2: 13 },
    { name: "Omarigliptin", value: 5, value2: 11 },
    { name: "Jentadueto", value: 4, value2: 10 },
  ]);

  return (
    <>
      <Header data={kpiData} onDiseaseChange={handleDiseaseChange} />
      <Container fluid>
        {/* <Container>
          <Row>
            Column for the first chart, taking 6 out of 12 grid columns
            <Col md={12}>
              <SupportStack />
            </Col>
          </Row>
        </Container> */}
        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData7} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData8} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <TrialStackChart details={chartData9} />
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
              <h6 className="chart-title m-3">Financial Support</h6>
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
            <CommentSection commentsData={commentsFinancialSupport} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Nursing Support</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={nursingData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={nursingData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={nursingData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsNursingSupport} />
          </Card>
        </Container>

        <Container className="mt-2 p-3">
          <Card>
            <Row>
              <h6 className="chart-title m-3">Paperwork Support</h6>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={websiteData} title={title1} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={nursingData2} title={title2} />
                </Card>
              </Col>
              <Col lg={4}>
                <Card className="p-3 m-2">
                  <DoubleBarChart data={websiteData3} title={title3} />
                </Card>
              </Col>
            </Row>
            {/* Render CommentSection only if no disease is selected */}
            <CommentSection commentsData={commentsPaperworkSupport} />
          </Card>
        </Container>
      </Container>
    </>
  );
}

// -------------- // Actual Code // ------------------- //
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

// export default function SupportPage() {

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
