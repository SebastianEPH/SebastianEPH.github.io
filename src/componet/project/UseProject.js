import {useEffect, useState} from "react";
import connectionAPI from "../../axios";

export const UseProject = (initialState = []) =>{
    const [project, setProject]  = useState(initialState);

    useEffect(()=>{
        getProject()
    },[])

    const getProject = async () =>{
        await connectionAPI.get(`/my/project`)
            .then(({data})=>setProject(data))
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }




    return{
        project,
        getProject
    };
}