import {Col} from "react-bootstrap";

export const ItemProjectLoader = () =>{

    return(
        <Col className={"p-3"}>
            {/*<Col sm={2} className={"m-3"}>*/}
            <div id={"card-data-project"} className="card text-center ">
                <div className={"p-4 "}>
                    <div className="spinner-grow" role="status"> </div>
                </div>
                   <div className={"pe-2 ps-2"}>
                       <div className=" loader-t loader-t-min loader-length-100 mb-3 mt-2 "> </div>
                   </div>
                   <div className={"pe-2 ps-2"}>
                       <h6 className=" loader loader-t loader-length-100"> </h6>
                   </div>
            </div>
        </Col>
    )
}