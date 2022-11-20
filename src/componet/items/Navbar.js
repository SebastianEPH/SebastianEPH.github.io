import {Link} from "react-router-dom";
// import {UseMyData} from "../../Use/UseMyData";
// import {useEffect} from "react";

export const Navbar = () =>{
    // const {myData, getMyData } = UseMyData([]);
    // useEffect(()=>{
    //     getMyData();
    // },[])
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/*{myData &&*/}
                    {/*    myData.logo?*/}
                    {/*    <img src={myData.logo}  width="40" alt="das"/>*/}
                    <img src={"https://imgur.com/qnBcozh.png"}  width="40" alt="das"/>
                    {/*    // :*/}
                    {/*    // <div className="spinner-grow" role="status">*/}
                    {/*    //     <span className="visually-hidden">Loading...</span>*/}
                    {/*    // </div>*/}
                    {/*// }*/}
                    <span className="fs-4">Portafolio de Proyectos</span>
                </Link>
                <ul className="nav nav-pills">  </ul>
            </header>
        </div>
    )
}