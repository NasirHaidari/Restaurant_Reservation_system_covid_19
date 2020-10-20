import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from './Footer'
import Recipes from "./Recipes"

import useGetTime from "./useGetTime";



let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let datum = year + "-" + month + "-" + date;

export default function Home() {
    const [left18, left21, timeNow] = useGetTime();
    const navigate = useNavigate()

    return (
        <>
        <div className='container well mb-5'>
            <h2 className='text-center mt-3 '><span>CAFÉ/</span><span className="text-warning">RESTAURANT</span></h2>
            <h1 className="log text-center display-3 font-weight-bold">épices</h1>
            <h5 onClick={() => navigate("/search")} className="reservation text-center border border-warning reservation rounded">MAKE RESERVATION</h5>
            <div className='info success badge-dark rounded p-3 '>
                <h3 className="font-weight-bold"><span className="text-warning font-weight-bold">today </span>{datum}</h3>
                {timeNow <= 17 && (
                    <p className='text-warning'>
                    we still have {left18} tables available for today at 18:00 !!!
                    </p>
                )}
                {timeNow < 21 && (
                    <p className='text-warning'>
                    we still have {left21} tables available for today at 21:00 !!!
                    </p>
                )}
                {timeNow >= 21 && (
                    <p className='text-warning'>
                    sorry, no tables available for the evening !!!
                    </p>
                )}
                
            </div>
           
        </div>  
        <Recipes/>
         <Footer/>
         </>
    );
}
