// import {UseMyData} from "../../Use/UseMyData";
// import {useEffect} from "react";

export const Footer = () =>{
    // const {myData, getMyData } = UseMyData([]);
    // useEffect(()=>{
    //     getMyData();
    // },[])

    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24">
                            {/*<use xlink:href="#bootstrap"></use>*/}
                        </svg>
                    </a>
                    <span className="text-muted">Portfolio Web© v2.0 | 2022 SebastianEPH</span>
                </div>
            </footer>
        </div>

    )
}