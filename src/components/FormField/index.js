import React from 'react'; 

function FormField({label, value, onChange, name, type="text"}){
    return (
        <div>
            <label>
                {label}:&nbsp;
                <input type={type} name={name} value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default FormField;
