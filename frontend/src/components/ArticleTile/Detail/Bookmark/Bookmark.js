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

const Bookmark = ({articleId}) => {
  const options = {fill: "black"};
  const sessionUser = useSelector(state => state.session.user);
  const bookmark = useSelector(state => state.bookmarks[articleId]);
  console.log(bookmark);
  const dispatch = useDispatch();

  let BookmarkIcon = bookmark
    ? <MdOutlineBookmark className="icon bookmark" style={options}/>
    : <MdOutlineBookmarkAdd className="icon bookmark" style={options}/>;

  // Questin: should this be up in the parent?
  const toggleBookmark = async e => {
    e.preventDefault();

    // TODO: Opeen login modal, and break / stop propogation if not logged in
    // TODO: Modal if not logged in
    // Create an account to bookmark this story.
    // Save stories to your personalized bookmarks and access them anytime, anywhere.
    if (!sessionUser) throw  "you must be logged in to bookmark a post";

    if (bookmark) {
      console.log('111')
      console.log(bookmark)
      console.log(bookmark.id)
      dispatch(deleteBookmark(bookmark));
    } else {
      console.log('we\'re close')
      console.log(articleId);
      console.log(sessionUser.id);
      dispatch(createBookmark({
        user_id: sessionUser.id,
        article_id: articleId
      }))
    }
  };

  return (
    <Button className="icon-btn bookmark"
            containerName="icon-btn-ctnr bookmark"
            onClick={toggleBookmark}>
      {BookmarkIcon}
    </Button>
  )
};

export default Bookmark;


