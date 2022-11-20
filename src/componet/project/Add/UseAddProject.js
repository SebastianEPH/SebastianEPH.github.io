import {useEffect, useState} from "react";
import connectionAPI from "../../../axios";

export const UseAddProject =(project_id)=>{
    const [project, setProject] = useState([])
    useEffect(async()=>{
        await getProject()
    },[])


    const getProject = async ()=>  {
        console.log('consultado API [proforma]')
        await connectionAPI.get(`/my/projects/${project_id}`)
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
