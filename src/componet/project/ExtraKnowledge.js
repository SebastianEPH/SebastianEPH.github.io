import {Container} from "react-bootstrap";

export const ExtraKnowledge = ({data}) =>{
    const {extra_knowledge } = data
    return(
        <Container>
            {extra_knowledge &&
                <>
                    <h3 className={"title-h1 text-center mt-5 mb-3"}>Otros conocimientos del área de informática</h3>
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
        </Container>
    )
}