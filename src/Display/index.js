import React from 'react';
import { FaSpotify, FaApple} from 'react-icons/fa';
import './display.css'

function Display({ ep }) {
    return (
      <div className="display">
        <h2>{ep.epName}</h2>
        <h3>{ep.podName}</h3>
        <img src={ep.imgURL} alt={ep.PodName} />
        <div><a href={ep.appleURL} alt='Listen on Spotify'><FaSpotify /></a> <a href={ep.spotURL} alt='Listen on Apple Podcasts'><FaApple/></a></div>
        <p>{ep.synopsis}</p>
      </div>
    );
  }
  
  export default Display;