import {Col} from "react-bootstrap";

export const TitleLoader = () =>{
    return(
        <Col xxl={12} className="text-center-loading ps-0 pt-2 pb-4">
            <div className={"loader-t loader-title loader-length-100"}> </div>
        </Col>
    )
}