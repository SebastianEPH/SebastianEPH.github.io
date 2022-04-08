import {Container} from "react-bootstrap";

export const MyData =({data})=> {
    const {name_short,name, languages , country, contact,details, img, extra_knowledge } = data
    console.log("oe oe oe", data)
return(
    <>
        <section className="section about-section gray-bg" id="about">
            <div className="container ">
                <div className="row align-items-center flex-row-reverse my-main ">
                    <div className="col-lg-6 ">
                        <div className="about-text go-to ">
                            <h3 className="dark-color">Acerca de mi</h3>
                            <h6 className="theme-color lead">Programador Full Stack Junior </h6>
                            <p>{details}</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Nombre</label>
                                        <p>{name}</p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    {languages&&
                                        languages.map((data, index)=>{
                                            return(
                                                <div key={index+"language"} className="media">
                                                    <label>{data.language}</label>
                                                    <p>{data.dificulty}</p>
                                                </div>
                                            )
                                        })
                                    }

                                    {/*<div className="media">*/}
                                    {/*    <label>E-mail</label>*/}
                                    {/*    <p>info@domain.com</p>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={img} className={"border-secondary rounded-circle my-main-img"}  alt="perfil-photo"/>
                    </div>
                </div>

                <h3 id={"card_title"} className={"text-center mt-5"}>Contacto</h3>
                <div className="container-xl px-4 mt-4">
                        <div className="card ccard card-header-actions mb-4">
                            <div className="card-body px-0">
                                {contact &&
                                contact.map((data, index)=>{
                                    return(
                                        <div key={"contact_"+index} className="d-flex align-items-center justify-content-between px-4">
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0" >
                                                    <img src={data.icon}  width={"45px"} alt={"img_"+data.web}/>
                                                </h6>
                                                <div className="ms-4">
                                                    <div className="small">{data.web}</div>
                                                    <div className="text-xs text-muted">{data.link}</div>
                                                </div>
                                            </div>
                                            <div className="ms-4 small">
                                                <span onClick={()=>{window.location.href = data.link}} className="badge rounded-pill fw-light button-item-small-green">Visitar</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                </div>

                {extra_knowledge &&
                    <>
                    <h3 id={"card_title"} className={"text-center mt-5"}>Otros conocimientos del área de informática:</h3>
                    <div className="mb-4 mt-5 ">
                        <div className="row d-grid gap-2 d-md-flex justify-content-center ">
                            {extra_knowledge.map(({knowlegge,icon, dificulty}, index)=>{
                                return(
                                    <div key={"knowledge_"+ index} className="col-2 mb-4 ">
                                        <div className="count-data text-center">
                                            <span className="m-0px font-w-600">{dificulty}</span>
                                            <div className="count h2" >
                                                <img src={icon} width={"85px"} alt={knowlegge}/>
                                                {/*{icon}*/}
                                            </div>

                                            <h5 className="m-0px font-w-600">{knowlegge}</h5>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </>
                }
            </div>

        </section>
    </>
)}
