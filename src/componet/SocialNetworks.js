import {Container, Row} from "react-bootstrap";
import {LoadingDada} from "./loading/loadingDada";
// import {useEffect} from "react";
// import {UseMySocialNetworks} from "../Use/UseMySocialNetworks";

export const SocialNetworks = ({data}) =>{

    // const {mySocialNetworks, getMySocialNetworks } = UseMySocialNetworks([]);
    //
    // useEffect(()=>{
    //     getMySocialNetworks();
    // },[])
    const mySocialNetworks = data;
    return(
        <Container>
            <h3 className={"title-h1 text-center mt-5 xxl-3"}>Contacto</h3>
            {mySocialNetworks?
                mySocialNetworks.map((data, index)=>
                    <Row key={"contact_"+index} >
                        <div className="d-flex align-items-center justify-content-between px-4">
                            <div className="d-flex align-items-center">
                                <img src={data.icon}  width={"40px"} alt={"img_"+data.web}/>
                                <div className="ms-4">
                                    <div className="small">{data.web}</div>
                                    <div className="text-muted cursor-link">{data.link}</div>
                                </div>
                            </div>
                            <div style={{"cursor":"pointer"}}>
                                <span onClick={()=>{window.open(data.link, '_blank');}
                                } className="badge rounded-pill fw-light button-item-small-green ">Visitar</span>
                            </div>
                        </div>
                    </Row>
                )
                : <LoadingDada/>
            }
        </Container>
    )
}