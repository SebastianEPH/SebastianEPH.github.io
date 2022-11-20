import {useState} from "react";
import toast from "react-hot-toast";

export const UseForm =(initialState=[]) =>{
    const [form, setForm]= useState(initialState);

    const onChange = ({target}) => {
        setForm({...form, [target.name]: target.value})
        console.log(form)
    }
    const onChangeNum = ({target}) => {
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
        onChange,
        onChangeNum,
        clean
    }
}