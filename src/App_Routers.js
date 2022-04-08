// import "./App_Router.css"
import 'bootswatch/dist/cyborg/bootstrap.min.css'; // Added this :boom:
import {
    BrowserRouter,
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import {ListProject} from "./componet/project/ListProject";
import {Project} from "./componet/project/Project";
import {AddProject} from "./componet/project/AddProject/AddProject";
import {UpdateProject} from "./componet/project/UpdateProject/UpdateProject";
import {UseProject} from "./componet/project/UseProject";
import {MyData} from "./componet/project/MyData";
import {Contact} from "./componet/project/Contact";
import {ExtraKnowledge} from "./componet/project/ExtraKnowledge";
import {ProgrammingLanguage} from "./componet/project/ProgrammingLanguage";
import {Tools} from "./componet/project/Tools";
import {Footer} from "./componet/project/Footer";
import {Navbar} from "./componet/project/Navbar";

function App_Routers() {
    const {projects,getMyData, myData} = UseProject([])
    console.log("projecto uno=> ", projects)

    return (

    <HashRouter>
        {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>*/}
        {/*<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
        {/*<BrowserRouter>*/}
        <Navbar data={myData}/>
        <Routes>
            <Route path="/project/:project_id"  exact element={<Project/>}/>
            <Route path="/project/add/"  exact element={<AddProject/>}/>
            <Route path="/project/:project_id/advanced"  exact element={<UpdateProject/>}/>
            <Route path="/" exact element={
                <>
                    <MyData data={myData} />
                    <Contact data={myData} />
                    <ExtraKnowledge data={myData} />
                    <ListProject data={projects}/>
                    <ProgrammingLanguage data={myData} />
                    <Tools data={myData} />
                    <Footer data={myData} />
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
