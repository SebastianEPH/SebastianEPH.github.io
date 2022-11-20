import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loading/loadingDada";
// import {useEffect} from "react";
// import {UseMyExtraKnowledge} from "../Use/UseMyExtraKnowledge";

export const ExtraKnowledge = ({data}) =>{
    // const {myExtraKnowledge, getMyExtraKnowledge } = UseMyExtraKnowledge([]);
    // useEffect(()=>{
    //     getMyExtraKnowledge();
    // },[])
    const myExtraKnowledge = data;
    return(
        <Container>
            <h3  className={"title-h1 text-center mt-5 mb-3"}>Conocimientos en otras áreas</h3>
            <Row className={"text-center-loading-vertical"}>
                {myExtraKnowledge?
                    myExtraKnowledge.map(({icon,difficulty, knowledge}, index)=>
                        <Col key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                            <Row>
                                <div className=" text-center">
                                    <span className="m-0px font-w-600 text-white ">{difficulty}</span>
                                    <div className="mb-2" >
                                        <img src={icon} width={"85px"} alt={knowledge}/>
                                    </div>
                                    <h5 className="m-0px font-w-600">{knowledge}</h5>
                                </div>
                            </Row>
                        </Col>
                    )
                    : <LoadingDada/>
                }
            </Row>
        </Container>
    )
}