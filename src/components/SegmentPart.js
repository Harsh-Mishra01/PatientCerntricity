import {Card} from "react-bootstrap"
export const SegmentPart = ({ data }) => {
    return<>
      <Card className="p-3">
        <span className="top-forum">Segment</span>
        {data.map((forum, index) => (
        <div key={index}>
          <span className="d-inline-block pt-3">{forum.name}</span>
        </div>
        ))}
      </Card>
    </>
}