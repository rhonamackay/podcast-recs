import React from 'react';
import ListItem from '../ListItem/index.js';

function RecList({ items, visible }) {
    if (visible === true) {
        return (
            <ul>
                {items.map((ep) => ListItem(ep))} 
            </ul>
        );
    }
}
  
  export default RecList;