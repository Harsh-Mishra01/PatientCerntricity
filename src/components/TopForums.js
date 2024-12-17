import {Card} from "react-bootstrap"
export const TopForums = ({ data }) => {
    return <>
       <Card className="p-3">
                <span className="top-forum">Top forums</span>
                {data.map((forum, index) => (
                <div key={index}>
                  <span className="d-inline-block pt-3" style={{width:"60%"}}>{forum.name}</span>
                  <span className="d-inline-block">{forum.percentage}</span>
                </div>
                  // <div key={index} className="forum-container">
                  //   <span>{forum.name}</span>
                  //   <span>{forum.percentage}</span>
                  // </div>
                ))}
              </Card>
    </>
}