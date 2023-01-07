

import React from 'react'
import { NavLink } from 'react-router-dom';

function NavItem({children, label, modal, ...props}) {
  props.containerName ||= "nav-item";
  // props.className ||= "btn";
  // props.type ||= "button";

  return (
    <div className="nav-item">
      <NavLink {...props} className="icon-btn">
        {label}
        {children}
      </NavLink>
    </div>
  )
}

export default NavItem
