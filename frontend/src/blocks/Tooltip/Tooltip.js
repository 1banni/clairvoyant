import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const toggleTooltip = () => active ? setActive(false) : setActive(true);

  console.log('active');
  console.log(active);

  return (
    <div>
      <div className="tooltip-wrapper"
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