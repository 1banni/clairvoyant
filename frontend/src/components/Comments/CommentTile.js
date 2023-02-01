import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../blocks/Button';
import Tooltip from '../../blocks/Tooltip/Tooltip';
import ColorUtil from '../../utils/ColorUtil';
import DateUtil from '../../utils/DateUtil';

const CommentTile = ({comment}) => {
  const [showEditDelete, setShowEditDelete] = useState(false);
  const color = () => ColorUtil.nameToColor('TODO - UPDATE');
  const styleOptions = {
    stroke: color(),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }

  console.log('showEditDelete');
  console.log(showEditDelete);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log('handling edit');
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('handling delete');
  }

  if (!comment) return <></>;
  return (
    <div className='comment-index-item'>
      <div className='author'>
        <div className='author-l'>
          <div className='image'>
            <FaUserCircle className="user-icon"
              size="30px"
              style={styleOptions}
            />
          </div>
          <div className='name-and-date'>
            <div className='name'>
              {comment.authorName}
            </div>
            <div className='date'>
              {DateUtil.longForm(comment.createdAt)}
            </div>
          </div>
        </div>
        <div className='author-r'>
          <Tooltip>
            <Button onClick={handleEdit} label="Edit this response"/>
            <Button onClick={handleDelete} label="Delete"/>
          </Tooltip>
          {/* <Button className="report-btn"
            containername="report-btn-ctnr"
            onClick={() => setShowEditDelete(state => !state)}
            label="..."
          >
          </Button> */}

        </div>
      </div>
      <div className='body'>
        {comment.body}
      </div>
    </div>
  )
}

export default CommentTile;