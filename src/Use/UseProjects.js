import {useState} from "react";
import connectionAPI from "../axios";

export const UseProjects = (initialState = []) =>{
    const [projects, setProjects]  = useState(initialState);
    const [project, setProject]  = useState(initialState);

    const getProjects = async () =>{
        await connectionAPI.get(`/my/projects`)
            .then(({data})=>setProjects(data))
            .catch((err)=>{
                console.log("there was an Error getting the data ",err)
                setProjects(null)
            })
    }
    const getProject = async (projects_id) =>{
        await connectionAPI.get(`/my/projects/${projects_id}`)
            .then(({data})=>{
                console.log("se se cargaron los datos pex Indidivudal", data)
                setProject(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
        projects,
        project,
        getProject,
        getProjects
    };
}