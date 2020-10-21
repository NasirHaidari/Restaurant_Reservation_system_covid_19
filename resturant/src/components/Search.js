import React, { useState, useEffect } from "react";
import axios from "axios";
import SubmitForm from "./SubmitForm";
import useGetTime from "./useGetTime";

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let datum = year + "-" + month + "-" + date;

const Search = () => {
    const [time, setTime] = useState(null);
    const [timeData, setTimeData] = useState([]);
    const [day, setDay] = useState("");
    const [choseTime, setChoseTime] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [left18, left21, timeNow] = useGetTime();

    const handleFormClick = () => {
        setChoseTime(true);
    };

    useEffect(() => {
        console.log(datum);
        axios.get("http://localhost:3000/time").then((res) => {
            setTimeData(res.data.data.time);
        });
    }, []);

    const handleCheckAvailability = async () => {
        axios
            .post("http://localhost:3000/booking/check", {
                day,
                hour_id: time.id,
            })
            .then((data) => {
                if (data.data.status === "success") {
                    setShowForm(true);
                    setError(false);
                    setErrorMessage("");
                } else {
                    setError(true);
                    setErrorMessage(data.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='container'>
            <h1 className='log text-center display-3 font-weight-bold'>
                épices
            </h1>
            {showForm ? (
                <SubmitForm time={time} day={day} />
            ) : choseTime ? (
                <div className='d-flex flex-column '>
                    <div className='d-flex justify-content-center mt-5'>
                        {timeData
                            ? timeData.map((timeInfo) => {
                                  return (
                                      <button
                                          key={timeInfo.id}
                                          type='button'
                                          className='btn btn-primary btn-lg mr-4'
                                          disabled={
                                              timeNow >
                                                  Number(
                                                      timeInfo.clock.slice(0, 2)
                                                  ) -
                                                      1 && datum === day
                                                  ? true
                                                  : false
                                          }
                                          onClick={() => {
                                              setTime(timeInfo);
                                          }}
                                      >
                                          kl. {timeInfo.clock}
                                      </button>
                                  );
                              })
                            : ""}
                    </div>

                    {timeNow >= 21 && datum === day ? (
                        <p className='alert alert-warning mt-4'>
                            Please chose another day
                        </p>
                    ) : (
                        ""
                    )}

                    {error ? (
                        <p className='alert alert-warning mt-4'>
                            {errorMessage}
                        </p>
                    ) : (
                        ""
                    )}
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
                            disabled={!time}
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
                        Chose a day
                    </label>
                    <div className='col-10 mx-auto'>
                        <input
                            className='form-control '
                            type='date'
                            min={datum}
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
                            disabled={!day}
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
