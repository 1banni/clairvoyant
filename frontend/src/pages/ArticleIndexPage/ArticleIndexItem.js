import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  let history = useHistory();

  const goToArticle = () => {
    history.push(`/articles/${article.id}`)
  }

  return (
    <ul className="article-index-item" key={article.id} onClick={goToArticle}>
      <li><h4>Title: {article.title}</h4></li>
        <li>Author: {article.author_id}</li>
        <li>Likes: TODO</li>
        <li>Dislikes: TODO</li>
        <li>Liked: TODO</li>
        <li>Disliked: TODO</li>
        <li>Bookmarked: TODO</li>
    </ul>
  )
}
export default withRouter(ArticleListItem);
