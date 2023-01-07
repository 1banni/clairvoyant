import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const ArticleIndexItem = ({ article }) => {
  let history = useHistory();

  const goToArticle = () => {
    history.push(`/articles/${article.id}`)
  }

  return (
    <div className="article-index-item" key={article.id} onClick={goToArticle}>
      <li><h4>Title: {article.title}</h4></li>
        <li>Author: {article.authorId}</li>
        <li>Author: {article.topic}</li>
        {/* <div>Likes: TODO</div> */}
        {/* <div>Dislikes: TODO</div> */}
        {/* <div>Liked: TODO</div> */}
        {/* <div>Disliked: TODO</div> */}
        {/* <div>Bookmarked: TODO</div> */}
    </div>
  )
}
export default withRouter(ArticleIndexItem);
