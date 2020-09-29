import React, { useState } from "react";
import axios from "axios";
import SubmitForm from "./SubmitForm";

const Search = () => {
    const [formData, setFormData] = useState({});
    const [time, setTime] = useState(null);
    const [day, setDay] = useState("");
    const [choseTime, setChoseTime] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleFormClick = () => {
        setChoseTime(true);
    };

    const handleCheckAvailability = async () => {
        axios
            .post("http://localhost:3000/booking/check", {
                day,
                hour_id: time,
            })
            .then((data) => {
                console.log(data.data);
                if (data.data.status == "success") setShowForm(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='container'>
            {showForm ? (
                <SubmitForm time={time} day={day} />
            ) : choseTime ? (
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center mt-5'>
                        <button
                            type='button'
                            className='btn btn-primary btn-lg mr-4'
                            onClick={() => {
                                setTime(1);
                            }}
                        >
                            kl. 18
                        </button>
                        <button
                            type='button'
                            className='btn btn-primary btn-lg '
                            onClick={() => {
                                setTime(2);
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

                        <button
                            className='btn btn-success'
                            onClick={handleCheckAvailability}
                        >
                            make a reservation
                        </button>
                    </div>
                </div>
            ) : (
                <form className='mt-4 text-center'>
                    <label
                        htmlFor='date-input'
                        className='col-2 col-form-label'
                    >
                        Date and time
                    </label>
                    <div className='col-10 mx-auto'>
                        <input
                            className='form-control '
                            type='date'
                            id='date-input'
                            onChange={(e) => {
                                setDay(e.target.value);
                            }}
                        />
                    </div>

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
