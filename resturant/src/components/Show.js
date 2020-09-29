import React from "react";
import { useQuery } from "react-query";

const fetchDate = async () => {
    const res = await fetch("data");
    return res.json();
};

const Show = () => {
    const { data, status } = useQuery("Show", fetchDate, {
        staleTime: 10000,
        cacheTime: 2000,
    });
    console.log(data);

    return (
        <div>
            <h2>Lediga bord för just den dagen</h2>

            {status === "error" && <div>Error fetching data</div>}

            {status === "loading" && <div>Loading data...</div>}

            {data.length > 14 && (
                <div>
                    {<p>här får vi vidare skicka de till booknigs formen</p>}
                </div>
            )}
        </div>
    );
};

export default Show;
