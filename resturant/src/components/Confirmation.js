import React from "react";
import { Link } from "react-router-dom";

const Confirmation = (props) => {
    const { name, day, time, phone, email, guests } = props.conformationInfo;
    return (
        <div className='text-center container d-flex flex-column align-content-around'>
            <div className='my-4'>
                <h1>Booking confirmation</h1>
                <h2>
                    Dear{" "}
                    <strong>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </strong>{" "}
                    Your reservation is confirmed{" "}
                    <span role='img' aria-labelledby='hands'>
                        🤝
                    </span>
                </h2>
                <p>
                    We are looking forward to your visit on{" "}
                    <strong> {day}</strong> at <strong>{time.clock}</strong>{" "}
                    o'clock
                </p>
            </div>
            <div className='my-3'>
                <p>Reservation information:</p>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-secondary'>
                        Guests: {guests}
                    </li>
                    <li className='list-group-item list-group-item-secondary'>
                        Email: {email}
                    </li>
                    <li className='list-group-item list-group-item-secondary'>
                        Phone: {phone}
                    </li>
                   
                </ul>
            </div>
            <p>Thank you very much for your booking</p>
            <h1>
                See you soon{" "}
                <span role='img' aria-labelledby='hands'>
                    🥂
                </span>{" "}
            </h1>
            <Link to='/' className='btn btn-success'>
                Back to home
            </Link>
        </div>
    );
};

export default Confirmation;
