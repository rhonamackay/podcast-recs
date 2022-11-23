import React from 'react';
import { SiApplepodcasts, SiSpotify } from "react-icons/si";

function ListItem({ id, epName, podName, appleURL, spotURL}) {
    return (
        <li key={id}>{podName}: {epName} <span className='list-logos'><a href={spotURL} alt='Listen on Spotify' target="_blank" rel="noreferrer"><SiSpotify className='logo-list'/></a> <a href={appleURL} alt='Listen on Apple Podcasts' target="_blank" rel="noreferrer"><SiApplepodcasts className='logo-list'/></a></span></li>
    );
  }
  
  export default ListItem;