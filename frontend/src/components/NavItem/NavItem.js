

import React from 'react'
import { NavLink } from 'react-router-dom';

function NavItem({children, containername, label, modal, ...props}) {
  containername ||= 'nav-item-ctnr';
  props.className ||= 'nav-link';
  // props.type ||= 'button';

  return (
    <div className={containername}>
      <NavLink {...props}>
        {label}
        {children}
      </NavLink>
    </div>
  )
}

export default NavItem
