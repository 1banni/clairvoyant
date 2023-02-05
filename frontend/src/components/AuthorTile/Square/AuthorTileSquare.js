import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Button from '../../../blocks/Button';
import ColorUtil from '../../../utils/ColorUtil';
import NavUtil from '../../../utils/NavUtil';
import './AuthorTileSquare.css';

const AuthorTileSquare = ({author, ...props}) => {
  const history = useHistory();
  const parsed_bio = author?.bio ? author.bio.split('\\n').join(' ') : "";
  const bioBlurb = (parsed_bio.length > 160
                    ? parsed_bio.slice(0,160) + '...'
                    : parsed_bio
  );



  const styleOptions = {
    stroke: ColorUtil.nameToColor(author?.name),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }

  // const goToUserById = (id) => () => history.push(`/users/${id}`);

  if (!author) return <></>;
  return (
    <div className='author-tile-square'>

      <div className='icon' onClick={NavUtil.goToUserById(history, author.id)}>
        <FaUserCircle className='temp'
          size='40px'
          style={styleOptions}
        />
      </div>

      <div className='name' onClick={NavUtil.goToUserById(history, author.id)}>
        {author.name}
      </div>

      <div>{/* TODO - ADD # OF FOLLOWERS */}</div>

      <div className='bio'>{bioBlurb}</div>

      {/* <Button containername='btn-ctnr' className='btn'>
        Follow - TODO - IMPLEMENT ME :)
      </Button> */}

    </div>
  );
};

export default AuthorTileSquare;