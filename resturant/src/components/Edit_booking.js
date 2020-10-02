import React, { useState, useEffect } from "react";

import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBooking = () => {
    const [formDetails, setFormDetails] = useState({});
    const [timeData, setTimeData] = useState([]);
    const [time, setTime] = useState({});
    const { state } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    // const fetchTime = async () => {
    //     const data = await axios.get("http://localhost:3000/time");
    //     setTimeData(data.data.data.time);
    // };

    useEffect(() => {
        axios.get("http://localhost:3000/time").then((res) => {
            if (res.data.status == "success") {
                setTimeData(res.data.data.time);
            }
            const time = res.data.data.time.filter((clock) => {
                return clock.id === state.booking.hour_id;
            });

            setTime(time[0]);
        });

        state.booking ? setFormDetails(state.booking) : setFormDetails({});
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios
            .put(`http://localhost:3000/admin/${id}`, formDetails, config)
            .then((res) => {
                console.log(res);
                navigate("/login");
            });
    };

    const handleOnChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Edit booking</h1>
            <p className='text-center'>
                Reservation is on <strong> {state.booking.day}</strong> at{" "}
                <strong>{time.clock}</strong> o'clock
            </p>
            <div className='col-10 mx-auto'>
                <input
                    className='form-control '
                    type='date'
                    id='date-input'
                    name='day'
                    value={formDetails.day}
                    onChange={handleOnChange}
                />
            </div>
            <div className='d-flex justify-content-center mt-5'>
                {timeData.length > 0
                    ? timeData.map((timeInfo) => {
                          return (
                              <button
                                  key={timeInfo.id}
                                  type='button'
                                  className='btn btn-primary btn-lg mr-4'
                                  onClick={() => {}}
                              >
                                  kl. {timeInfo.clock}
                              </button>
                          );
                      })
                    : ""}
            </div>
            <form className='form-group mt-2' onSubmit={(e) => onSubmit(e)}>
                <label>name</label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={formDetails.name}
                    onChange={handleOnChange}
                />
                <label>Phone number</label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Phone number'
                    name='phone'
                    value={formDetails.phone}
                    onChange={handleOnChange}
                />
                <label>Email</label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={formDetails.email}
                    onChange={handleOnChange}
                />
                <label>Guests</label>
                <input
                    className='form-control'
                    type='number'
                    placeholder='Number of guests'
                    name='guests'
                    value={formDetails.guests}
                    onChange={handleOnChange}
                />

                <input type='submit' className='btn btn-success mt-3' />
            </form>
        </div>
    );
};

export default EditBooking;
