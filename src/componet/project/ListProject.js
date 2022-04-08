import "./ListProject.css"
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
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

    return(
        <Container>
           <Row>
             <Container>
                 <h3 id={"card_title"} className={"text-center mt-4 mb-4"}>Proyectos nivel avanzado</h3>
             </Container>
               <Row className={"m-0 p-0  mb-4 "}>
                   <div className="btn-group " role="group" aria-label="Basic mixed styles example">
                       <button id={"p_advanced"} onClick={ShowAdvanced} type="button" className={btnActive.btnActiveAdvanced?"btn btn-success":"btn  btn-outline-warning"}>Ver proyectos avanzados</button>
                       <button id={"p_medium"} onClick={ShowMedium} type="button" className={btnActive.btnActiveMedium?"btn btn-success":"btn btn-outline-warning"}>Ver proyectos intermedios</button>
                       <button id={"p_basic"} onClick={ShowBasic} type="button" className={ btnActive.btnActiveBasic?"btn btn-success":"btn btn-outline-warning"}>Ver proyectos básicos</button>
                   </div>
               </Row>
               {projects.map(({id, name,range, data_init,range_id, data_finish, web_deploy, description,repository,
                                  short_details, documentation,type, img,tools, language}, index)=>{
                  return(
                   <Col style={range_id === 3? {}: {"display":"none"}} name={"range"+range_id} xxl={6} className={"p-2"} key={index+ rand +id}>
                       <div className="card ccard ">
                           <Row className={" m-0 pt-2 title-container"}>
                               <Col md={5}>
                                   <h6 id={"title"} className=" mt-0" title="Number of Customers">{type}</h6>
                               </Col>
                               <Col md={7} className={"float-end"}>
                                   <div className={"float-end"}>
                                       <h6 id={"title"}  className=" mt-0" title="Number of Customers">{range? 'Nivel '+ range : ""}</h6>
                                   </div>
                               </Col>
                           </Row>
                           <div className="card-body">
                               {/*mt-3*/}
                               <h4 className="">{name}</h4>
                               <p className="project-details">{short_details}</p>
                               <Link to={`/project/${id}`}>
                                   <Row className="mb-0 custom-button  ">
                                       <Col sm={9}>
                                           {tools &&  tools.map((data, index)=> <img key={"img_"+index+"_tools"} style={{width: "40px"}}  src={data.icon} alt={data.tools}/>)}
                                           {language && language.map((data, index)=><img key={"img_"+index+"_language"} style={{width: "40px"}}  src={data.icon} alt={data.language} />)}
                                       </Col>
                                       <Col sm={3} className={"pt-2 float-end"}>
                                           <span className=" float-end fw-lighter ">18 de agoto 2020</span>
                                       </Col>
                                   </Row>
                               </Link>
                           </div>
                       </div>
                   </Col>
                   )
               })}
           </Row>
        </Container>
    )
}