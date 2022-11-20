import {Col, Row} from "react-bootstrap";

export const ItemProject = ({data}) =>{
    const {name, title, icon} = data
    return(
        <Col sd={2}  className={"m-3"}>
           <Row>
                <div id={"card-data-project"} className="card text-center">
                    <div className={"m-2 mb-1"}>{icon} </div>
                    <div className="card-title- mb-2">{title}</div>
                    <h6 className="card-title">{name}</h6>
                </div>
           </Row>
        </Col>
    )
}