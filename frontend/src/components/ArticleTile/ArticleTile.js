import React from "react";
import { withRouter} from "react-router-dom";
import Button from "../Button";
import "./ArticleTile.css";
import Author from "./Author/Author";
import Detail from "./Detail/Detail";
import Image from "./Image/Image";
import Title from "./Title/Title";

const ArticleTile = ({ article }) => {
  return (
    <div>
    <div className="article-tile" key={article.id}>
      <div className="article-info">
        <Author name={article.authorName}/>
        <Title article={article}  />
        <Detail article={article}/>
      </div>
      <Image />
    </div>
      <div className="spacing-between-tiles"/>
    </div>
  )
}

export default withRouter(ArticleTile);