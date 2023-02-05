import React from "react";
import { Redirect, useHistory, withRouter} from "react-router-dom";
import "./ArticleTile.css";
import ArticleAuthor from "../../blocks/ArticleAuthor";
import ArticleDetail from "../../blocks/ArticleDetail";
import ArticleImage from "../../blocks/ArticleImage";
import ArticleTitle from "../../blocks/ArticleTitle";
import Bookmark from '../../blocks/Bookmark'
import Image from "../../blocks/Image/Image";
import NavUtil from "../../utils/NavUtil";

const ArticleTile = ({ article }) => {
  let history = useHistory();

  if (article && article.imageUrls) {
    console.log('article.imageUrls');
    console.log(article.imageUrls);
  }

  if (!article) return <Redirect to="/"/>;
  return (
    <div>
    <div className="article-tile" key={article.id}>

      <div className="article-info">
        <ArticleAuthor name={article.authorName}/>
        <ArticleTitle
          article={article}
          includeBlurb={true}
          onClick={NavUtil.goToArticleById(history, article.id)}
        />
        <ArticleDetail article={article}>
          <Bookmark articleId={article.id} />
        </ArticleDetail>
      </div>

      <div className="article-image">
      {article.imageUrls && (article.imageUrls.length !== 0) && (
        <Image url={article.imageUrls[0]} width="200" height="134"/>
      )}
      </div>

      {/* <ArticleImage
        className="article-tile-image"
        src="https://miro.medium.com/fit/c/400/268/0*CV8SZagj7nhTYtYn"
        height="134px"
        width="200px" /> */}
    </div>
      <div className="spacing-between-tiles"/>
    </div>
  )
}

export default withRouter(ArticleTile);
