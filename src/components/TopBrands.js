import { Row, Col, Card } from "react-bootstrap";

export const TopBrands = ({ data }) => {
  return (
    <>
      <Card className="p-3">
        <span className="top-forum">Top Brands</span>
        <Row>
          <Col lg={4}>
            {data.slice(0, 10).map((drug, index) => (
              <div key={index}>
                <span className="d-inline-block pt-3" style={{ width: "60%" }}>
                  {drug.name}
                </span>
                <span className="d-inline-block">{drug.percentage}</span>
              </div>
            ))}
          </Col>
          <Col lg={4}>
            {data.slice(10, 20).map((drug, index) => (
              <div key={index}>
                <span className="d-inline-block pt-3" style={{ width: "60%" }}>
                  {drug.name}
                </span>
                <span className="d-inline-block">{drug.percentage}</span>
              </div>
            ))}
          </Col>
          <Col lg={4}>
            {data.slice(20, 30).map((drug, index) => (
              <div key={index}>
                <span className="d-inline-block pt-3" style={{ width: "60%" }}>
                  {drug.name}
                </span>
                <span className="d-inline-block">{drug.percentage}</span>
              </div>
            ))}
          </Col>
        </Row>
      </Card>
    </>
  );
};
