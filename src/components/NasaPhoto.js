import React from 'react';
import { useState, useEffect } from 'react';

const apiKey= process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);


    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
               `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            setPhotoData(data);

        }
    }, [] );

    if (!photoData) return <div />;

    return (
       <div>
           <img src={photoData.url} alt={photoData.title} />
           <div>
               <h1>{photoData.title}</h1>
               <p>{photoData.explanation}</p>
           </div>
       </div>
    )
}