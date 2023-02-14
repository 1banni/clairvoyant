import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({label, buttonname, className, timeout, ...props}) => {
  const [active, setActive] = useState(false);
  buttonname ||= 'tooltip-btn';
  className ||= 'tooltip bottom';

  const toggleTooltip = () => {
    if (active) setActive(false);
    else {
      setActive(true)
      if (timeout) {
        setTimeout(() => {
          setActive(false);
        }, timeout)
      }
    }
  }

  return (
    <div>
      <div className={buttonname} onClick={toggleTooltip} >
        {label}
      {active && (
        <div className={className}>
          {props.content}
          {props.children}
        </div>
      )}
      </div>
    </div>
  );
};

export default Tooltip;