import {useState} from "react";
import toast from 'react-hot-toast';
import connectionAPI from "../axios";

export const UseFormCRUD= (initialState = {}, typeName='', projects_id, reloadForDB  ) =>{
    const [form, setForm]  = useState(initialState);

    const onChangeForm = ({target}) => {
        setForm({...form, [target.name]: target.value})
        console.log(form)
    }

    const onChangeFormNum = ({target}) => {
        if(!isNaN(target.value)){
            // if(!target.value || target.value.isNaN){value1= 0}
            setForm({...form,
                [target.name]: target.value})
        }else{
            toast.error("Porfavor, solo numeros", {duration: 1000})
        }
        // setForm({...form, [target.name]: target.value})
        console.log(form)
    }

    const databaseAdd = async() =>{
        await connectionAPI.post(`/my/projects/${projects_id}/${typeName}/`,form)
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
    const databaseUpdate = async() =>{
        console.log("PUT ", {...form})
        await connectionAPI.put(`/my/projects/${projects_id}/${typeName}`,form)
            .then((m)=>{
                toast.success(m.data.message)
                reloadForDB()
                clean(false, false) // clean  inputs
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
    }
    const databaseRemove= async(id, id_div) =>{
        await connectionAPI.delete(`/my/projects/${projects_id}/${typeName}/${id}`)
            .then((m)=>{
                toast.success(m.data.message)
                reloadForDB()
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
    }
    const clean = (toast = true, id_ = true) =>{
        const newObj = {}
        Object.entries(form).forEach(([key, value]) => {
            if(id_){
                newObj[key] =  key === "id" ? newObj[key] = value:newObj[key] = ''
            }
        });
        // if(toast){toast.success("Se limpió correctamente")}
        setForm(newObj)
        console.log("clean ", form)
    }

    return{
        form,
        setForm,
        onChangeForm,
        onChangeFormNum,
        databaseRemove,
        databaseUpdate,
        databaseAdd,
        clean,
    };
}
