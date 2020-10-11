import React, { useEffect, useState } from "react";
import axios from "axios";

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let datum = year + "-" + month + "-" + date;

const useGetTime = () => {
    const [timeNow, setTime] = useState();
    const [left21, setLeft21] = useState(null);
    const [left18, setLeft18] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get("http://localhost:3000/booked");
            const todaysBooking = data.data.data.filter(
                (day) => day.day === datum
            );
            const eithteenData = todaysBooking.filter((sex) => sex.hour_id < 2);

            const twentyoneData = todaysBooking.filter(
                (nio) => nio.hour_id > 1
            );
            const left1 = 15 - eithteenData.length;
            setLeft18(left1);

            const left2 = 15 - twentyoneData.length;
            setLeft21(left2);

            const hour = new Date().getHours();
            setTime(hour);
            console.log(left2);
        };

        getData();
    }, []);

    return [left18, left21, timeNow];
};

export default useGetTime;
