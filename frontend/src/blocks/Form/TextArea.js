import React from 'react'

const TextArea = ({...props}) => {
  props.containername ||= "input";
  props.className ||= "input-label";
  props.label ||= "";

  return (
    <div className={props.containername}>
      <h4 className={props.className}>
        {props.label}
      </h4>
      <br/>
      <textarea readOnly="false" {...props}></textarea>
    </div>
  )
}

export default TextArea