import './ArticleBookmark.css';
import React, {} from 'react'
// import { BsBookmarks } from 'react-icons/bs'
import {
  MdOutlineBookmarkAdd,
  MdOutlineBookmark,
  // MdOutlineBookmarkAdded,
  // MdOutlineBookmarkRemove,
  // MdOutlineBookmarkBorder,
  // MdOutlineBookmarks
} from 'react-icons/md'

// TODO: DELETE this link
// https://blog.logrocket.com/using-setstate-react-components/


import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { createBookmark, deleteBookmark, /*selectBookmarksByArticleId*/ } from '../../store/bookmarks'

const ArticleBookmark = ({articleId, options}) => {
  options ||= {fill: 'black', size:'20px' };
  const sessionUser = useSelector(state => state.session.user);
  const bookmark = useSelector(state => state.bookmarks[articleId]);
  // const bookmark2 = useSelector(selectBookmarksByArticleId(articleId));
  const dispatch = useDispatch();

  let BookmarkIcon = bookmark
    ? <MdOutlineBookmark className='icon bookmark' style={options}/>
    : <MdOutlineBookmarkAdd className='icon bookmark' style={options}/>;

  // Questin: should this be up in the parent?
  const toggleBookmark = async e => {
    e.preventDefault();

    // TODO: Opeen login modal, and break / stop propogation if not logged in
    // TODO: Modal if not logged in
    // 'Create an account to bookmark this story.'
    // 'Save stories to your personalized bookmarks and access them anytime, anywhere.'
    if (!sessionUser) (<>  </>);

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

export default ArticleBookmark;


