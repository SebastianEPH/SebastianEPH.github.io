import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyPhones = (initialState = []) =>{
    const [myPhones, setMyPhones]  = useState(initialState);

    const getMyPhones = async () =>{
        await connectionAPI.get(`/my/phones`)
            .then(({data})=>{
                setMyPhones(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
         myPhones,
         getMyPhones,
    };
}