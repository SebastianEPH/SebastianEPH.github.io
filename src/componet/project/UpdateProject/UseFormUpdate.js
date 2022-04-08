import {useState} from "react";
import toast from 'react-hot-toast';
import connectionAPI from "../../../axios";

export const UseFormUpdate= (initialState = {}, typeName='', project_id,reloadForDB  ) =>{
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
        await connectionAPI.post(`/my/project/${project_id}/${typeName}/`,form)
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
        await connectionAPI.put(`/my/project/${project_id}/${typeName}`,form)
            .then((m)=>{
                toast.success(m.data.message)
                reloadForDB()
                clean(false, false) // clean  inputs
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
        // modalHandleClose()
    }
    const databaseRemove= async(id, id_div) =>{
        await connectionAPI.delete(`/my/project/${project_id}/${typeName}/${id}`)
            .then((m)=>{
                toast.success(m.data.message)
                reloadForDB()
            })
            .catch((m)=>{
                toast.error(m.response.data.message)
            })
    }

    // const databaseUpdate= async () =>{
    //     await  connectionAPI.put(`/proforma/${form.proforma_id}/${typeName}/${form.id}`,form)
    //         .then((m)=>{
    //             toast.success(m.data.message)
    //         })
    //         .catch((m)=>{
    //             toast.error(m.response.data.message)
    //         })
    // }

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

    // const div = document.getElementById(typeName+'_'+form.id)
    // div.style.setProperty("display","none")
    // if(div !== null){
    //     while (div.hasChildNodes()){
    //         div.removeChild(div.lastChild);
    //     }
    // }else{
    //     console.log('No existe el modulo a eliminar ')
    // }
    //


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
        // databaseAddIf,databaseUpdate,databaseRemove,
        // updateHook,
        setForm,
        onChangeForm,
        onChangeFormNum,
        databaseRemove,
        databaseUpdate,
        databaseAdd,
        clean,
    };
}
