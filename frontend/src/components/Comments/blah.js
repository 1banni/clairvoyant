import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Button from '../../blocks/Button';
import Tooltip from '../../blocks/Tooltip/Tooltip';

const blah = () => {

  let comment = 'blah'
  let isAuthor = 'blah'
  let handleEdit = 'blah'
  let handleDelete = 'blah'

  let styleOptions = {};
  return (
    <div className='comment-index-item'>
      <div className='author'>
        <div className='left'>
          <div className='image'>
            <FaUserCircle className='user-icon'
              size='30px'
              style={styleOptions}
            />
            <div className='name-and-date'>
              <div className='name'>
                {comment.authorName}
              </div>
              <div className='date'>
                {comment.date}
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          {isAuthor && (
          <Tooltip>
            <Button className='btn edit'
                    label='Edit this response'
                    onClick={handleEdit}/>
            <Button className='btn delete'
                    label='Delete'
                    onClick={handleDelete}/>
          </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}

export default blah