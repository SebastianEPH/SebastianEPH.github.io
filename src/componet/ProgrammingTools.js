import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loading/loadingDada";
// import {useEffect} from "react";
// import {UseMyProgrammingTools} from "../Use/UseMyProgrammingTools";

export const ProgrammingTools = ({data})=>{

    // const {myProgrammingTools, getMyProgrammingTools } = UseMyProgrammingTools([]);
    // useEffect(()=>{
    //     getMyProgrammingTools();
    // },[])
    const myProgrammingTools = data

    return(
        <Container>
            <h3  className={"title-h1 text-center mt-5 mb-3"}>Herramientas y librerías de proyectos</h3>
            <Row className={"text-center-loading-vertical"}>
                {myProgrammingTools?
                    myProgrammingTools.map(({icon,difficulty, tool}, index)=>
                        <Col key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                            <Row>
                                <div className=" text-center">
                                    <span className="m-0px font-w-600 text-white ">{difficulty}</span>
                                    <div className="mb-2" >
                                        <img src={icon} width={"85px"} alt={tool}/>
                                    </div>
                                    <h5 className="m-0px font-w-600">{tool}</h5>
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