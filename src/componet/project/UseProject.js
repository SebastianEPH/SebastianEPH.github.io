import {useEffect, useState} from "react";
import connectionAPI from "../../axios";

export const UseProject = (initialState = []) =>{
    const [projects, setProjects]  = useState(initialState);
    const [project, setProject]  = useState(initialState);

    useEffect(()=>{
        getProjects()
    },[])

    const getProjects = async () =>{
        await connectionAPI.get(`/my/project`)
            .then(({data})=>setProjects(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const getProject = async (project_id) =>{
        await connectionAPI.get(`/my/project/${project_id}`)
            .then(({data})=>{
                setProject(data)
                console.log('si llegó')
                console.log("lo que llegó es ", data)
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