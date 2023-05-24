import React from 'react';
import Link from "next/link";

const Movie = async () => {
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3f158886aamsh87c949e8f320f48p10440fjsna679527085f5',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };


    const res = await fetch(url, options);
    const data =await res.json();
    console.log()
    return (
        <>
         <h1>This page is of movie</h1>
            <Link href="/movie/hgjahg">
                go to
            </Link>
        </>
    );
};

export default Movie;