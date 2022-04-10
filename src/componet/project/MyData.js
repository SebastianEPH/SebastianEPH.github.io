import {Col, Container, Row} from "react-bootstrap";

export const MyData =({data})=> {
    const {name_short,email, name, languages ,details, img } = data
    console.log("oe oe oe", data)
return(
    <Container>
        <div className="row align-items-center flex-row-reverse my-main ">
            <Col xl={5} className={"p-4"}>
                {img?
                    <img src={img} className={"text-center-loading rounded-circle  my-main-img my-main-img-loading"}  alt="perfil-photo"/>
                    :
                    <span className={"text-center-loading my-main-img my-main-img-loading"}>Cargando foto de perfil...</span>
                }
            </Col>
            <Col xl={7}>
                <div className="about-text go-to ">
                    <h3 className="dark-color">Acerca de mi</h3>
                    <h6 className="theme-color lead">Programador Full Stack Junior </h6>
                    {details?
                        <p>{details}</p>
                        :
                        <div className={"mt-2 mb-2"}>
                            <div className={"loader-t loader-length-95"}> </div>
                            <div className={"loader-t loader-length-80"}> </div>
                            <div className={"loader-t loader-length-90"}> </div>
                            <div className={"loader-t loader-length-50"}> </div>
                        </div>
                    }
                    <div className="row about-list">
                        <div className="col-md-6">
                            <label><b>Nombre completo</b></label>
                            {name? <p className={""}>{name}</p> : <div className={"loader-t loader-length-80"}> </div>}

                        </div>
                        <div className="col-md-6">
                            <label><b>Correo</b></label>
                            {email? <p className={""}>{email}</p> : <div className={"loader-t loader-length-70"}> </div>}

                        </div>
                        <div className="col-md-6">
                            {languages?
                                languages.map((data, index)=>{
                                    return(
                                        <div key={index+"language"} className=" media">
                                            <label><b>{data.language}</b></label>
                                            <p className={"loader-text"} >{data.dificulty}</p>
                                        </div>
                                    )
                                })
                                : <div>
                                    <label><b>Idiomas</b></label>
                                    <div className={"loader-t loader-length-80"}></div>
                                </div>
                            }

                            {/*<div className="media">*/}
                            {/*    <label>E-mail</label>*/}
                            {/*    <p>info@domain.com</p>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </Col>
        </div>
    </Container>

)}
