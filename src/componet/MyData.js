import {Col, Container, Row} from "react-bootstrap";
// import {UseMyData} from "../Use/UseMyData";
// import {useEffect} from "react";
// import {UseMyLanguages} from "../Use/UseMyLanguages";
// import {UseMyEmails} from "../Use/UseMyEmail";

export const MyData =({data})=> {
    // const {myData, getMyData } = UseMyData([]);
    // const {myLanguages, getMyLanguages } = UseMyLanguages([]);
    // const {myEmails, getMyEmails } = UseMyEmails([]);
    //
    // useEffect(()=>{
    //     // getMyData();
    //     getMyLanguages();
    //     getMyEmails();
    // },[])

    const myLanguages  =[
        {
            "id": 1,
            "language": "Ingles",
            "difficulty": "Básico"
        }
    ]
    const myEmails = [
        {
            "id": 1,
            "email": "sebastianeph99@gmail.com",
            "link": "mail:sebastianeph99@gmail.com",
            "icon": "www.icon.pnh",
            "description": "Only contac",
            "main": 1
        },
        {
            "id": 2,
            "email": "sebastianeph00@gmail.com",
            "link": "mail:sebastianeph00@gmail.com",
            "icon": "www..png",
            "description": "Secundary email",
            "main": null
        }
    ]

    const {fullname, description, photo, professional_profile } = data

return(
    <Container>
        <Row className="align-items-center flex-row-reverse my-main ">
            <Col xl={5} className={"p-4"}>
                {photo?
                    <img src={photo} className={"text-center-loading rounded-circle  my-main-img my-main-img-loading"}  alt="perfil-photo"/>
                    :
                    <span className={"loader text-center-loading my-main-img my-main-img-loading"}>Cargando foto de perfil...</span>
                }
            </Col>
            <Col xl={7}>
                <div className="about-text go-to ">
                    <h3 className="dark-color">Acerca de mi</h3>
                    <h6 className="theme-color lead">{professional_profile}</h6>
                    {description?
                        <p>{description}</p>
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
                            {fullname? <p className={""}>{fullname}</p> : <div className={"loader-t loader-length-80"}> </div>}

                        </div>
                            {myEmails?
                                myEmails.map((data, index)=>{
                                    return(
                                        <div key={index+"emails"} className="col-md-6">
                                        <div className=" media">
                                            <label><b>Email</b></label>  | <span className={"loader-text"}>{data.description}</span>
                                            <br/>
                                            <label><b>{data.email}</b></label>
                                        </div>
                                        </div>
                                    )
                                })
                                : <div>
                                    <label><b>Idiomas</b></label>
                                    <div className={"loader-t loader-length-80"}></div>
                                </div>
                            }


                        <div className="col-md-6">
                            {myLanguages?
                                myLanguages.map((data, index)=>{
                                    return(
                                        <div key={index+"languages"} className="media">
                                            <label><b>{data.language}</b></label>
                                            <p className={"loader-text"} >{data.difficulty}</p>
                                        </div>
                                    )
                                })
                                : <div>
                                    <label><b>Idiomas</b></label>
                                    <div className={"loader-t loader-length-80"}></div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

)}
