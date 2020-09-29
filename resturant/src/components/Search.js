import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Search = () => {
    const [formData, setFormData] = useState({});
    const [time, setTime] = useState("");
    const [testData, setTestData] = useState({});
    const { register, handleSubmit, errors } = useForm();
    const [choseTime, setChoseTime] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        setTestData({ ...data, time });
        // setFormData([data])
        console.log(testData);
    };

    const handleFormClick = () => {
        setChoseTime(true);
    };
    return (
        <div className='container'>
            {choseTime ? (
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center mt-5'>
                        <button
                            type='button'
                            className='btn btn-primary btn-lg mr-4'
                            onClick={() => {
                                setTime("18");
                            }}
                        >
                            kl. 18
                        </button>
                        <button
                            type='button'
                            className='btn btn-primary btn-lg '
                            onClick={() => {
                                setTime("18");
                            }}
                        >
                            kl. 21
                        </button>
                    </div>
                    <div className='mt-5 d-flex flex-end justify-content-between'>
                        <button
                            className='btn btn-danger'
                            onClick={() => setChoseTime(false)}
                        >
                            GO back
                        </button>

                        <button className='btn btn-success'>
                            make a reservation
                        </button>
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='mt-4 text-center'
                >
                    <label for='date-input' className='col-2 col-form-label'>
                        Date and time
                    </label>
                    <div className='col-10 mx-auto'>
                        <input
                            className='form-control '
                            type='date'
                            value='2011-08-19T13:45:00'
                            id='date-input'
                            ref={register({ required: "Välj först ett datum" })}
                        />
                    </div>
                    {errors.date && <p>{errors.date.message}</p>}

                    <div className='text-center'>
                        <button
                            onClick={handleFormClick}
                            className='btn btn-success mt-4'
                        >
                            Chose a time
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Search;
