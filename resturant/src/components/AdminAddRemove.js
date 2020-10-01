import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function AdminAddRemove() {
    const { key, setKey } = useState('');
    const navigate = useNavigate();
    const handleClick = () => navigate('/search');



    const removeHandle = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3000/admin/', key)

    }

    const editHandle = () => {
        console.log('editing')
    }


    return (
        <div>
            <button onCkick={editHandle}>Edit</button>
            <form onSubmit={removeHandle}>
                <label>booking number for remove a booking</label>
                <input type="text" onChange={e => setKey(e.target.value)}
                    placeholder="input your bookings number here and click the remove button" />
            </form>
            <button onClick={handleClick}>make a reservation</button>



        </div>
    )
}
