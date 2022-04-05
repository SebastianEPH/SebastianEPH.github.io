import {UseProject} from "./UseProject";
import "./ListProject.css"
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
export const ListProject =()=>{

    const {projects, getProjects} = UseProject([])

    console.log("projecto uno=> ",projects)

    const rand =()=>{
        return Math.floor(Math.random() * (15-1 + 1)) + 1
    }

    return(
        <Container>
           <Row>
               <Link to={"/project/add"}>

               </Link>
               {projects.map(({id, name, data_init, data_finish, web_deploy, description,repository, documentation,type, img,tools, language}, index)=>{
                   return(
                       <Col md={6} className={"p-3 "} key={index+ rand +id}>
                            <div className="card widget-flat ccard">
                                <div className="card-body">
                                    <div className="float-end">
                                        <i className="mdi mdi-account-multiple widget-icon"/>
                                    </div>
                                    <h6 id={"title"} className=" fw-normal mt-0"
                                        title="Number of Customers">{type}</h6>
                                    <h4 className="mt-3 mb-3">{name}</h4>
                                    <p className="mb-0 text-muted">
                                    <Link to={`/project/${id}`}>
                                        <table className="table mb-0 ">
                                            <thead>
                                            <tr>
                                                <th scope="col">
                                                    {tools &&  tools.map((data, index)=> <img key={index+(data.tools)} style={{width: "40px"}}  src={data.icon} alt={data.tools}/>)}
                                                    {language && language.map((data, index)=><img key={index+(data.language)} style={{width: "40px"}}  src={data.icon} alt={data.language} />)}
                                                </th>
                                                <th scope="col" className={"text-end "}>
                                                    {/*<div  className={"text-end "}>*/}
                                                        <span className=" fw-lighter ">18 de agoto 2020</span>
                                                        {/*<span className="text-success me-2 text-end"><i className="mdi mdi-arrow-up-bold"/> 5.27%</span>*/}
                                                    {/*</div>*/}
                                                </th>
                                            </tr>
                                            </thead>
                                        </table>
                                    </Link>
                                    </p>
                                </div>
                            </div>
                       </Col>
                   )
               })}
           </Row>
        </Container>
    )
}

// {/*<div className="ccontent">*/}
// {/*    <div className="ccard">*/}
// {/*        <div className="ffirstinfo">*/}
// {/*            <img  src={img} alt={"img-"+(name||"")}/>*/}
// {/*            <div className="profileinfo">*/}
// {/*                <h1>}</h1>*/}
// {/*                <h3></h3>*/}
// {/*                <p className="bio">{description}</p>*/}
// {/*            </div>*/}
// {/*            <div className={"row p-0 m-0"}>*/}
// {/*                <button type="button" className="btn btn-outline-primary">Ir a repositorio </button>*/}
// {/*                /!*<Link to={`/project/${id}`} className="btn btn-outline-primary">Ver Detalles </Link>*!/*/}
// {/*            </div>*/}
// {/*        </div>*/}
// {/*        <small className="text-muted text-end">Last updated </small>*/}
// {/*    </div>*/}
// {/*<div className="bbadgescard">*/}
// {/*    {tools.map((data, index)=>{*/}
// {/*        return(*/}
// {/*            <img key={index+(data.tools)} className={"img-icon"}  src={data.icon} alt={data.tools} />*/}
// {/*        )*/}
// {/*    })}*/}
// {/*    {language.map((data, index)=>{*/}
// {/*        return(*/}
// {/*            <img key={index+(data.language)} className={"img-icon"}  src={data.icon} alt={data.language} />*/}
// {/*        )*/}
// {/*    })}*/}
// {/*</div>*/}
// {/*    </div>*/}

