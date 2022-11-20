import "./ListProject.css"
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {UseProjects} from "../../Use/UseProjects";
import {CardProject} from "./CardProject";
import {CardProjectLoading} from "./CardProjectLoading";

export const ListProject =()=>{

    const {projects, getProjects } = UseProjects([]);
    const [cardActive, setCardCative] = useState("Avanzado")
    useEffect(()=>{
        getProjects();
    },[])

    // const projects = data
    const generateRandomNumber =(min=100, max=9999)=>{
        return Math.floor(Math.random() * (max-min + min)) + min
    }

    const [btnActive, setBtnActive] = useState({
        btnActiveAdvanced:true,
        btnActiveMedium:false,
        btnActiveBasic:false
    })

    const ShowAdvanced =() =>{
        setCardCative("Avanzado")
        setBtnActive({
            btnActiveAdvanced:true,
            btnActiveMedium:false,
            btnActiveBasic:false
        })
    }
    const ShowMedium =() =>{
        setCardCative("Intermedio")
        setBtnActive({
            btnActiveAdvanced:false,
            btnActiveMedium:true,
            btnActiveBasic:false
        })
    }
    const ShowBasic =() =>{
        setCardCative("Básico")
        setBtnActive({
            btnActiveAdvanced:false,
            btnActiveMedium:false,
            btnActiveBasic:true
        })
    }
    return(
        <Container>
            <h3 id={"card_title"} className={"text-center mt-4 mb-4"}>Proyectos nivel {cardActive}</h3>
           <Row>
                <Row className={"m-0 5 p-0 mb-4 "}>
                    <div className="btn-group pe-5 ps-5 mt-3">
                        <button id={"p_advanced"}
                                onClick={ShowAdvanced}
                                type="button"
                                className={btnActive.btnActiveAdvanced?"button-left btn button-item-small-green":"button-left btn button-item-small-yellow-out"}>
                            Ver proyectos avanzados
                        </button>
                        <button id={"p_medium"}
                                onClick={ShowMedium}
                                type="button" className={btnActive.btnActiveMedium?"btn button-item-small-green":"btn  button-item-small-yellow-out"}>
                            Ver proyectos intermedios
                        </button>
                        <button id={"p_basic"}
                                onClick={ShowBasic}
                                type="button" className={ btnActive.btnActiveBasic?"button-rigth btn button-item-small-green":"button-rigth btn  button-item-small-yellow-out"}>
                            Ver proyectos básicos
                        </button>
                    </div>
                </Row>
               {projects === null?
                   <div>Error de conexión con la API {generateRandomNumber()} </div>
                   :
                   projects.length === 0?
                       [1,2,3,4,5,6].map((data, index)=>
                            <CardProjectLoading  key={"card-projects-loading-"+generateRandomNumber()} />)
                       :
                       projects.map((data, index)=>
                            <CardProject project={{...data, index}}
                                         cardActive={cardActive}
                                         key={index+"card-project-"+data.id+'-'+generateRandomNumber()} />
                       )
               }
           </Row>
        </Container>
    )
}