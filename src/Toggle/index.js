import React from 'react';
import './Toggle.css';

function Toggle({ value, onClick }) {
  return (
    <div className='toggle-container'>
      <input className="toggle-checkbox" id={`toggle-new`} type="checkbox" checked={value} onChange={onClick}/>
      <label className="toggle-label" htmlFor={`toggle-new`} style={{ background: value ? '#EAAC8B' : '#355070' }}>
        <span className={`toggle-checkbox-button`} />
      </label>
      <p className='caption'>Toggle recs</p>
    </div>
  );
};

export default Toggle;