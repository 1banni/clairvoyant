import React from 'react';
import './IconWithLabel.css';


const IconWithLabel = ({label, labelname, children, containername}) => {
  containername ||= "icon-with-label-ctnr";
  labelname ||= "icon-with-label label";

  return (
    <div className={containername}>
      <div className="icon-with-label icon">
        {children}
      </div>
      <div className={labelname}>{label}</div>
    </div>
  )
}

export default IconWithLabel;