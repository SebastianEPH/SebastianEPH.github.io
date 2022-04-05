import {Button, Col, Row} from "react-bootstrap";
import {InputForm} from "../../../form/InputForm";
import {UseFormUpdate} from "../UseFormUpdate";
import {useParams} from "react-router-dom";
export const ItemFeature =({feature:f,typeName,reloadForDB}) =>{
    const {project_id} = useParams();
    const {form, onChangeForm, clean, databaseAdd} = UseFormUpdate({}, typeName, project_id ,reloadForDB)
    const {feature, img, description} = form
    return(
        <Row className={"mt-5 mb-5 card card-container"}>

            <h3 id={"card_title"} >Caracteristicas:</h3>
            {f.length >= 1?
                <ul className="list-group list-group-numbered">
                    {f.map((data, index)=>{
                        return(
                            <li key={"feature"+index} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{data.feature}</div>
                                    {data.description}
                                </div>
                                <span className="badge bg-success rounded-pill text-black">Edit</span>
                                <span className="badge bg-danger  rounded-pill text-black">Delete</span>
                            </li>
                        )})
                    }
                </ul>
                : <p>No tiene caracteristicas</p>}
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
                     <Button type="button" onClick={databaseAdd} className={"btn btn-success"}>Agregar</Button>
                     <Button type="button" onClick={clean} className={"btn btn-secondary"}>Limpiar</Button>
                 </div>


            </Row>
        </Row>


    )
}