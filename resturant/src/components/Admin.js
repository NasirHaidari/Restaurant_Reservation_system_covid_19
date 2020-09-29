import React from 'react';

import { useForm } from 'react-hook-form';



function Admin() {
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data) => {
        console.log(data)

    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input type="text" placeholder="Username" name="username" ref={register({ required: "Username required" })} />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" ref={register({ required: "Password Required" })} />
            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" />

        </form>

    )
}

export default Admin