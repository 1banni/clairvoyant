import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../blocks/Button';
import Tooltip from '../../blocks/Tooltip/Tooltip';
import { deleteComment } from '../../store/comments';
import ColorUtil from '../../utils/ColorUtil';
import DateUtil from '../../utils/DateUtil';
import CommentForm from './CommentForm';
import { Markup } from 'interweave';

const CommentTile = ({commentId}) => {
  const dispatch = useDispatch()
  const comment = useSelector(store => store.comments[commentId]);
  const sessionUser = useSelector(state => state.session.user);
  const userToggle = () => {
    return comment?.authorId === sessionUser?.id;
  };
  const [editToggle, setEditToggle] = useState(false);
  const isAuthor = sessionUser?.id === comment?.authorId;

  const color = () => ColorUtil.nameToColor('TODO - UPDATE');
  const styleOptions = {
    stroke: color(),
    fill: 'white',
    strokeWidth: '50',
    // size: '5x'
  }


  const handleEdit = (e) => {
    e.preventDefault();
    setEditToggle(true);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    // console.log('frontend CommentTile handleDelete');
    dispatch(deleteComment(comment.id))
  }

  if (!comment) return <></>;
  return (
    <div className='comment-index-item'>
      <div className='author'>
        <div className='author-l'>
          <div className='image'>
            <FaUserCircle className='user-icon'
              size='30px'
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
          {isAuthor && (
          <Tooltip label='...' timeout={5000}>
            <Button className='btn edit'
                    label='Edit this response'
                    onClick={handleEdit}/>
            <Button className='btn delete'
                    label='Delete'
                    onClick={handleDelete}/>
          </Tooltip>
          )}
          {/* <Button className='report-btn'
            containername='report-btn-ctnr'
            onClick={() => setShowEditDelete(state => !state)}
            label='...'
          >
          </Button> */}

        </div>
      </div>
      <div className='body'>
        {editToggle
          ? (<CommentForm articleId={comment.articleId}
                          formtype='edit'
                          comment={comment}
                          setEditToggle={setEditToggle}
                          editToggle={editToggle}
            />)
          : <Markup content={comment?.body} />
        }

      </div>
      <div className='border'>

      </div>
    </div>
  )
}

export default CommentTile;