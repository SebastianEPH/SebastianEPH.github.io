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
import {AddProject} from "./componet/project/AddProject/AddProject";
import {UpdateProject} from "./componet/project/UpdateProject/UpdateProject";
import {UseProject} from "./componet/project/UseProject";
import {MyData} from "./componet/project/MyData";

function App_Routers() {
    const {projects,getMyData, myData} = UseProject([])
    console.log("projecto uno=> ", projects)

    return (

    <HashRouter>
        {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>*/}
        {/*<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
        {/*<BrowserRouter>*/}
        <Navbar/>
        <Routes>
            <Route path="/project/:project_id"  exact element={<Project/>}/>
            <Route path="/project/add/"  exact element={<AddProject/>}/>
            <Route path="/project/:project_id/advanced"  exact element={<UpdateProject/>}/>
            <Route path="/" exact element={
                <>
                    <p>Main</p>
                    {/*<SearchProject/>*/}
                    {/*<br/>*/}
                    <MyData data={myData} />
                    <ListProject data={projects}/>
                    {/*<ListProforma/>*/}
                    <br/>
                </>
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
