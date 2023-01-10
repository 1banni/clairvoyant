import React from "react";
import { Redirect, useHistory, withRouter} from "react-router-dom";
import "./ArticleTile.css";
import Author from "../../blocks/ArticleAuthor";
import ArticleDetail from "../../blocks/ArticleDetail";
import Image from "../../blocks/ArticleImage";
import Title from "../../blocks/ArticleTitle";
import Bookmark from '../../blocks/Bookmark'

const TrendingTile = ({ article, idx }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push(`/articles/${article.id}`);
  }

  if (!article) return <Redirect to="/"/>;
  return (
    <div className="trending-tile-wrapper">
      <div className="trending-number">
        {'0' + (idx + 1).toString()}
      </div>

      <div className="trending-tile" key={article.id}>
        <div className="trending-info">
          <Author name={article.authorName}/>
          <h4 className="title" onClick={goToArticle}>
            {article.title}
          </h4>
          <ArticleDetail article={article}>
          </ArticleDetail>
        </div>
      </div>
        {/* <div className="spacing-between-tiles"/> */}
    </div>
  )
}

export default withRouter(TrendingTile);
