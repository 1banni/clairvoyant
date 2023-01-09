import React from 'react'
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

const Bookmark = () => {

  const options = {
    fill: "black"
  };

  const toggleBookmark = () => {
    console.log('clicked bookmark');
    // TODO: Modal if not logged in
    // Create an account to bookmark this story.
    // Save stories to your personalized bookmarks and access them anytime, anywhere.
  };

  return (
    <Button className="icon-btn bookmark"
            containerName="icon-btn-ctnr bookmark"
            onClick={toggleBookmark}>

      <MdOutlineBookmarkAdd className="icon bookmark"
                   style={options}/>

    </Button>
  )
};

export default Bookmark;


