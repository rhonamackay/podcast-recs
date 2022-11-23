import React from "react";

function Button({ onClick, text, display }) {
    function handleClick() {
      onClick()
      display()
    }
  
    return (
      <button onClick={handleClick}>{text}</button>
    );
  }
  
  export default Button;