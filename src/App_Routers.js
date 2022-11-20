import 'bootswatch/dist/cyborg/bootstrap.min.css'; // Added this :boom:
import {
    BrowserRouter,
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import {Project} from "./componet/project/Project";
import {Navbar} from "./componet/items/Navbar";
import {Main} from "./componet/Main";
import {Footer} from "./componet/items/Footer";

function App_Routers() {

    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/projects/:projects_id"  exact element={<Project/>}/>
                {/*<Route path="/projects/add/"  exact element={<AddProject/>}/>*/}
                {/*<Route path="/projects/:projects_id/advanced"  exact element={<UpdateProject/>}/>*/}
                <Route path="/" exact element={<Main/>}/>
                {/*<Route path="/about" element={*/}
                {/*    <div className="container-fluid">*/}
                {/*        <p>About </p>*/}
                {/*    </div>*/}
                {/*}/>*/}
                <Route path="*" element={<h1>Error 404, El recurso que desea acceder no existe </h1>}/>
            </Routes>
            <Footer/>
        </HashRouter>
  );
}

export default App_Routers;
