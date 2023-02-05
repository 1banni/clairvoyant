import React from 'react'
import { PNG } from '../../assets';

const BanniLinks = () => {
  return (
    <div className='external-links'>
      <a href="https://github.com/1banni" target="_blank" rel="noopener noreferrer"><img id="github" className='github-img' src={PNG.GITHUB} alt="github link" /></a>
      <a href="https://www.linkedin.com/in/will-bannister/" target="_blank" rel="noopener noreferrer"><img id ="linkedin" className='linked-img' src={PNG.LINKEDIN} alt="linkedin link" /></a>
    </div>
  );
};

export default BanniLinks;