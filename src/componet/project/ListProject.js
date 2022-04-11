import "./ListProject.css"
import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";
export const ListProject =({data})=>{
    const projects = data
    const rand =()=>{
        return Math.floor(Math.random() * (15-1 + 1)) + 1
    }

    const [btnActive, setBtnActive] = useState({
        btnActiveAdvanced:true,
        btnActiveMedium:false,
        btnActiveBasic:false
    })

    const displayShow =(elementId, state=true) =>{
        let div = document.getElementsByName("range"+elementId)
        for (let i = 0; i < div.length; i++) {
            state? div[i].style.setProperty("display","initial")
                : div[i].style.setProperty("display","none")
        }
    }
    const ShowAdvanced =() =>{
        displayShow(1, false)
        displayShow(2, false)
        displayShow(3, true)
        document.getElementById("card_title").innerHTML = "Proyectos nivel avanzado";
        setBtnActive({
            btnActiveAdvanced:true,
            btnActiveMedium:false,
            btnActiveBasic:false
        })
    }
    const ShowMedium =() =>{
        displayShow(1, false)
        displayShow(2, true)
        displayShow(3, false)
        document.getElementById("card_title").innerHTML = "Proyectos nivel Intermedio";
        setBtnActive({
            btnActiveAdvanced:false,
            btnActiveMedium:true,
            btnActiveBasic:false
        })
    }
    const ShowBasic =() =>{
        displayShow(1, true)
        displayShow(2, false)
        displayShow(3, false)
        document.getElementById("card_title").innerHTML = "Proyectos nivel básico";
        setBtnActive({
            btnActiveAdvanced:false,
            btnActiveMedium:false,
            btnActiveBasic:true
        })
    }

    console.log("esto es projects",projects)
    return(
        <Container>
            <h3 id={"card_title"} className={"text-center mt-4 mb-4"}>Proyectos nivel avanzado</h3>
           <Row>
                <Row className={"m-0 p-0  mb-4 "}>
                    <div className="btn-group " role="group" aria-label="Basic mixed styles example">
                        <button id={"p_advanced"} onClick={ShowAdvanced} type="button" className={btnActive.btnActiveAdvanced?"btn btn-success":"btn  btn-outline-warning"}>Ver proyectos avanzados</button>
                        <button id={"p_medium"} onClick={ShowMedium} type="button" className={btnActive.btnActiveMedium?"btn btn-success":"btn btn-outline-warning"}>Ver proyectos intermedios</button>
                        <button id={"p_basic"} onClick={ShowBasic} type="button" className={ btnActive.btnActiveBasic?"btn btn-success":"btn btn-outline-warning"}>Ver proyectos básicos</button>
                    </div>
                </Row>
                {projects.length === 0
                    ?[1,2,3,4,5,6].map((data, index)=>
                        <Col lg={6} key={index+ rand+"_loading_projects"} className={"p-2 center-center"}  >
                            <div className={"card-list-project-item"}>
                                <Row className={"m-0 pt-2 card-list-title"}>
                                    <Col sm={5}>
                                        <div className=" mt-0 loader-t loader-t-min loader-length-60 mb-2"> </div>
                                    </Col>
                                    <Col sm={7} className={"float-end"}>
                                        <div className={"float-end loader-t loader-t-min loader-length-60 mb-2"}>
                                            <h6 className="mt-0 "> </h6>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="card-body ">
                                    <h1 className={"loader-t  loader-length-50 mb-4"}> </h1>
                                    <p className="loader-t loader-t-min loader-length-95 mb-2"> </p>
                                    <p className="loader-t loader-t-min loader-length-90 mb-2"> </p>
                                    <p className="loader-t loader-t-min loader-length-70 mb-2"> </p>
                                </Row>
                                <div className={"ps-3 pe-3 pb-2"}>
                                    <Row className={"custom-button"}>
                                        <Col sm={12}>
                                            {[1,2,3,4,5,6,7,8].map(()=>
                                                <div className="spinner-grow me-2 ms-2 " role="status">
                                                    <span className="visually-hidden bg-dark ">Loading...</span>
                                                </div>
                                            )
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    )
                :
                    projects.map(({id, name,range, data_init,range_id, data_finish, web_deploy, description,repository, short_details, documentation,type, img,tools, language}, index)=>
                        <Col lg={6} key={index+ rand +id} className={"p-2 center-center"} style={range_id === 3? {}: {"display":"none"}} name={"range"+range_id}>
                           <Link to={"/project/"+id} >
                               <div className={"card-list-project-item"}>
                                   <OverlayTrigger placement={'bottom'} overlay={<Tooltip>{data_finish || "Aun en desarrollo"}</Tooltip>}>
                                       <Row className={"m-0 pt-2 card-list-title"}>
                                           <Col sm={5}>
                                               <h6 id={"title"} className=" mt-0">{type}</h6>
                                           </Col>
                                           <Col sm={7} className={"float-end"}>
                                               <div className={"float-end"}>
                                                   <h6 id={"title"}  className="mt-0">{range? 'Nivel '+ range : ""}</h6>
                                               </div>
                                           </Col>
                                       </Row>
                                   </OverlayTrigger>
                                   <Row className="card-body">
                                       <h4>{name}</h4>
                                       <p className="project-details clear-link">{short_details}</p>
                                   </Row>
                                   {/*<Link to={"/project/"+id}>*/}
                                   <div className={"ps-3 pe-3 pb-2"}>
                                       <OverlayTrigger placement={'bottom'} overlay={<Tooltip >Click para ver detalles</Tooltip>}>
                                           <Row className={"custom-button"}>
                                               <Col sm={12}>
                                                   {tools &&  tools.map((data, index)=> <img key={"img_"+index+"_tools"} style={{width: "40px"}}  src={data.icon} alt={data.tools}/>)}
                                                   {language && language.map((data, index)=><img key={"img_"+index+"_language"} style={{width: "40px"}}  src={data.icon} alt={data.language} />)}
                                               </Col>
                                           </Row>
                                       </OverlayTrigger>
                                   </div>
                                   {/*</Link>*/}
                               </div>
                           </Link>
                        </Col>
                    )

                }
           </Row>
        </Container>
    )
}