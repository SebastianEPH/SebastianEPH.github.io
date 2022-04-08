import {Col} from "react-bootstrap";

export const ItemProject = ({data}) =>{
    const {name, title, icon} = data
    return(
        <Col className={"m-1"}>
            {/*<Row className={"card-data-project"}>*/}
            {/*<Col md={4}>*/}
            <div id={"card-data-project"} className="card text-center ">
                <div className={"m-2 mb-1"}>
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