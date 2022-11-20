import {useState} from "react";
import connectionAPI from "../axios";

export const UseMySocialNetworks = (initialState = []) =>{
    const [mySocialNetworks, setMySocialNetworks]  = useState(initialState);

    const getMySocialNetworks = async () =>{
        await connectionAPI.get(`/my/social_networks`)
            .then(({data})=>{
                setMySocialNetworks(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    return{
        mySocialNetworks,
        getMySocialNetworks
    };
}