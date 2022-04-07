import {Button, Col, Row} from "react-bootstrap";
import {InputForm} from "../../../form/InputForm";
import {UseFormUpdate} from "../UseFormUpdate";
import {useParams} from "react-router-dom";

export const ItemScreenshot =({screenshot:st,typeName,reloadForDB, onlyRead=true}) =>{
    const {project_id} = useParams();
    const {form, setForm, onChangeForm, clean, databaseAdd, databaseRemove,onChangeFormNum, databaseUpdate}
        = UseFormUpdate({}, typeName, project_id ,reloadForDB)

    const {screenshot,  number, details} = form

    return(
        <Row className= {st.length < 1 && onlyRead?"":"mt-5 mb-5 card card-container"}>
            {st.length < 1 && onlyRead?false:<h3 id={"card_title"} >Capturas de pantalla:</h3>}
            {st.length > 1?
                <ul className="list-group list-group-item  ">
                    {st.map((data, index)=>{
                        return(
                            <li id={"border-item"} key={"screenshot"+index} className={"list-group-item d-flex justify-content-between align-items-start"}>
                                <div className="ms-2 me-auto">
                                    {/*<div className="fw-bold">{data[typeName]}{data.details?":":""}</div>*/}
                                    {/*<div style={{"max-width":"1200px"}}>*/}
                                    <div className={"text-center"}>

                                        <br/><br/><br/>
                                        <span id={"screenshot-text"} >{data.details}</span>
                                        <br/>
                                        <h3>Número de orden: {data.number}</h3>
                                        <br/>
                                        <img id={"screenshot-item"} className={"mt-5"} key={index+("-img")}  src={data.screenshot} alt={typeName}/>
                                    </div>

                                    {/*</div>*/}
                                </div>
                                {!onlyRead&&(
                                    <>
                                         <span id={"btn-"+typeName+"_cancel-edit_"+data.id}
                                               style={{"display":"none"}}
                                               onClick={()=>{
                                                   setForm({
                                                       id:null,
                                                       screenshot:"",
                                                       details:"",
                                                       number:""});
                                                   document.getElementById("btn-"+typeName+"_cancel-edit_"+data.id).style.setProperty("display","none")
                                                   document.getElementById("btn_"+typeName+"_Update").style.setProperty("display","none")
                                                   document.getElementById("btn_"+typeName+"_add").style.setProperty("display","initial")
                                                   document.getElementById("btn_"+typeName+"_edit_"+data.id).style.setProperty("display","initial")
                                                   document.getElementById("btn_"+typeName+"_delete_"+data.id).style.setProperty("display","initial")
                                               }} className="badge rounded-pill fw-light button-item-small-yellow">Cancelar edición</span>

                                        <span id={"btn_"+typeName+"_edit_"+data.id} onClick={()=>{
                                            setForm({
                                                id:data.id,
                                                screenshot:data[typeName],
                                                details:data.details,
                                                number:data.number}
                                            )
                                            document.getElementById("btn-"+typeName+"_cancel-edit_"+data.id).style.setProperty("display","initial")
                                            document.getElementById("btn_"+typeName+"_Update").style.setProperty("display","initial")
                                            document.getElementById("btn_"+typeName+"_add").style.setProperty("display","none")
                                            document.getElementById("btn_"+typeName+"_edit_"+data.id).style.setProperty("display","none")
                                            document.getElementById("btn_"+typeName+"_delete_"+data.id).style.setProperty("display","none")

                                        }} className="badge rounded-pill fw-light button-item-small-blue">Editar</span>

                                        <span id={"btn_"+typeName+"_delete_"+data.id}  onClick={()=>databaseRemove(data.id,index+data.id)} className="badge rounded-pill fw-light button-item-small-red">Eliminar</span>

                                    </>
                                )}
                            </li>
                        )})
                    }
                </ul>
                :  onlyRead?false:<p>No tiene Capturas de pantalla</p>
            }
            {!onlyRead&&(
                <>
                    <Row className={"ms-1 mt-3 mb-4"}>
                        {/*<InputForm data={{*/}
                        {/*    label: "Nombre de caracteristica *",*/}
                        {/*    name:"feature",*/}
                        {/*    col:"4",*/}
                        {/*    value:feature,*/}
                        {/*    onChangeForm*/}

                        {/*}}/>*/}

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
                                document.getElementById("btn-"+typeName+"_cancel-edit_"+form.id).style.setProperty("display","none")
                                document.getElementById("btn_"+typeName+"_Update").style.setProperty("display","none")
                                document.getElementById("btn_"+typeName+"_add").style.setProperty("display","initial")
                                document.getElementById("btn_"+typeName+"_edit_"+form.id).style.setProperty("display","initial")
                                document.getElementById("btn_"+typeName+"_delete_"+form.id).style.setProperty("display","initial")

                            }} className={"btn btn-warning me-3"}>Actualizar</Button>
                            <Button type="button" onClick={clean} className={"btn btn-secondary"}>Limpiar</Button>
                        </div>
                    </Row>
                </>
            )}


        </Row>


    )
}