import { Container, Row, Col, Card} from "react-bootstrap";
import { useState } from "react";

export default function DynamicCommentSection(){
    const [selectedTopic, setSelectedTopic] = useState(null);

    const CommentsData = [
      {
        Platform: "Reddit",
        Content:
          "They put him on 500mg 2x/day metformin. His insurance denied jardience. He tested last week A1C 8.5 Doctor did not increase his metformin.",
        Category: "Patient",
        Topic: "Support bucket",
        Subtopic: "Paperwork Support",
      },
      {
        Platform: "Diabetes Daily Forum",
        Content:
          "$25/ mo with Ozempic saving card. $45 without. I oddly get 2 pens a month though. I'm only on .5 and that's my therapeutic dose. So I fill it every other month.",
        Category: "Patient",
        Topic: "Support bucket",
        Subtopic: "Co-Pay Cards and Financial Support",
      },
      {
        Platform: "Reddit",
        Content:
          "I started on Ozempic recently, and the nurse training was so helpful. I wish they had more follow-ups because learning how to inject it correctly was a bit tricky.",
        Category: "Patient",
        Topic: "Support bucket",
        Subtopic: "Nurse Training Support",
      },
      {
        Platform: "Reddit",
        Content:
          "Invokana was prescribed, but dealing with the insurance paperwork is a nightmare. I am finally frustrated",
        Category: "Patient",
        Topic: "Support bucket",
        Subtopic: "Paperwork Support",
      },
      {
        Platform: "Reddit",
        Content:
          "The financial assistance for Jardiance barely made a dent in the price. I’m grateful for the co-pay card, but it’s still really expensive to stick with it.",
        Category: "Patient",
        Topic: "Support bucket",
        Subtopic: "Co-Pay Cards and Financial Support",
      },
      {
        Platform: "Reddit",
        Content:
          "Pharm tech here! If she is on personal (non government) insurance. She can go to website of medication (jardiance, farxiga ext) and apply for a discount card that will cap the co-pay to around $30ish a month!",
        Category: "HCP",
        Topic: "Communications bucket",
        Subtopic: "Difficulty Finding Information",
      },
      {
        Platform: "Reddit",
        Content:
          "No one's advertising ozempic to diabetics .. they know about it already. The ads are to target ppl for weight loss",
        Category: "Patient",
        Topic: "Communications bucket",
        Subtopic: "Perception of Advertisements",
      },
      {
        Platform: "Reddit",
        Content:
          "Here on Reddit, after joining this group, I got hit with an ad for a weight loss physician who could prescribe Ozempic. Clicked on it. Was connected to a physician who is in my state, set up an appointment on the website, filled out my health history, had a video/phone appointment, and was prescribed Ozempic.\nThe medicine arrived from the mail-order pharmacy a few weeks later. So yes, it's not the Ozempic that comes from the one pharmaceutical company with a patent... It's made by a compounding pharmacy, comes in a vial, not a pen.",
        Category: "Patient",
        Topic: "Communications bucket",
        Subtopic: "Difficulty Finding Information",
      },
      {
        Platform: "Reddit",
        Content:
          "Saw a commercial today and it was so generic. It doesn’t reflect what we really go through as Type 2 diabetics. These ads are always out of touch.",
        Category: "Patient",
        Topic: "Communications bucket",
        Subtopic: "Perception of Advertisements",
      },
      {
        Platform: "Reddit",
        Content:
          "The brochure I got from my doctor was so outdated. It didn’t cover half the questions I had about what to expect when starting the wegovy.",
        Category: "Patient",
        Topic: "Communications bucket",
        Subtopic: "Perception of Advertisements",
      },
      {
        Platform: "Reddit",
        Content:
          "I work in clinical research! If this is something you’re interested in, it could be a great way to keep track of your diabetes. $105 is great, but I’ve seen trials with less pay but fewer visits.",
        Category: "Patient",
        Topic: "Trial bucket",
        Subtopic: "Patient-Centricity Sentiment",
      },
      {
        Platform: "Reddit",
        Content:
          "I’ve participated in multiple trials. One was for an early version of a CGM. It was more for the science than the money for me. The pay was low, but the science part was worth it.",
        Category: "Patient",
        Topic: "Trial bucket",
        Subtopic: "Sentiment on Clinical Trials",
      },
      {
        Platform: "Carenity",
        Content:
          "I did a trial for a drug, can’t remember the name. It seemed to work well, but the tech was outdated. The experience was frustrating, especially with the constant issues with the PalmPilot.",
        Category: "Patient",
        Topic: "Trial bucket",
        Subtopic: "Transparency and Burden",
      },
      {
        Platform: "Reddit",
        Content:
          "I was in a trial around 2012. The real benefit was the free supplies—tons of insulin and strips, plus $50 per doctor visit. The process wasn’t too stressful, and I appreciated the support.",
        Category: "Patient",
        Topic: "Trial bucket",
        Subtopic: "Transparency and Support",
      },
      {
        Platform: "Type 2 diabetes forum",
        Content:
          "Last year, I did a trial for a new injection procedure. $100 per visit, 10 visits. The injection didn’t work",
        Category: "Patient",
        Topic: "Trial bucket",
        Subtopic: "Burden of Participation",
      },
      {
        Platform: "PatientLikeMe",
        Content:
          "I’m glad to see that this new diabetes drug was tested in diverse patient populations. It gives me confidence that it might work for people from different backgrounds, not just a specific group.",
        Category: "Patient",
        Topic: "Product bucket",
        Subtopic: "Diversity",
      },
      {
        Platform: "PatientLikeMe",
        Content:
          "It was frustrating that the side effects weren’t fully explained when I started on this medication. I had to find out the hard way. There needs to be more transparency from the pharma companies.",
        Category: "Patient",
        Topic: "Product bucket",
        Subtopic: "Transparency",
      },
      {
        Platform: "PatientLikeMe",
        Content:
          "Glucophage was promoted as suitable for everyone, but my experience was different. It doesn’t seem to fit people from all walks of life, especially with the lifestyle changes it requires. I have diarhhoea everyday",
        Category: "Patient",
        Topic: "Product bucket",
        Subtopic: "Walks of Life",
      },
      {
        Platform: "Reddit",
        Content:
          "The cost of this Ozempic. Even with insurance, it’s clear that it’s out of reach for many people from lower-income backgrounds. ",
        Category: "Patient",
        Topic: "Product bucket",
        Subtopic: "Socio-Economic Inclusion",
      },
      {
        Platform: "Reddit",
        Content: "Ozempic affordability remains a major issue for most people.",
        Category: "Patient",
        Topic: "Product bucket",
        Subtopic: "Socio-Economic Inclusion",
      },
    ];


    const handleCardClick = (topic) => {
        setSelectedTopic(topic);
      };
    
      // Adjusted filtering to match Topic
      const filteredComments = CommentsData.filter(
        (comment) => comment.Topic === selectedTopic
      );

    return<>
    <Container>
          <Row className="mt-2">
            <Col lg={3}>
              <Card
                className={`p-4 m-3 my-button `}
                onClick={() => handleCardClick("Support bucket")}
              >
                <div className="title">Support</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Communications bucket")}
              >
                <div className="title">Content</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Product bucket")}
              >
                <div className="title">Product</div>
              </Card>
            </Col>
            <Col lg={3}>
              <Card
                className="p-4 m-3 my-button"
                onClick={() => handleCardClick("Trial bucket")}
              >
                <div className="title">Trial</div>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="custom-container">
          {filteredComments.map((comment, index) => (
            <Row key={index} className="m-3">
              <Card className="p-4 custom-card3">
                <div className="use-head">
                <h6 className="chart-title">User</h6>
                </div>
                <div>
                  <span className="review">{comment.Content}</span>
                  <div className="c-button custom-button">
                    {comment.Platform}
                  </div>
                </div>
              </Card>
            </Row>
          ))}
        </Container>
    </>
}