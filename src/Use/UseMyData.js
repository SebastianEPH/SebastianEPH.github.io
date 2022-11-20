import {useState} from "react";
import connectionAPI from "../axios";

export const UseMyData = (initialState = []) =>{
    const [myData, setMyData]  = useState(initialState);

    const getMyData = async () =>{
        await connectionAPI.get(`/my/?short=true`)
            .then(({data})=>{
                setMyData(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }
    const getMyDataAll = async () =>{
        await connectionAPI.get(`/my/`)
            .then(({data})=>{
                setMyData(data)
            })
            .catch((err)=>console.log("there was an Error getting the data ",err))
    }

    return{
        myData,
        getMyDataAll,
        getMyData,
    };
}