import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminAddRemove() {
    const [key, setKey] = useState("");
    const [bookings, setBookings] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const handleClick = () => navigate("/search");

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        console.log(token);

        axios.get("http://localhost:3000/admin", config).then((res) => {
            console.log(res.data);
            setBookings(res.data.data);
        });
    }, []);

    const removeHandle = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:3000/admin/", key);
    };

    const editHandle = () => {
        console.log("editing");
    };

    const handleSearch = (name) => {
        const NewData = bookings.filter((booking) =>
            booking.name.includes(name)
        );

        setBookings(NewData);
    };

    return (
        <div className='container'>
            <button onClick={editHandle}>Edit</button>
            <form onSubmit={removeHandle}>
                <label>booking number for remove a booking</label>
                <input
                    type='text'
                    onChange={(e) => setKey(e.target.value)}
                    placeholder='input your bookings number here and click the remove button'
                />
            </form>
            <button onClick={handleClick}>make a reservation</button>
            {bookings ? (
                <div>
                    <div class='input-group mb-3'>
                        <input
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                handleSearch(e.target.value);
                            }}
                            type='text'
                            class='form-control'
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby='button-addon2'
                            value={searchInput}
                        />
                        <div class='input-group-append'>
                            <button
                                class='btn btn-outline-success'
                                type='button'
                                id='button-addon2'
                            >
                                Button
                            </button>
                        </div>
                    </div>
                    <ul className='list-group'>
                        {bookings.map((booking) => {
                            return (
                                <li className='list-group-item list-group-item-secondary d-flex justify-content-between mb-1'>
                                    {booking.name}
                                    <div>
                                        <button className='btn btn-info'>
                                            Edit
                                        </button>
                                        <button className='btn btn-danger ml-1'>
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
