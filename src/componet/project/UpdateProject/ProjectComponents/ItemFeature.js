import {Button, Col, Row} from "react-bootstrap";
import {InputForm} from "../../../form/InputForm";
import {UseFormUpdate} from "../UseFormUpdate";
import {useParams} from "react-router-dom";

export const ItemFeature =({feature:f,typeName,reloadForDB, onlyRead=true}) =>{
    const {project_id} = useParams();
    const {form, setForm, onChangeForm, clean, databaseAdd, databaseRemove, databaseUpdate}
        = UseFormUpdate({}, typeName, project_id ,reloadForDB)

    const {feature, img, description} = form

    return(
        <Row className= {f.length < 1 && onlyRead?"":"mt-5 mb-5 card card-container"}>
            {f.length < 1 && onlyRead?false:<h3 id={"card_title"} >Caracteristicas:</h3>}
            {f.length > 1?
                <ul className="list-group list-group-item  ">
                    {f.map((data, index)=>{

                        return(
                            <li id={"border-item"} key={"feature"+index} className={"list-group-item d-flex justify-content-between align-items-start"}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{data.feature}{data.description?":":""}</div>
                                   {/*<div style={{"max-width":"1200px"}}>*/}
                                       {data.description}
                                   {/*</div>*/}
                                </div>
                                {!onlyRead&&(
                                    <>
                                         <span id={"btn-feature_cancel-edit_"+data.id}
                                               style={{"display":"none"}}
                                               onClick={()=>{
                                                   setForm({  id:null,
                                                       feature:"",
                                                       img:"",
                                                       description:""});
                                                   document.getElementById("btn-feature_cancel-edit_"+data.id).style.setProperty("display","none")
                                                   document.getElementById("btn_feature_Update").style.setProperty("display","none")
                                                   document.getElementById("btn_feature_add").style.setProperty("display","initial")
                                                   document.getElementById("btn_feature_edit_"+data.id).style.setProperty("display","initial")
                                                   document.getElementById("btn_feature_delete_"+data.id).style.setProperty("display","initial")
                                               }} className="badge rounded-pill fw-light button-item-small-yellow">Cancelar edición</span>

                                        <span id={"btn_feature_edit_"+data.id} onClick={()=>{
                                            setForm(
                                                {  id:data.id,
                                                    feature:data.feature,
                                                    img:data.img,
                                                    description:data.description}
                                            )
                                            document.getElementById("btn-feature_cancel-edit_"+data.id).style.setProperty("display","initial")
                                            document.getElementById("btn_feature_Update").style.setProperty("display","initial")
                                            document.getElementById("btn_feature_add").style.setProperty("display","none")
                                            document.getElementById("btn_feature_edit_"+data.id).style.setProperty("display","none")
                                            document.getElementById("btn_feature_delete_"+data.id).style.setProperty("display","none")

                                        }} className="badge rounded-pill fw-light button-item-small-blue">Editar</span>

                                        <span id={"btn_feature_delete_"+data.id}  onClick={()=>databaseRemove(data.id,index+data.id)} className="badge rounded-pill fw-light button-item-small-red">Eliminar</span>

                                    </>
                                )}
                            </li>
                        )})
                    }
                </ul>
                :  onlyRead?false:<p>No tiene caracteristicas</p>
            }
            {!onlyRead&&(
                <>
                    <Row className={"ms-1 mt-3 mb-4"}>
                        <InputForm data={{
                            label: "Nombre de caracteristica *",
                            name:"feature",
                            col:"4",
                            value:feature,
                            onChangeForm

                        }}/>
                        <InputForm data={{
                            label: "URL Imagen de referencia (opcional)",
                            name:"img",
                            col:"8",
                            type:"link",
                            value:img,
                            onChangeForm
                        }}/>
                        <InputForm data={{
                            label: "Descripción",
                            name:"description",
                            col:"12",
                            value:description,
                            onChangeForm,
                            textarea:true
                        }}/>

                        <div className="btn-group" role="group" >
                            <Button id={"btn_feature_add"} type="button" onClick={databaseAdd} className={"btn btn-success me-3"}> Agregar </Button>
                            <Button id={"btn_feature_Update"} type="button" style={{"display":"none"}} onClick={()=>{
                                databaseUpdate();
                                document.getElementById("btn-feature_cancel-edit_"+form.id).style.setProperty("display","none")
                                document.getElementById("btn_feature_Update").style.setProperty("display","none")
                                document.getElementById("btn_feature_add").style.setProperty("display","initial")
                                document.getElementById("btn_feature_edit_"+form.id).style.setProperty("display","initial")
                                document.getElementById("btn_feature_delete_"+form.id).style.setProperty("display","initial")

                            }} className={"btn btn-warning me-3"}>Actualizar</Button>
                            <Button type="button" onClick={clean} className={"btn btn-secondary"}>Limpiar</Button>
                        </div>
                    </Row>
                </>
            )}
        </Row>
    )
}