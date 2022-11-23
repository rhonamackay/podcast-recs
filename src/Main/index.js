import {useState} from 'react';
import Display from '../Display/index.js';
import Button from '../Button/index.js';
import { data } from '../episodeData.js';
import RecList from '../RecList/index.js';
import Toggle from '../Toggle/index.js';

function Main() {
    const [newEp, setNewEp] = useState('')
    const [podcastData, setPodcastData] = useState([...data])
    const [recs, setRecs] = useState([])
    const [viewRecs, setViewRecs] = useState(false)
    const [viewDisplay, setViewDisplay] = useState(false)

    function handleClick() {
      let randNum = Math.floor(Math.random() * podcastData.length)
      const ep = podcastData[randNum]
      handleDelete(ep.id)
      addToRecs(ep)
      setNewEp(ep)
    }

    function handleDelete(id){
      console.log(podcastData)
      const updatedData = [...podcastData.filter((pod) => pod.id !== id )]
      setPodcastData(updatedData)
      addToRecs(id)
    } 

    function addToRecs(ep) {
      setRecs([...recs, ep])
    }

    function toggleRecs() {
      setViewRecs(!viewRecs)
    }

    function showDisplay() {
      setViewDisplay(true)
    }

    return (
      <div className="main">
        {viewDisplay ? <Display ep={newEp}/> : null}
        <Button onClick={handleClick} display={showDisplay} text='Oh yeah, what was it about?'/>
        <Toggle onClick={toggleRecs} value={viewRecs}/>
        <RecList items={recs} visible={viewRecs}/>
      </div>
    );
  }
  
  export default Main;