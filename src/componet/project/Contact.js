import {Container, Row} from "react-bootstrap";

export const Contact = ({data}) =>{
    const { contact } = data
    return(
        <Container>
            <h3 className={"title-h1 text-center mt-5 xxl-3"}>Contacto</h3>
            {contact?
                contact.map((data, index)=>
                    <Row key={"contact_"+index} >
                        <div className="d-flex align-items-center justify-content-between px-4">
                            <div className="d-flex align-items-center">
                                {/*<div className="mb-0" >*/}
                                <img src={data.icon}  width={"40px"} alt={"img_"+data.web}/>
                                {/*</div>*/}
                                <div className="ms-4">
                                    <div className="small">{data.web}</div>
                                    <div className="text-muted">{data.link}</div>
                                </div>
                            </div>
                            <div className="small">
                                <span onClick={()=>{window.location.href = data.link}} className="badge rounded-pill fw-light button-item-small-green">Visitar</span>
                            </div>
                        </div>
                    </Row>
                )
                :
                <div className={"text-center"}>Cargando datos...
                    <br/>
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </Container>
    )
}