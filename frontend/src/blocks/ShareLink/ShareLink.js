import './ShareLink.css';
import React from 'react';
import Button from '../Button';
// import { FiLink } from 'react-icons/fi'
import { FiLink } from 'react-icons/fi';

const ShareLink = ({size, options}) => {
  size ||= '40px';

  options ||= {};

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
    <Button containername='icon-ctnr' className='icon-btn bookmark' onClick={copyUrlToClipboard}>
      <FiLink
        className='icon share'
        style={options}
        size={size}
      />
    </Button>
  );
};

export default ShareLink;