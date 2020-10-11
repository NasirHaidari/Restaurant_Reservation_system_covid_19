import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [time, setTime] = useState();

  const [eighteen, setEighteen] = useState();
  const [twentyone, setTwentyOne] = useState();
  const [left21, setLeft21] = useState();
  const [left18, setLeft18] = useState();

  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let datum = year + "-" + month + "-" + date;

  useEffect(() => {
    axios.get("http://localhost:3000/booked").then((res) => {
      const data = res.data.data;

      const todaysBooking = data.filter((day) => day.day === datum);

      const eithteenData = todaysBooking.filter((sex) => sex.hour_id < 2);
      const left1 = 15 - eithteenData.length;
      setLeft18(left1);
      console.log(left1, "bord kvar kl.18");

      const twentyoneData = todaysBooking.filter((nio) => nio.hour_id > 1);
      // setTwentyOne(twentyoneData);
      const left2 = 15 - twentyoneData.length;
      setLeft21(left2);
      console.log(left2, "bord kvar kl.21");

      // console.log(twentyoneData);
      // console.log(eithteenData);

      const hour = new Date().getHours();
      setTime(hour);
      console.log(hour);
    });
  }, []);

  return (
    <div className="container well ">
      <h1 className="text-center">Welcom To SKY 🥩🍗 🍺</h1>
      <div className="success bg-secondary p-3 ">
        <h3>{datum}</h3>
        {time <= 18 && (
          <p className="text-warning">
            vi har fortfarande {left18} lediga bord kvar att boka till idag kl
            18:00!!!
          </p>
        )}
        {time <= 21 && (
          <p className="text-warning">
            vi har fortfarande {left21} lediga bord kvar att boka till idag kl
            21:00!!!
          </p>
        )}
      </div>
    </div>
  );
}
