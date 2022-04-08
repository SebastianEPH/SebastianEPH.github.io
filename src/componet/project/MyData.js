import {Container} from "react-bootstrap";

export const MyData =({data})=> {
    const {name_short,email, name, languages ,details, img } = data
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
                                        <label><b>Nombre</b></label>
                                        <p>{name}</p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label><b>Correo</b></label>
                                        <p>{email}</p>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    {languages&&
                                        languages.map((data, index)=>{
                                            return(
                                                <div key={index+"language"} className="media">
                                                    <label><b>{data.language}</b></label>
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
            </div>

        </section>
    </>
)}
