import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loadingDada";

export const Tools = ({data})=>{
    const {programming_tools} = data
    return(
        <Container>
            <h3  className={"title-h1 text-center mt-5 mb-3"}>Herramientas y librerías de proyectos</h3>
            <Row className={"text-center-loading-vertical"}>
                {programming_tools?
                    programming_tools.map(({icon,dificulty, tools}, index)=>
                        <Col sm={3} key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                            <Row>
                                <div className=" text-center">
                                    <span className="m-0px font-w-600 text-white ">{dificulty}</span>
                                    <div className="mb-2" >
                                        <img src={icon} width={"85px"} alt={tools}/>
                                    </div>
                                    <h5 className="m-0px font-w-600">{tools}</h5>
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