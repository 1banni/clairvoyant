import React from "react";
import { Redirect, useHistory, withRouter} from "react-router-dom";
import "./ArticleTile.css";
import Author from "../../blocks/ArticleAuthor/ArticleAuthor";
import Detail from "../../blocks/ArticleDetail/ArticleDetail";
import Image from "../../blocks/ArticleImage/ArticleImage";
import Title from "../../blocks/ArticleTitle/ArticleTitle";

const ArticleTile = ({ article }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push(`/articles/${article.id}`);
  }

  if (!article) return <Redirect to="/"/>;
  return (
    <div>
    <div className="article-tile" key={article.id}>
      <div className="article-info">
        <Author name={article.authorName}/>
        <Title article={article} onClick={goToArticle}/>
        <Detail article={article}/>
      </div>
      <Image
        className="article-tile-image"
        src="https://miro.medium.com/fit/c/400/268/0*CV8SZagj7nhTYtYn"
        height="134px"
        width="200px" />
    </div>
      {/* <div className="spacing-between-tiles"/> */}
    </div>
  )
}

export default withRouter(ArticleTile);
