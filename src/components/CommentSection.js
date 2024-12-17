import { Container,Row,Col,Card,Button } from "react-bootstrap"

export const CommentSection = ({commentsData}) =>{
    
    return<>
    <Container>
    <Row>
      {commentsData.map((comment, index) => (
        <Col lg={12} key={index} className="mb-4"> {/* Change lg={12} to occupy the full row */}
          <Card className="p-3">
            <Card.Body>
              <Card.Text>{comment.content}</Card.Text>
              <Button style={{color:"#bc7ac4",backgroundColor:"#ffffff",border:'1px solid #bc7ac4'}}>{comment.platform}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container></>
}

// color: #bc7ac4;background-color: #ffffff;border: 1px solid #bc7ac4;