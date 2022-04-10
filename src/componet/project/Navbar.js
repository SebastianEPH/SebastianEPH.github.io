import {Link} from "react-router-dom";

export const Navbar = ({data}) =>{
    const {logo} = data
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {logo?
                        <img src={logo}  width="40" alt="das"/>
                        :
                        <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    <span className="fs-4">Portafolio</span>
                </Link>
                <ul className="nav nav-pills">  </ul>
            </header>
        </div>
    )
}