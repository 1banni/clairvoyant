import './ShareLink.css';
import React from 'react';
import Button from '../Button';
// import { FiLink } from 'react-icons/fi'
import { FiLink } from "react-icons/fi";

const ShareLink = () => {
  const options = {
    // stroke: "#272727",
    // fill: "white",
    // strokeWidth: "50"
   }

  const copyUrlToClipboard = async e => {
    let url = document.location.href

    navigator.clipboard.writeText(url).then(function() {
      // TODO: UPDATE with alert
      console.log('Copied!');
    }, function() {
      console.log('Copy error')
    });
  }

  return (
    <Button containername="icon-ctnr" className="icon-btn bookmark" onClick={copyUrlToClipboard}>
      <FiLink className="icon share"
              style={options}
              size="40px"
              />
    </Button>


  )
}

export default ShareLink