import React from 'react';
import { SiApplepodcasts, SiSpotify } from "react-icons/si";
import './display.css'

function Display({ ep }) {
    return (
      <div className="display">
        <h2 className="ep-name">{ep.epName}</h2>
        <h3 className="pod-name">{ep.podName}</h3>
        <img src={ep.imgURL} alt={ep.PodName} />
        <span className='logos'><a href={ep.spotURL} alt='Listen on Spotify' target="_blank" rel="noreferrer"><SiSpotify/></a> <a href={ep.appleURL} alt='Listen on Apple Podcasts' target="_blank" rel="noreferrer"><SiApplepodcasts/></a></span>
        <p>{ep.synopsis}</p>
      </div>
    );
  }
  
  export default Display;
