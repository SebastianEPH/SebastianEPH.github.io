import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyEmails = (initialState = []) =>{
    const [myEmails, setMyEmails]  = useState(initialState);

    const getMyEmails = async () =>{
        await connectionAPI.get(`/my/emails`)
            .then(({data})=>{
                setMyEmails(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
        myEmails,
        getMyEmails
    };
}