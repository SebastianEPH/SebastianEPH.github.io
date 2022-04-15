import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loadingDada";

export const ProgrammingLanguage = ({data})=>{
    const {programming_language} = data
    return(
        <Container>
            <h3 className={"title-h1 text-center mt-5 mb-3"}>Lenguajes de marcado y programación</h3>
                <Row className={"text-center-loading-vertical"}>
                    {programming_language?
                        programming_language.map(({icon,dificulty, language}, index)=>
                            <Col key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                                <Row>
                                    <div className=" text-center">
                                        <span className="m-0px font-w-600 text-white ">{dificulty}</span>
                                        <div className="mb-2" >
                                            <img src={icon} width={"85px"} alt={language}/>
                                        </div>
                                        <h5 className="m-0px font-w-600">{language}</h5>
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