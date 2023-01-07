import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { returnHome } from "../../history";
import { fetchArticle } from "../../store/articles";

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const article = useSelector(store => store.articles[articleId]);
  const history = useHistory();


  useEffect(() => {
    dispatch(fetchArticle(articleId));
  }, [dispatch, articleId]);

  if (!article) return null;
  return (
    <>
    <div>
      <h1>{article.title}</h1>
      <h3>Author: {article.authorId}</h3>
      <p>{article.topic}</p>
      <ul>
        <li>Likes: TODO</li>
        <li>Dislikes: TODO</li>
        <li>Liked: TODO</li>
        <li>Disliked: TODO</li>
        <li>Bookmarked: TODO</li>
      </ul>
      {/* <button type="button" onClick={history.push('/')}>Return Home */}
        <Link to="/">Return Home</Link>
      {/* </button> */}
    </div>
    </>
  )
}

export default ArticleShow;
