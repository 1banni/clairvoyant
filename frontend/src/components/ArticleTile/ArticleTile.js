import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter} from "react-router-dom";
import { removeBookmark } from "../../store/bookmarks";
import Button from "../Button";
import "./ArticleTile.css";
import Author from "./Author/Author";
import Detail from "./Detail/Detail";
import Image from "./Image/Image";
import Title from "./Title/Title";

const ArticleTile = ({ article }) => {
  console.log('in tile')
  return (
    <div>
    <div className="article-tile" key={article.id}>
      <div className="article-info">
        <Author name={article.authorName}/>
        <Title article={article}/>
        <Detail article={article}/>
      </div>
      <Image />
    </div>
      {/* <div className="spacing-between-tiles"/> */}
    </div>
  )
}

export default withRouter(ArticleTile);
