import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import AdminAddRemove from './AdminAddRemove';



function Admin() {
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data) => {
        axios.post('http://localhost:3000/login', data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', JSON.stringify(res.data.token.access_token));
                console.log(localStorage.getItem('token'))

            })
            .catch(err => {
                console.log(err)
            })

    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input type="text" placeholder="Username" name="username" ref={register({ required: "Username required" })} />
                <label>Password</label>
                <input type="password" placeholder="Password" name="password" ref={register({ required: "Password Required" })} />
                {errors.username && <p>{errors.username.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}

                <input type="submit" />

            </form>
            <AdminAddRemove />

        </>
    )
}

export default Admin