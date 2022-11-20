import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyProgrammingTools = (initialState = []) =>{
    const [myProgrammingTools, setMyProgrammingTools]  = useState(initialState);

    const getMyProgrammingTools = async () =>{
        await connectionAPI.get(`/my/programming_tools`)
            .then(({data})=>{
                setMyProgrammingTools(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    return{
        myProgrammingTools,
        getMyProgrammingTools
    };
}