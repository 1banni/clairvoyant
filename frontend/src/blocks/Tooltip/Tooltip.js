import React, { useState } from 'react';
import Button from '../Button';
import './Tooltip.css';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);


  const toggleTooltip = () => {
    if (active) setActive(false);
    else {
      setActive(true)
      // timeout = setTimeout(() => {
      //   setActive(false);
      // }, 5000)
    }
  }

  return (
    <div>
      <div className="tooltip-btn"
        onClick={toggleTooltip}
      >...
        {active && (
          <div className='tooltip bottom'>
            {props.content}
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;