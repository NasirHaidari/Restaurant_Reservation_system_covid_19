import React, { useEffect, useState } from "react";
import axios from "axios";
import useGetTime from "./useGetTime";

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let datum = year + "-" + month + "-" + date;

export default function Home() {
    const [left18, left21, timeNow] = useGetTime();

    return (
        <div className='container well'>
            <h1 className='text-center my-5'>Welcom To SKY 🥩🍗 🍺</h1>
            <div className='success bg-secondary p-3 '>
                <h3>{datum}</h3>
                {timeNow <= 17 && (
                    <p className='text-warning'>
                        vi har fortfarande {left18} lediga bord kvar att boka
                        till idag kl 18:00!!!
                    </p>
                )}
                {timeNow < 21 && (
                    <p className='text-warning'>
                        vi har fortfarande {left21} lediga bord kvar att boka
                        till idag kl 21:00!!!
                    </p>
                )}
                {timeNow >= 21 && (
                    <p className='text-warning'>
                        Tyvärr vi har inte lediga bord kvar att boka till idag
                        !!!
                    </p>
                )}
            </div>
        </div>
    );
}
