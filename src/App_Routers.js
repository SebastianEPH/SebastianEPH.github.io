// import "./App_Router.css"
import 'bootswatch/dist/cyborg/bootstrap.min.css'; // Added this :boom:
import {
    BrowserRouter,
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import {ListProject} from "./componet/project/ListProject";
import {Navbar} from "react-bootstrap";
import {Project} from "./componet/project/Project";

function App_Routers() {
  return (
    <HashRouter>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
        {/*<BrowserRouter>*/}
        <Navbar/>
        <Routes>
            <Route path="/project/:project_id"  exact element={<Project/>}/>
            <Route path="/" exact element={
                <div className="container-fluid">
                    <br/>


                    <p>Main </p>
                    {/*<SearchProject/>*/}
                    {/*<br/>*/}
                    <ListProject/>

                    {/*<ListProforma/>*/}
                    <br/>
                </div>
            }/>
            <Route path="/about" element={
                <div className="container-fluid">
                    <p>About </p>
                </div>
            }/>
            <Route path="*" element={<h1>Error 404, el URL no existe </h1>}/>
        </Routes>
        {/*</BrowserRouter>*/}
    </HashRouter>
  );
}

export default App_Routers;
