import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Confirmation from "./Confirmation";

const SubmitForm = ({ day, time }) => {
    const { register, handleSubmit, errors } = useForm();
    const [submitError, setSubmitError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [conformation, setConformation] = useState(false);
    const [conformationInfo, setConformationInfo] = useState({});

    const onSubmit = (data) => {
        console.log({ ...data, day, hour_id: time });
        axios
            .post("http://localhost:3000/booking", {
                ...data,
                day,
                hour_id: time,
            })
            .then((res) => {
                if (res.data.status !== "success") {
                    setSubmitError(true);
                    setErrorMessage(res.data.message);
                    setConformation(false);
                } else {
                    setSubmitError(false);
                    setErrorMessage("");
                    setConformationInfo({
                        ...data,
                        day,
                        hour_id: time,
                    });
                    setConformation(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(day, time);
    return (
        <>
            {conformation ? (
                <Confirmation conformationInfo={conformationInfo} />
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='form-group mt-5'
                >
                    <label>name</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Name'
                        name='name'
                        ref={register({ required: "Name required" })}
                    />
                    <label>Phone number</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Phone number'
                        name='phone'
                        ref={register({ required: "Phone Required" })}
                    />
                    <label>Email</label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Email'
                        name='email'
                        ref={register({ required: "Email Required" })}
                    />
                    <label>Guests</label>
                    <input
                        className='form-control'
                        type='number'
                        placeholder='Number of guests'
                        name='guests'
                        ref={register({ required: "Guests Required" })}
                    />
                    <div className='mt-4'>
                        {errors.name && (
                            <p className='alert alert-warning'>
                                {errors.name.message}
                            </p>
                        )}
                        {errors.phone && (
                            <p className='alert alert-warning'>
                                {errors.phone.message}
                            </p>
                        )}
                        {errors.email && (
                            <p className='alert alert-warning'>
                                {errors.email.message}
                            </p>
                        )}
                        {errors.guests && (
                            <p className='alert alert-warning'>
                                {errors.guests.message}
                            </p>
                        )}
                    </div>

                    <input type='submit' className='btn btn-primary mt-3' />
                </form>
            )}
            {submitError ? (
                <p className='alert alert-warning'> {errorMessage}</p>
            ) : (
                ""
            )}
        </>
    );
};

export default SubmitForm;
