import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyLanguages = (initialState = []) =>{
    const [myLanguages, setMyLanguages]  = useState(initialState);

    const getMyLanguages = async () =>{
        await connectionAPI.get(`/my/languages`)
            .then(({data})=>{
                setMyLanguages(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
        myLanguages,
        getMyLanguages,
    };
}