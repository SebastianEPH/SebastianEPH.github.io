import {UseProject} from "./UseProject";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {ItemProject} from "./ItemProject";
import "./Project.css"
import {Row} from "react-bootstrap";
export const Project = ()=>{
    const {project_id} = useParams();
    const {project, getProject} = UseProject([])

    useEffect(()=>{
        getProject(project_id)
    },[])
    // si es undefined el id


    const {id, person, name,version, type,architecture, state, size, platform, licence, ide} = project
    // const {name_short} = person
    console.log("person",person)
    return(
        <div className={"container"}>
        <h1>{name}</h1>
            <Row>
                {person&&
                    <ItemProject data={{
                        title:"Programador",
                        name:person.name_short,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>
                }
                {name&&
                    <ItemProject data={{
                        title:"Nombre",
                        name,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {type&&
                    <ItemProject data={{
                        title:"Tipo",
                        name:type,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {version&&
                    <ItemProject data={{
                        title:"Versión",
                        name:version,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {architecture&&
                    <ItemProject data={{
                        title:"Arquitectura",
                        name:architecture,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {state&&
                    <ItemProject data={{
                        title:"Estado",
                        name:state,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {size&&
                    <ItemProject data={{
                        title:"Tamaño",
                        name:size,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                        className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {platform&&
                    <ItemProject data={{
                        title:"Plataforma",
                        name:platform,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {licence&&
                    <ItemProject data={{
                        title:"Licencia",
                        name:licence,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
                {ide&&
                    <ItemProject data={{
                        title:"IDE o editor de texto",
                        name:ide,
                        icon:<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor"
                                  className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>,
                    }}/>}
            </Row>


        </div>
    )
}
