import {Link} from "react-router-dom";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

export const CardProject = ({project, cardActive})=>{

    const {
        index,
        id,
        name,
        // web_deploy,
        short_description,
        // description,
        // repository,
        // documentation,
        type,
        // version,
        // architecture,
        // state,
        // platform,
        // licence,
        // ide,
        range,
        // date_init,
        // date_finish,
        tools,
        languages} = project ;
    return(
        <Col lg={6} className={"p-2 center-center"} style={range === cardActive? {}: {"display":"none"}} name={range}>
            <Link key={index+'itemsdfsdsfd'} to={"/projects/"+id} >
                <div className={"card-list-project-item"}>
                    <Row className={"m-0 pt-2 card-list-title"}>
                        <Col sm={4}>
                            <h6 id={"title"} className=" mt-0">{type}</h6>
                        </Col>
                        <Col sm={4}>
                            {/*<h6 id={"title"} className="text-center mt-0">{ date_finish? ("Terminado "+helpers.timeago(date_finish)) : "Aun en desarrollo"}</h6>*/}
                        </Col>
                        <Col sm={4} className={"float-end"}>
                            <div className={"float-end"}>
                                <h6 id={"title"}  className="mt-0">{range? 'Nivel '+ range : ""}</h6>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card-body">
                        <h4>{name}</h4>
                        <p className="project-details clear-link">{short_description}</p>
                    </Row>
                    <div className={"ps-3 pe-3 pb-2"}>
                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip >Click para ver detalles</Tooltip>}>
                            <Row className={"custom-button"}>
                                <Col sm={12}>
                                    tools
                                    {tools &&  tools.map((data, index)=> <img key={"img_"+index+"_tools"} style={{width: "40px"}}  src={data.icon} alt={data.tools}/>)}
                                    {languages && languages.map((data, index)=><img key={"img_"+index+"_language"} style={{width: "40px"}}  src={data.icon} alt={data.language} />)}
                                </Col>
                            </Row>
                        </OverlayTrigger>
                    </div>
                </div>
            </Link>
        </Col>
    )

}