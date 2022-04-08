import {Button, Col, Row} from "react-bootstrap";
import {InputForm} from "../../../form/InputForm";
import {UseFormUpdate} from "../UseFormUpdate";
import {useParams} from "react-router-dom";

export const ItemScreenshot =({screenshot:st,typeName,reloadForDB, onlyRead=true}) =>{
    const {project_id} = useParams();
    const {form, setForm, onChangeForm, clean, databaseAdd, databaseRemove,onChangeFormNum, databaseUpdate}
        = UseFormUpdate({}, typeName, project_id ,reloadForDB)

    const {screenshot,  number, details} = form

    const displayShow =(elementId, state=true) =>{
        let div = document.getElementById(elementId)
        state?  div.style.setProperty("display","initial"):div.style.setProperty("display","none")
    }
    return(
        <Row className= {st.length < 1 && onlyRead?"":"mt-5 mb-5 card card-container"}>
        {st.length < 1 && onlyRead?false:<h3 id={"card_title"} >Capturas de pantalla:</h3>}
        {st.length > 1?
            <ul className="list-group-item">
                {st.map((data, index)=>{
                    return(
                        <div key={"screenshot"+index} >
                            <li id={"border-item"}  className={" list-group-item"}>
                                {!onlyRead&&(
                                    <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                                     <span id={"btn-"+typeName+"_cancel-edit_"+data.id}
                                           style={{"display":"none"}}
                                           onClick={()=>{
                                               setForm({
                                                   id:null,
                                                   screenshot:"",
                                                   details:"",
                                                   number:""});
                                               displayShow("btn-"+typeName+"_cancel-edit_"+data.id,false)
                                               displayShow("btn_"+typeName+"_Update",false)
                                               displayShow("btn_"+typeName+"_add",true)
                                               displayShow("btn_"+typeName+"_edit_"+data.id,true)
                                               displayShow("btn_"+typeName+"_delete_"+data.id,true)
                                               displayShow("btn-"+typeName+"_cancel-edit_"+data.id,false)
                                               displayShow("btn-"+typeName+"_cancel-edit_"+data.id,false)
                                           }} className="badge rounded-pill fw-light button-item-small-yellow">Cancelar edición</span>

                                        <span id={"btn_"+typeName+"_edit_"+data.id} onClick={()=>{
                                            setForm({
                                                id:data.id,
                                                screenshot:data[typeName],
                                                details:data.details,
                                                number:data.number}
                                            )
                                            displayShow("btn-"+typeName+"_cancel-edit_"+data.id,true)
                                            displayShow("btn_"+typeName+"_Update",true)
                                            displayShow("btn_"+typeName+"_add",false)
                                            displayShow("btn_"+typeName+"_edit_"+data.id,false)
                                            displayShow("btn_"+typeName+"_delete_"+data.id,false)
                                        }} className="badge rounded-pill fw-light button-item-small-blue">Editar</span>

                                        <span id={"btn_"+typeName+"_delete_"+data.id} onClick={()=>databaseRemove(data.id,index+data.id)} className="badge rounded-pill fw-light button-item-small-red">Eliminar</span>
                                    </div>
                                )}
                                <div className={"text-center"}>
                                    <br/>
                                    <p className={"max-container"} id={"screenshot-text"} >{data.details}</p>
                                    {!onlyRead&& <h4 className={"text-warning"}>Número de orden: {data.number}</h4>}
                                    <img id={"screenshot-item"} className={"mt-5 mb-5"} key={index+("-img")}  src={data.screenshot} alt={typeName}/>
                                </div>
                            </li>
                        </div>
                    )})
                }
            </ul>
            :  onlyRead?false:<p>No tiene Capturas de pantalla</p>
        }
        {!onlyRead&&(
            <>
                <Row className={"ms-1 mt-3 mb-4"}>
                    <InputForm data={{
                        label: "Detalles",
                        name:"details",
                        col:"12",
                        value:details,
                        onChangeForm,
                        textarea:true
                    }}/>
                    <InputForm data={{
                        label: "Número",
                        name:"number",
                        col:"2",
                        value:number,
                        onChangeForm:onChangeFormNum
                    }}/>
                    <InputForm data={{
                        label: "URL de captura de pantalla",
                        name:"screenshot",
                        col:"10",
                        value:screenshot,
                        onChangeForm
                    }}/>
                    <div className="btn-group" role="group" >
                        <Button id={"btn_"+typeName+"_add"} type="button" onClick={databaseAdd} className={"btn btn-success me-3"}> Agregar </Button>
                        <Button id={"btn_"+typeName+"_Update"} type="button" style={{"display":"none"}} onClick={()=>{
                            databaseUpdate();
                            displayShow("btn-"+typeName+"_cancel-edit_"+form.id,false)
                            displayShow("btn_"+typeName+"_Update",false)
                            displayShow("btn_"+typeName+"_add",true)
                            displayShow("btn_"+typeName+"_edit_"+form.id,true)
                            displayShow("btn_"+typeName+"_delete_"+form.id,true)

                        }} className={"btn btn-warning me-3"}>Actualizar</Button>
                        <Button type="button" onClick={clean} className={"btn btn-secondary"}>Limpiar</Button>
                    </div>
                </Row>
            </>
        )}
        </Row>
    )
}