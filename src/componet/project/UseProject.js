import {useEffect, useState} from "react";
import connectionAPI from "../../axios";

export const UseProject = (initialState = []) =>{
    const [projects, setProjects]  = useState(initialState);
    const [project, setProject]  = useState(initialState);
    const [myData, setMyData]  = useState(initialState);

    useEffect(()=>{
        getProjects()
        getMyData()
    },[])

    const getProjects = async () =>{
        await connectionAPI.get(`/my/projects`)
            .then(({data})=>setProjects(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const getProject = async (project_id) =>{
        await connectionAPI.get(`/my/project/${project_id}`)
            .then(({data})=>{
                setProject(data)
                console.log("lo que llegó es ", data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const getMyData = async () =>{
        await connectionAPI.get(`/my/`)
            .then(({data})=>{
                setMyData(data)
                console.log("34223324234234342 ", data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
        myData,
        getMyData,
        projects,
        project,
        getProject,
        getProjects
    };
}