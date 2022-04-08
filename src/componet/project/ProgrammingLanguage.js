import {Container} from "react-bootstrap";

export const ProgrammingLanguage = ({data})=>{
    const {programming_language} = data
    return(
        <Container>
            <h3  className={"title-h1 text-center mt-5 mb-3"}>Lenguajes de marcado y programación</h3>
            <div className="mb-4 mt-5 ">
                <div className="row d-grid gap-2 d-md-flex justify-content-center ">
                    {programming_language&&
                        programming_language.map(({icon,dificulty, language}, index)=>{
                            return(
                               <div key={"programming_language_"+ index} className="col-2 mb-4 ">
                                   <div className="count-data text-center">
                                       <span className="m-0px font-w-600">{dificulty}</span>
                                       <div className="count  mt-3" >
                                           <img src={icon} width={"85px"} alt={language}/>
                                           {/*{icon}*/}
                                       </div>

                                       <h5 className="m-0px font-w-600">{language}</h5>
                                   </div>
                               </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}