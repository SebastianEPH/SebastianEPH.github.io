import {Link} from "react-router-dom";

export const Navbar = ({data}) =>{
    const {logo} = data
    return(
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        {/*<svg className="bi me-2" height="32">*/}
                        {/*    /!*<use xlink:href="#bootstrap"></use>*!/*/}
                        {/*   */}
                        {/*</svg>*/}
                        <img src={logo}  width="40" alt="das"/>
                        <span className="fs-4">Portafolio</span>
                    </a>

                    <ul className="nav nav-pills">
                        {/*<Link to={"/"} className="nav-item"><a href="#" className="nav-link active" aria-current="page">Principal</a></Link>*/}
                        {/*<li className="nav-item"><a href="#" className="nav-link">proyecto</a></li>*/}

                    </ul>
                </header>
            </div>
        </>
    )
}