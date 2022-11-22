import React from 'react';

function ListItem({ id, epName, podName, appleURL, spotURL}) {
    return (
        <li key={id}>{podName}: {epName}</li>
    );
  }
  
  export default ListItem;