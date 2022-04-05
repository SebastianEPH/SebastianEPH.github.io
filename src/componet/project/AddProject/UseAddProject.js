import {useEffect, useState} from "react";
import connectionAPI from "../../../axios";

export const UseAddProject =(project_id)=>{
    const [project, setProject] = useState([])
    useEffect(async()=>{
        console.log("se está ejecutando")
        await getProject(project_id)
    },[])


    const getProject = async (id)=>  {
        console.log('consultado API [proforma]')
        await connectionAPI.get(`/my/project/${id}`)
            .then(({data})=>{
                setProject(data)
            })
            .catch((e)=>{
                console.log('hubo un error fatal al obtener los datos :\n ', e)
                // navigate('/');
                // toast.error(m.response.data.message)
            })
    }

    return{
            project,
            getProject
        }

}
