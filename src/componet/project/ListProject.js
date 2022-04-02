import {UseProject} from "./UseProject";
import "./ListProject.css"
import {Link} from "react-router-dom";
export const ListProject =()=>{

    const {project, getProject} = UseProject([])

    console.log("projecto uno=> ",project)
    return(
        <>
            {project.map(({id, name, data_init, data_finish, web_deploy, description,repository, documentation,type, img,tools, language},index)=>{
                return(
                    <div key={index+id} className={"m-1 p-2 pb-5"} >
                        <div className="content">
                            <div className="card">
                                <div className="firstinfo">
                                    <img  src={img} alt={"img-"+(name||"")}/>
                                    <div className="profileinfo">
                                        <h1>{name}</h1>
                                        <h3>{type}</h3>
                                        <p className="bio">{description}</p>
                                    </div>
                                    <div className={"row p-0 m-0"}>
                                        <button type="button" className="btn btn-outline-primary">Ir a repositorio </button>
                                        <Link to={`/project/${id}`} className="btn btn-outline-primary">Ver Detalles </Link>
                                    </div>
                                </div>
                                <small className="text-muted text-end">Last updated </small>
                            </div>
                            <div className="badgescard">
                                {tools.map((data, index)=>{
                                    return(
                                        <img key={index+(data.tools)} className={"img-icon"}  src={data.icon} alt={data.tools} />
                                    )
                                })}
                                {language.map((data, index)=>{
                                    return(
                                        <img key={index+(data.language)} className={"img-icon"}  src={data.icon} alt={data.language} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}


