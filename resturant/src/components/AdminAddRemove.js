import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function AdminAddRemove() {
    const [bookings, setBookings] = useState([]);
    const [filterDisplay, setFilterDisplay] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const handleClick = () => navigate("/search");

    const fetchTheData = () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios.get("http://localhost:3000/admin", config).then((res) => {
            console.log(res.data);
            setBookings(res.data.data);
        });
    };

    useEffect(() => {
        fetchTheData();
    }, []);

    const handleSearch = (name) => {
        let newData;
        if (!name) {
            newData = [];
        }
        newData = bookings.filter((booking) => booking.name.includes(name));
        setFilterDisplay(newData);
    };

    const removeBookingHandle = (id) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        axios
            .delete(`http://localhost:3000/admin/${id}`, config)
            .then((res) => {
                fetchTheData();
                setFilterDisplay([]);
            });
    };

    const mapOverData = (bookings) => {
        return bookings.map((booking) => {
            return (
                <li
                    key={booking.id}
                    className='list-group-item list-group-item-secondary d-flex justify-content-between mb-1'
                >
                    {booking.name}
                    <div>
                        <Link
                            to={`/admin/editBooking/${booking.id}`}
                            state={{ booking }}
                            className='btn btn-info'
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => removeBookingHandle(booking.id)}
                            className='btn btn-danger ml-1'
                        >
                            Remove
                        </button>
                    </div>
                </li>
            );
        });
    };

    return (
        <div className='container'>
            <button onClick={handleClick}>make a reservation</button>
            {bookings ? (
                <div>
                    <div className='input-group mb-3'>
                        <input
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                handleSearch(e.target.value);
                            }}
                            type='text'
                            className='form-control'
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby='button-addon2'
                            value={searchInput}
                        />
                        <div className='input-group-append'>
                            <button
                                className='btn btn-outline-success'
                                type='button'
                                id='button-addon2'
                            >
                                Button
                            </button>
                        </div>
                    </div>
                    <ul className='list-group'>
                        {filterDisplay.length > 0
                            ? mapOverData(filterDisplay)
                            : mapOverData(bookings)}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
