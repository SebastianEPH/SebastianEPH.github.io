import {Col, Row} from "react-bootstrap";

export const CardProjectLoading = ()=>{
    return(
        <Col lg={6} className={"p-2 center-center"} >
            <div className={"card-list-project-item"}>
                <Row className={"m-0 pt-2 card-list-title"}>
                    <Col sm={5}>
                        <div className=" mt-0 loader-t loader-t-min loader-length-60 mb-2"> </div>
                    </Col>
                    <Col sm={7} className={"float-end"}>
                        <div className={"float-end loader-t loader-t-min loader-length-60 mb-2"}>
                            <h6 className="mt-0 "> </h6>
                        </div>
                    </Col>
                </Row>
                <Row className="card-body ">
                    <h1 className={"loader-t  loader-length-50 mb-4"}> </h1>
                    <p className="loader-t loader-t-min loader-length-95 mb-2"> </p>
                    <p className="loader-t loader-t-min loader-length-90 mb-2"> </p>
                    <p className="loader-t loader-t-min loader-length-70 mb-2"> </p>
                </Row>
                <div className={"ps-3 pe-3 pb-2"}>
                    <Row className={"custom-button"}>
                        <Col sm={12}>
                            {[1,2,3,4,5,6,7,8].map((data, index)=>
                                <div key={'spinner_'+index} className="spinner-grow me-2 ms-2 " role="status">
                                    <span className="visually-hidden bg-dark ">Loading...</span>
                                </div>
                            )
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>

    )
}