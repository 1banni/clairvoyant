import React, { useState } from 'react'
import { BsBookmarks } from 'react-icons/bs'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { MdOutlineBookmarkAdded } from 'react-icons/md'
import { MdOutlineBookmarkRemove } from 'react-icons/md'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import { MdOutlineBookmark } from 'react-icons/md'
import { MdOutlineBookmarks } from 'react-icons/md'
import './Bookmark.css';

// TODO: DELETE this link
// https://blog.logrocket.com/using-setstate-react-components/


import Button from '../../../Button'
import { useDispatch, useSelector } from 'react-redux'
import { createBookmark, deleteBookmark } from '../../../../store/bookmarks'
import { useEffect } from 'react'

const Bookmark = ({bookmarkId, articleId, userBookmarkStatus}) => {
  console.log('userBookmarkStatus');
  console.log();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [bookmarkStatus, setBookmarkStatus] = useState(userBookmarkStatus);

  const options = {
    fill: "black"
  };


  const toggleBookmark = e => {
    console.log('clicked bookmark');
    e.preventDefault();

    console.log('articleId');
    console.log(articleId);
    console.log(sessionUser.id);

    if (bookmarkStatus) {
      dispatch(deleteBookmark({
        user_id: sessionUser.id,
        article_id: articleId
      }))
      setBookmarkStatus(state => !state)
    } else {
      dispatch(createBookmark({
        user_id: sessionUser.id,
        article_id: articleId
      }))
      setBookmarkStatus(state => !state)
    }
    // TODO: Modal if not logged in
    // Create an account to bookmark this story.
    // Save stories to your personalized bookmarks and access them anytime, anywhere.
  };

  let bookmark;
  if (bookmarkStatus) {
    console.log(bookmarkStatus);
    bookmark = (
      <MdOutlineBookmark className="icon bookmark" style={options}/>
      );
  } else {
    console.log(bookmarkStatus);
    bookmark = (
      <MdOutlineBookmarkAdd className="icon bookmark" style={options}/>
    );
  }


  return (
    <Button className="icon-btn bookmark"
            containerName="icon-btn-ctnr bookmark"
            onClick={toggleBookmark}>
      {bookmark}
    </Button>
  )
};

export default Bookmark;


