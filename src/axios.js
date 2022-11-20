import axios from 'axios'
import {base_api} from "./base_api";


const connectionAPI =  axios.create({
    baseURL: base_api,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'}///XMLHttpRequest

})

export default connectionAPI ;