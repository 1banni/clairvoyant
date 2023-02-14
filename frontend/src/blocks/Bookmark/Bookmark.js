import './ArticleBookmark.css';
import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdOutlineBookmarkAdd,
  MdOutlineBookmark,
} from 'react-icons/md';
import Button from '../Button';
import { createBookmark, deleteBookmark } from '../../store/bookmarks';
import ModalUtil from '../../context/ModalUtil';
import LoginModal from '../../modals/LoginModal';


const Bookmark = ({articleId, options}) => {
  options ||= {fill: 'black', size:'20px' };
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const bookmark = useSelector(state => state.bookmarks[articleId]);

  let BookmarkIcon = bookmark
    ? <MdOutlineBookmark className='icon bookmark' style={options}/>
    : <MdOutlineBookmarkAdd className='icon bookmark' style={options}/>;

  const toggleBookmark = async e => {
    e.preventDefault();

    if (!sessionUser) ModalUtil.open(LoginModal);

    if (bookmark) {
      dispatch(deleteBookmark(bookmark));
    } else {
      dispatch(createBookmark({
        user_id: sessionUser.id,
        article_id: articleId
      }));
    }
  };

  return (
    <Button className='icon-btn bookmark'
            containername='icon-btn-ctnr bookmark'
            onClick={toggleBookmark}>
      {BookmarkIcon}
    </Button>
  );
};

export default Bookmark;


