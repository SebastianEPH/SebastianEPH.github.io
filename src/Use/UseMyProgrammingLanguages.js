import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyProgrammingLanguages = (initialState = []) =>{
    const [myProgrammingLanguages, setMyProgrammingLanguages]  = useState(initialState);

    const getMyProgrammingLanguages = async () =>{
        await connectionAPI.get(`/my/programming_languages`)
            .then(({data})=>{
                setMyProgrammingLanguages(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    return{
        myProgrammingLanguages,
        getMyProgrammingLanguages
    };
}