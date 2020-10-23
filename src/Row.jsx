import React, { useEffect, useState } from 'react';
import axios from './API';
import YouTube from 'react-youtube';
import './Row.styles.css';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl,isLargeRow}) =>{
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            // console.log(requests);
            return requests;
        }
        fetchData()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailer !== "") setTrailer("");
        else {
            movieTrailer(movie?.original_title || "")
                .then((url) => {
                    console.log(url);
                    var url_temp = new URL(url);
                    var v = url_temp.searchParams.get("v");
                    setTrailer(v);
                })
                .catch((err) => console.log(err));
            // console.log(movie.original_title);
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };
    
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_poster_large"}`}
                            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                            alt="" />
                    ))
                }
            </div>
            
            {trailer && <YouTube videoId={trailer} opts={opts}/>}
        </div>
    )
}
export default Row;