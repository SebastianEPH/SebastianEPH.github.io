import {UseProject} from "./UseProject";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {ItemProject} from "./ItemProject";
import "./Project.css"
import {Button, Col, Container, Row} from "react-bootstrap";
import {ItemFeature} from "./UpdateProject/ProjectComponents/ItemFeature";
import {ItemScreenshot} from "./UpdateProject/ProjectComponents/ItemScreenshot";
export const Project = ()=>{
    const {project_id} = useParams();
    const {project, getProject} = UseProject([])

    useEffect(()=>{
        getProject(project_id)
    },[])
    // si es undefined el id

    const {id, person, name,version, type,architecture, state, size, platform, licence, ide,
    note,description, tools, language,img, feature, screenshot, repository, documentation, web_deploy} = project
    console.log(project)
    // const {name_short} = person

    return(
        <Container>
            <div className={"d-flex justify-content-center"}>
                <div id={"title-project"}>
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <div className="p-2 bd-highlight"> </div>
                        <div className="p-2 bd-highlight"><h1 >{name}</h1></div>
                        <div className="p-2 bd-highlight box-img-icon d-flex justify-content-center  mt-5">
                            {tools &&  tools.map((data, index)=> <img key={index+(data.tools)}  className={"img-icon"}  src={data.icon} alt={data.tools}/>)}
                            {language &&  language.map((data, index)=><img key={index+(data.language)} className={"img-icon"}  src={data.icon} alt={data.language} />)}
                        </div>
                    </div>
                </div>

                <Row id={"item-project"}>
                    {person&&
                        <ItemProject data={{
                            title:"Programador",
                            name:person.name_short,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"/>
                            </svg>,
                        }}/>
                    }
                    {name&&
                        <ItemProject data={{
                            title:"Nombre",
                            name,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-type" viewBox="0 0 16 16">
                                <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/>
                            </svg>,
                        }}/>}
                    {type&&
                        <ItemProject data={{
                            title:"Tipo",
                            name:type,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"   className="bi bi-hash" viewBox="0 0 16 16">
                                <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                            </svg>,
                        }}/>}
                    {version&&
                        <ItemProject data={{
                            title:"Versión",
                            name:version,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <circle cx="256" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10"/>
                                <circle cx="346" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10"/>
                                <circle cx="166" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10"/>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="42" d="M160 368L32 256l128-112M352 368l128-112-128-112"/>
                            </svg>,
                        }}/>}
                    {architecture&&
                        <ItemProject data={{
                            title:"Arquitectura",
                            name:architecture,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <title>Cog</title>
                                <path d="M464 249.93a10.58 10.58 0 00-9.36-9.94L429 235.84a5.42 5.42 0 01-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 012.63-5.85l22.78-12.65a10.35 10.35 0 005-12.83l-3.95-10.9a10.32 10.32 0 00-12.13-6.51l-25.55 5a5.51 5.51 0 01-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 01.44-6.5l17-19.64a10.42 10.42 0 00.39-13.76l-7.42-8.91a10.24 10.24 0 00-13.58-2l-22.37 13.43a5.39 5.39 0 01-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 01-1.72-6.21l9.26-24.4a10.35 10.35 0 00-4.31-13.07l-10.09-5.89a10.3 10.3 0 00-13.45 2.83L325 96.28a4.6 4.6 0 01-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 01-3.74-5.23l.39-26.07a10.48 10.48 0 00-8.57-10.88l-11.45-2a10.45 10.45 0 00-11.75 7.17L266 82.1a5.46 5.46 0 01-5.36 3.65h-9.75a5.5 5.5 0 01-5.3-3.67l-8.46-24.67a10.46 10.46 0 00-11.77-7.25l-11.47 2a10.46 10.46 0 00-8.56 10.79l.4 26.16a5.45 5.45 0 01-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 00156.69 73l-10.06 5.83A10.36 10.36 0 00142.31 92l9.25 24.34a5.54 5.54 0 01-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 01-6.35.64L114 115.74a10.4 10.4 0 00-13.61 2L93 126.63a10.31 10.31 0 00.37 13.75L110.45 160a5.42 5.42 0 01.45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 01-5.86 2.82l-25.51-4.93a10.34 10.34 0 00-12.14 6.51l-4 10.88a10.38 10.38 0 005 12.85l22.78 12.65a5.39 5.39 0 012.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 01-4.46 4.64l-25.69 4.15A10.42 10.42 0 0048 250.16v11.58A10.26 10.26 0 0057.16 272l25.68 4.14a5.41 5.41 0 014.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 01-2.63 5.85l-22.77 12.67a10.35 10.35 0 00-5 12.83l4 10.9a10.33 10.33 0 0012.13 6.51l25.55-4.95a5.49 5.49 0 015.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 01-.44 6.5l-17 19.63a10.41 10.41 0 00-.5 13.77l7.41 8.91a10.23 10.23 0 0013.58 2l22.37-13.43a5.39 5.39 0 016.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 011.73 6.21l-9.27 24.4a10.35 10.35 0 004.31 13.07l10.11 5.84a10.3 10.3 0 0013.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84 3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 013.75 5.23l-.4 26.05a10.5 10.5 0 008.57 10.88l11.45 2a10.43 10.43 0 0011.75-7.17l8.5-24.77a5.45 5.45 0 015.36-3.65h9.75a5.49 5.49 0 015.3 3.67l8.47 24.67a10.48 10.48 0 0010 7.41 9.74 9.74 0 001.78-.16l11.47-2a10.46 10.46 0 008.56-10.79l-.4-26.16a5.43 5.43 0 013.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 00355 439l10.07-5.83a10.35 10.35 0 004.31-13.1l-9.24-24.34a5.52 5.52 0 011.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 016.38-.62l22.39 13.4a10.39 10.39 0 0013.61-2l7.4-8.9a10.31 10.31 0 00-.37-13.75l-17.06-19.67a5.42 5.42 0 01-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 015.86-2.82l25.48 4.97a10.34 10.34 0 0012.14-6.51l3.95-10.88a10.37 10.37 0 00-5-12.84l-22.8-12.67a5.4 5.4 0 01-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 014.46-4.64l25.69-4.14a10.43 10.43 0 009.18-10.28v-11.71zm-282.45 94a15.8 15.8 0 01-25.47 2.66 135.06 135.06 0 01.42-181.65 15.81 15.81 0 0125.5 2.77l45.65 80.35a15.85 15.85 0 010 15.74zM256 391.11a134.75 134.75 0 01-28.31-3 15.81 15.81 0 01-10.23-23.36l46-80a15.79 15.79 0 0113.7-7.93h92.14a15.8 15.8 0 0115.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76zm7.51-163.9L218 147.07a15.81 15.81 0 0110.31-23.3 134 134 0 0127.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 01-15.1 20.53h-92a15.78 15.78 0 01-13.76-8z"/>
                            </svg>,
                        }}/>}
                    {state&&
                        <ItemProject data={{
                            title:"Estado",
                            name:state,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <title>Checkmark Done</title>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"/>
                            </svg>,
                        }}/>}
                    {size&&
                        <ItemProject data={{
                            title:"Tamaño",
                            name:size,
                            icon:<svg  id={"iicon"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"><path  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>,
                        }}/>}
                    {platform&&
                        <ItemProject data={{
                            title:"Plataforma",
                            name:platform,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  className="bi bi-collection" viewBox="0 0 16 16">
                                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                            </svg>,
                        }}/>}
                    {licence&&
                        <ItemProject data={{
                            title:"Licencia",
                            name:licence,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
                                <path d="M288 192h129.81a2 2 0 001.41-3.41L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16zM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z"/>
                                <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160a32 32 0 01-32 32h-96a32 32 0 01-32-32v-48a32 32 0 0132-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0132 32z"/>
                            </svg>,
                        }}/>}
                    {ide&&
                        <ItemProject data={{
                            title:"IDE o editor de texto",
                            name:ide,
                            icon: <svg id={"iicon"} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
                                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                            </svg>,
                        }}/>}
                </Row>
            </div>
            {note&&
                note.length >= 1?
                <Row className={"mt-5 card card-container"}>
                    <h3 id={"card_title"}>Nota:</h3>
                    <p id={"card_description"}>{note}</p>
                </Row>:false
            }
            {description&&
                description.length >= 1?
                <Row  className={"mt-5 card card-container"}>
                    <h3 id={"card_title"}>Descripción:</h3>
                    <p id={"card_description"}>{description}</p>
                </Row>:false
            }

            {img&&
                <Row className={"mt-5 card card-container"}>
                    <h3 id={"card_title"}>Imagen:</h3>
                    <ul className="list-group list-group-numbered">
                        <img  id={"screenshot-item"} className={"mt-3"}   src={img} alt="imagen web"/>
                    </ul>
                </Row>
            }
            {web_deploy&&
                <Row className={"mb-4 mt-4"}>
                    <Button id={"button-info"}  href={web_deploy}>
                <span  className={"p-5"}>Ver aplicación web despleada
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="ms-2 bi bi-box-arrow-up-right" viewBox="0 0 22 22">
                          <path fillRule="event"
                                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                          <path fillRule="event"
                                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                </span>
                    </Button>
                </Row>
            }
            <Row className={"mt-4 mb-0 "}>
                <Col className={"me-2"}>
                    <Row>
                        <Button id={"button-info"}  href={repository}><span >Ir a ver Código en github
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="ms-2 bi bi-box-arrow-up-right" viewBox="0 0 22 22">
                          <path fillRule="event"
                                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                          <path fillRule="event"
                                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                        </span></Button>
                    </Row>
                </Col>
                <Col className={"ms-2"}>
                    <Row>
                        <Button id={"button-info"} href={documentation}>Ir a Documentación
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="ms-2 bi bi-box-arrow-up-right" viewBox="0 0 22 22">
                                <path fillRule="event"
                                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fillRule="event"
                                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                        </Button>
                    </Row>
                </Col>
            </Row>
            { project.feature&& <ItemFeature
                        feature={project.feature}
                        typeName={"feature"}
                        reloadForDB={getProject}
                        onlyRead={true}
                    />
            }
            {project.screenshot && <ItemScreenshot
                screenshot={project.screenshot}
                typeName={"screenshot"}
                reloadForDB={getProject}
                onlyRead={true}
            />}

            {/*{screenshot&&*/}
            {/*   screenshot.length >= 1?*/}
            {/*    <Row className={"card  card-container mt-5"}>*/}
            {/*        <h3 id={"card_title"} >Screenshot:</h3>*/}
            {/*        {screenshot.map((data, index)=>{*/}
            {/*            return(*/}
            {/*                <div className={"text-center"}>*/}
            {/*                    <br/><br/><br/>*/}
            {/*                    <span id={"screenshot-text"} >{data.details}</span>*/}
            {/*                    <br/>*/}
            {/*                    <img id={"screenshot-item"} className={"mt-5"} key={index+("-img")}  src={data.screenshot} alt={"screenshot"}/>*/}
            {/*                </div>*/}
            {/*            )})*/}
            {/*        }*/}
            {/*        <br/>*/}
            {/*    </Row>:false*/}
            {/*}*/}

            <Row className={"mt-5 mb-4"}>
                <Link to={"/"}   className={" btn button-back"}>
                    Retornar el principio
                </Link>
                {/*<Button id={"button-info"} href={documentation}>Ir a Documentación</Button>*/}

            </Row>
            <div className="position-relative">
                {/*<div className="position-absolute top-0 start-0">ertterer</div>*/}
                {/*<div className="position-absolute top-0 start-50 translate-middle-x">ertert</div>*/}
                {/*<div className="position-absolute top-0 end-0">dfsf</div>*/}
                {/*<div className="position-absolute top-50 start-0 translate-middle-y">sdfsd</div>*/}
                {/*<div className="position-absolute top-50 start-50 translate-middle">sfs</div>*/}
                {/*<div className="position-absolute top-50 end-0 translate-middle-y">sdfsdfds</div>*/}
                {/*<div className="position-absolute bottom-0 start-0">ddd</div>*/}
                <div className="position-absolute bottom-0 start-50 translate-middle-x">

                </div>
                {/*<div className="position-absolute bottom-0 end-0">ddddddd</div>*/}
            </div>

        </Container>
    )
}
