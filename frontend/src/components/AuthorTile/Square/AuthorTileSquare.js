import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../../blocks/Button';
import ColorUtil from '../../../utils/ColorUtil';
import './AuthorTileSquare.css';

const AuthorTileSquare = ({author, ...props}) => {
  console.log('author');
  console.log(author);

  const bioBlurb = () => {
    let _bio = author.bio ? author.bio : "";
    let parsed_bio = _bio.split('\\n').join(' ');
    return parsed_bio.length > 115
      ? parsed_bio.slice(0,115) + '...'
      : parsed_bio;
  }

  const styleOptions = {
    stroke: ColorUtil.nameToColor(author?.name),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }

  if (!author) return <></>;
  return (
    <div className='author-tile-square'>

      <div className='icon'>
        <FaUserCircle className='temp'
          size='40px'
          style={styleOptions}
        />
      </div>

      <div className='name'>{author.name}</div>

      <div>{/* TODO - ADD # OF FOLLOWERS */}</div>

      <div className='bio'>TODO - IMPORT AUTHOR BIO ONCE IN BACKEND</div>

      {/* <Button containername='btn-ctnr' className='btn'>
        Follow - TODO - IMPLEMENT ME :)
      </Button> */}

    </div>
  );
};

export default AuthorTileSquare;