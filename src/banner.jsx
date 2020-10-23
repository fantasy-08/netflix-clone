import React, { useEffect, useState } from 'react'
import axios from './API';
import  requests from './options';
import './banner.styles.css';

const Banner= () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const Request = await axios.get(requests.top);
            setMovie(
                Request.data.results[Math.floor(Math.random() * Request.data.results.length)]
            );
            return Request;
        }
        fetchData()
    }, []);
    console.log(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name} 
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="fade"></div>
        </header>
    )
}

export default Banner;
