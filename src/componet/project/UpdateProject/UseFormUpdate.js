//@ts-check
import {useContext, useState} from "react";
// import DollarContext from "./DollarContext";
import toast from 'react-hot-toast';
import connectionAPI from "../../../axios";
// import connectionAPI from "../../config/axios";

export const UseFormUpdate= (initialState = {}, typeName='', project_id,reloadForDB  ) =>{
    const [form, setForm]  = useState(initialState);

    const onChangeForm = ({target}) => {
        setForm({...form, [target.name]: target.value})
        console.log(form)

    }

    const databaseAdd = async() =>{

        console.log("esto es lo que se envia", {...form, project_id})
        await connectionAPI.post(`/my/project/${project_id}/${typeName}/`,{...form})
                .then((m)=>{
                    toast.success(m.data.message)
                    reloadForDB()
                    clean(false) // clean  inputs
                })
                .catch((m)=>{
                    toast.error(m.response.data.message)
                })
            // modalHandleClose()

    }

    // const updateHook= ({target}, name) =>{
    //     let value2 = target.value
    //     let value1 = null
    //     if(!isNaN(target.value)){
    //         value1 = name ==="sol"? target.value * dollar: target.value / dollar
    //         if(!target.value || target.value.isNaN){value1= 0}
    //         setForm({...form,
    //             [name]: value1.toFixed(2),
    //             [target.name]: value2})
    //     }else{
    //         toast.error("Please insert numbers", {duration: 1000})
    //     }
    // }

    // const databaseAddIf = async ()=>{
    //     await connectionAPI.post(`/proforma/${form.proforma_id}/${typeName}`,form)
    //         .then((m)=>{
    //             toast.success(m.data.message)
    //             clean(false) // clean  inputs
    //         })
    //         .catch((m)=>{
    //             toast.error(m.response.data.message)
    //         })
    //     modalHandleClose()
    //     reloadForDB()
    // }
    // const databaseUpdate= async () =>{
    //     await  connectionAPI.put(`/proforma/${form.proforma_id}/${typeName}/${form.id}`,form)
    //         .then((m)=>{
    //             toast.success(m.data.message)
    //         })
    //         .catch((m)=>{
    //             toast.error(m.response.data.message)
    //         })
    // }
    // const databaseRemove= async() =>{
    //     await connectionAPI.delete(`/proforma/${form.proforma_id}/${typeName}/${form.id}`)
    //         .then((m)=>{
    //             toast.success(m.data.message)
    //             const div = document.getElementById(typeName+'_'+form.id)
    //             div.style.setProperty("display","none")
    //             if(div !== null){
    //                 while (div.hasChildNodes()){
    //                     div.removeChild(div.lastChild);
    //                 }
    //             }else{
    //                 console.log('No existe el modulo a eliminar ')
    //             }
    //         })
    //         .catch((m)=>{
    //             toast.error(m.response.data.message)
    //         })
    // }

    const clean = (toast = true) =>{
        const newObj = {}
        Object.entries(form).forEach(([key, value]) => {
            // if(key === "project_id" || key === "id" ){
            //     newObj[key] = value
            // }else{
            //
            // }
            newObj[key] = ''
        });
        setForm(newObj)
        console.log("clean ", form)
        if(toast){toast.success("Se limpió correctamente")}
    }

    return{
        form,
        // databaseAddIf,databaseUpdate,databaseRemove,
        // updateHook,
        onChangeForm,
        databaseAdd,
        clean,
    };
}
