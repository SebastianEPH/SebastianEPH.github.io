import {Col} from "react-bootstrap";

export const ItemProjectLoader = () =>{

    return(
        <Col className={"m-3"}>
            {/*<Col sm={2} className={"m-3"}>*/}
            <div id={"card-data-project"} className="card text-center ">
                <div className={"m-4 "}>
                    <div className="spinner-grow" role="status"> </div>
                </div>
                   <div className={"ms-5"}>
                       <div className=" loader-t loader-t-min loader-length-50 mb-3 mt-2 "> </div>
                   </div>
                   <div className={"ms-3"}>
                       <h6 className=" loader loader-t loader-length-80"> </h6>
                   </div>
            </div>
        </Col>
    )
}