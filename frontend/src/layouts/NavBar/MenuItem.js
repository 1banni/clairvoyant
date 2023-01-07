import React from 'react'

function MenuItem({children, label, ...props}) {
  return (
    <div className="menu-item" {...props}>{label}
      {children}
    </div>
  )
}

export default MenuItem
