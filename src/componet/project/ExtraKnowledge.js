import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loadingDada";

export const ExtraKnowledge = ({data}) =>{
    const {extra_knowledge } = data
    return(

        <Container>
            <h3  className={"title-h1 text-center mt-5 mb-3"}>Conocimientos en otras áreas</h3>
            <Row className={"text-center-loading-vertical"}>
                {extra_knowledge?
                    extra_knowledge.map(({icon,dificulty, knowlegge}, index)=>
                        <Col key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                            <Row>
                                <div className=" text-center">
                                    <span className="m-0px font-w-600 text-white ">{dificulty}</span>
                                    <div className="mb-2" >
                                        <img src={icon} width={"85px"} alt={knowlegge}/>
                                    </div>
                                    <h5 className="m-0px font-w-600">{knowlegge}</h5>
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