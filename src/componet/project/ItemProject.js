import {Col, Row} from "react-bootstrap";

export const ItemProject = ({data}) =>{
    const {name, title, icon} = data
    return(
        <Col md={2} className={"m-1"}>
           {/*<Row className={"card-data-project"}>*/}
               {/*<Col md={4}>*/}
                   <div className="card text-center card-data-project">
                       <div className={"m-2 mb-0"}>
                           {icon}
                       </div>
                       <div className="card-title- mb-2">
                           {title}
                       </div>
                       <h6 className="card-title">{name}</h6>
                   </div>
               {/*</Col>*/}
               {/*<Col md={8}>*/}
               {/*    <i className="bi bi-person"> </i>*/}
               {/*    <div className="card-body">*/}
               {/*        <h5 className="card-title">{name}</h5>*/}
               {/*        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}
               {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
               {/*    </div>*/}
               {/*    <div className="card-footer text-muted">*/}
               {/*        2 days ago*/}
               {/*    </div>*/}
               {/*</Col>*/}
           {/*</Row>*/}
        </Col>
    )
}