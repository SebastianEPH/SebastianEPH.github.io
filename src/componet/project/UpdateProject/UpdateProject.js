import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import {UseAddProject} from "../AddProject/UseAddProject";
import {ItemFeature} from "./Component/ItemFeature";
import toast, { Toaster } from 'react-hot-toast';

export const UpdateProject =()=>{
    const {project_id} = useParams();
    console.log("El ID es ", project_id)

    // function para verificar si el IDes letra y redireccionar al centro 404 ,

    const {project, getProject} = UseAddProject(project_id)
    console.log(project, "esto era ")
    // const {form:form_screenshot,update:update_screenshot} = UseForm({}, '',getProject)
    console.log('esto es features')

    return(
        <Container>
            <Toaster />
            {project.feature&& <ItemFeature feature={project.feature} typeName={"feature"} reloadForDB={getProject}/>}



        </Container>
    )
}