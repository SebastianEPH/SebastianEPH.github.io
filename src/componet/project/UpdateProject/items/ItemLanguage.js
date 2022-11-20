import {Col, Row} from "react-bootstrap";
// import {UseFormCRUD} from "../../../../Use/UseFormCRUD";
// import {useParams} from "react-router-dom";
// import InputSelect from "../../../form/InputSelect";
// import {useEffect} from "react";
// import {UseMyProgrammingLanguages} from "../../../../Use/UseMyProgrammingLanguages";
// import {UseMyProgrammingTools} from "../../../../Use/UseMyProgrammingTools";

export const ItemLanguage =({language}) =>{

    // const {project_id} = useParams();

    // console.log("Esto es la data de item language ",data)
    // const {form:form_language,onChangeForm:onChangeL, databaseAdd:addNewLanguage, databaseRemove:delLanguage}  = UseFormCRUD({}, "language", project_id ,reloadForDB)
    // const {form:form_tools,onChangeForm:onChangeT,databaseAdd:addNewTools, databaseRemove:delTools}  = UseFormCRUD({}, "tools", project_id ,reloadForDB)
    //
    // const [myProgrammingTools, getMyProgrammingTools]  = UseMyProgrammingTools([]);
    // const [myProgrammingLanguages, getMyProgrammingLanguages]  = UseMyProgrammingLanguages([]);


    return(
        <>
            {/*<Row className={"mb-4 mt-4"}>*/}
            {/*     {l&&*/}
            {/*        l.map((data, index)=>{*/}
            {/*            return(*/}
            {/*                <Col key={"select_item_language_"+index} className={"text-center"}>*/}
            {/*                    <p>{data.language}</p>*/}
            {/*                    <img src={data.icon} width={"45px"} alt=""/>*/}
            {/*                    <br/>*/}
            {/*                    /!*<span onClick={()=>delLanguage(data.id)} className="badge rounded-pill fw-light button-item-small-red mt-3">Remover</span>*!/*/}
            {/*                </Col>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
                {/*{t&&*/}
                {/*    t.map((data, index)=>{*/}
                {/*        return(*/}
                {/*            <Col key={"select_item_tools_"+index} className={"text-center"}>*/}
                {/*                <p>{data.tools}</p>*/}
                {/*                <img src={data.icon} className={"img-project"}  alt=""/>*/}
                {/*                <br/>*/}
                {/*                /!*<span onClick={()=>delTools(data.id)} className="badge rounded-pill fw-light button-item-small-red mt-3">Remover</span>*!/*/}
                {/*            </Col>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            {/*</Row>*/}

          <Row className={"mt-3 mb-3"}>
              {/*<InputSelect name="language" title={"Agregar nuevo Lenguaje"} update={onChangeL} select={language} col={6} data={myProgrammingLanguages}  />*/}
              {/*<InputSelect name="tools" title={"Agegrar nuevo Herramienta o lib"} update={onChangeT} select={tools} col={6} data={myProgrammingTools}  />*/}
          </Row>
            <Row  className={"mt-3 mb-3"}>
               <Col md={6}>
                   <Row className={"ms-0 me-0"}>
                       {/*<button onClick={addNewLanguage} className={"btn btn-success"}> agregar</button>*/}
                   </Row>
               </Col>
                <Col md={6}>
                    <Row className={"ms-0 me-0"}>
                        {/*<button onClick={addNewTools} className={"btn btn-success"}> agregar</button>*/}
                    </Row>
                </Col>
            </Row>
        </>)
}