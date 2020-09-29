
import React, { useState } from 'react';
import { useForm } from "react-hook-form";




export default function Search() {
    const { register, handleSubmit, errors } = useForm();
    const { formData, setFormData } = useState([]);
    const onSubmit = data => {
        console.log(data);
        // setFormData([data])

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>välj datum</label>
                <input type="date" name="date" ref={register({ required: "Välj först ett datum" })} />
                <label>välje mellan kl. 18 eller 21</label>
                <select name="time" ref={register({ required: true })}>
                    <option value="18">kl. 18</option>
                    <option value="21">kl. 21</option>
                </select>
                {errors.date && <p>{errors.date.message}</p>}
                <input type="submit" />
            </form>



        </>
    );
}


