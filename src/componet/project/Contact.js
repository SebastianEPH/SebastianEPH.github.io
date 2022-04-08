import {Container} from "react-bootstrap";

export const Contact = ({data}) =>{
    const { contact } = data
    return(
        <Container>
            {contact &&
                <>
                    <h3 className={"title-h1 text-center mt-5 xxl-3"}>Contacto</h3>
                        <div className="card ccard mb-4">
                            <div className="card-body px-0">
                                {contact.map((data, index)=>{
                                    return(
                                        <div key={"contact_"+index} className="d-flex align-items-center justify-content-between px-4">
                                            <div className="d-flex align-items-center">
                                                {/*<div className="mb-0" >*/}
                                                    <img src={data.icon}  width={"40px"} alt={"img_"+data.web}/>
                                                {/*</div>*/}
                                                <div className="ms-4">
                                                    <div className="small">{data.web}</div>
                                                    <div className="text-muted">{data.link}</div>
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
                </>}
        </Container>
    )
}