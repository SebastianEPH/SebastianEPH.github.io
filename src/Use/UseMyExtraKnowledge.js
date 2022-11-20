import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyExtraKnowledge = (initialState = []) =>{
    const [myExtraKnowledge, setMyExtraKnowledge]  = useState(initialState);

    const getMyExtraKnowledge = async () =>{
        await connectionAPI.get(`/my/extra_knowledge`)
            .then(({data})=>{
                setMyExtraKnowledge(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    return{
        myExtraKnowledge,
        getMyExtraKnowledge
    };
}