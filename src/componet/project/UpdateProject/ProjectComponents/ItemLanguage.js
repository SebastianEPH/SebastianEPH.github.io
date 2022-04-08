import {Col, Row} from "react-bootstrap";
import {UseFormUpdate} from "../UseFormUpdate";
import {useParams} from "react-router-dom";
import InputSelect from "../../../form/InputSelect";
import {useEffect, useState} from "react";
import connectionAPI from "../../../../axios";

export const ItemLanguage =({language:l,tools:t,reloadForDB, onlyRead=true}) =>{
    const {project_id} = useParams();

    const {form:form_language,onChangeForm:onChangeL, databaseAdd:addNewLanguage, databaseRemove:delLanguage}  = UseFormUpdate({}, "language", project_id ,reloadForDB)
    const {form:form_tools,onChangeForm:onChangeT,databaseAdd:addNewTools, databaseRemove:delTools}  = UseFormUpdate({}, "tools", project_id ,reloadForDB)

    const [pTools, setPTools]  = useState([]);
    const [pLanguage, setPLanguage]  = useState([]);

    const getPTools = async () =>{
        await connectionAPI.get(`/my/tools`)
            .then(({data})=>{
                setPTools(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const getPLanguage = async () =>{
        await connectionAPI.get(`/my/language`)
            .then(({data})=>{
                setPLanguage(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    useEffect(()=>{
        getPLanguage()
        getPTools()
    }, [])

    const {language} = form_language
    const {tools} = form_tools

    return(
        <>
            <Row className={"mb-4 mt-4"}>
                {l&&
                    l.map((data, index)=>{
                        return(
                            <Col key={"select_item_language_"+index} className={"text-center"}>
                                <p>{data.language}</p>
                                <img src={data.icon} width={"45px"} alt=""/>
                                <br/>
                                <span onClick={()=>delLanguage(data.id)} className="badge rounded-pill fw-light button-item-small-red mt-3">Remover</span>
                            </Col>
                        )
                    })
                }
                {t&&
                    t.map((data, index)=>{
                        return(
                            <Col key={"select_item_tools_"+index} className={"text-center"}>
                                <p>{data.tools}</p>
                                <img src={data.icon} className={"img-project"}  alt=""/>
                                <br/>
                                <span onClick={()=>delTools(data.id)} className="badge rounded-pill fw-light button-item-small-red mt-3">Remover</span>
                            </Col>
                        )
                    })
                }
            </Row>

          <Row className={"mt-3 mb-3"}>
              <InputSelect name="language" title={"Agregar nuevo Lenguaje"} update={onChangeL} select={language} col={6} data={pLanguage}  />
              <InputSelect name="tools" title={"Agegrar nuevo Herramienta o lib"} update={onChangeT} select={tools} col={6} data={pTools}  />
          </Row>
            <Row  className={"mt-3 mb-3"}>
               <Col md={6}>
                   <Row className={"ms-0 me-0"}>
                       <button onClick={addNewLanguage} className={"btn btn-success"}> agregar</button>
                   </Row>
               </Col>
                <Col md={6}>
                    <Row className={"ms-0 me-0"}>
                        <button onClick={addNewTools} className={"btn btn-success"}> agregar</button>
                    </Row>
                </Col>
            </Row>
        </>)
}