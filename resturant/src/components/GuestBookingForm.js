import React from "react";

import { useForm } from "react-hook-form";

function SubmitForm() {
    const { register, handleSubmit, errors } = useForm();

    const GuestBookingForm = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>name</label>
            <input
                type='text'
                placeholder='Name'
                name='name'
                ref={register({ required: "Name required" })}
            />
            <label></label>
            <input
                type='password'
                placeholder='Password'
                name='password'
                ref={register({ required: "Password Required" })}
            />
            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}

            <input type='submit' />
        </form>
    );
}

export default GuestBookingForm;
