import {useState} from 'react';


function useForm(formDataStart){
    const [formData, setFormData] = useState(formDataStart);
    
    function setValue(key, val){
        setFormData({
            ...formData,
            [key]: val
        });
    }

    function handleChange(e){
        setValue(e.target.getAttribute("name"), e.target.value);
    }

    function clearForm(){
        setFormData(formDataStart);
    }

    return {
        handleChange, 
        clearForm,
        formData
    };
}

export default useForm;