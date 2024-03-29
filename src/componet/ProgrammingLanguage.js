import {Col, Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loading/loadingDada";
// import {useEffect} from "react";
// import {UseMyProgrammingLanguages} from "../Use/UseMyProgrammingLanguages";

export const ProgrammingLanguage = ({data})=>{

    // const {myProgrammingLanguages, getMyProgrammingLanguages } = UseMyProgrammingLanguages([]);
    // useEffect(()=>{
    //     getMyProgrammingLanguages();
    // },[])
    const myProgrammingLanguages = data;
    return(
        <Container>
            <h3 className={"title-h1 text-center mt-5 mb-3"}>Lenguajes de marcado y programación</h3>
                <Row className={"text-center-loading-vertical"}>
                    {myProgrammingLanguages?
                        myProgrammingLanguages.map(({icon,difficulty, language}, index)=>
                            <Col key={"programming_language_"+ index} className={"mb-3 mt-2"}>
                                <Row>
                                    <div className=" text-center">
                                        <span className="m-0px font-w-600 text-white ">{difficulty}</span>
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