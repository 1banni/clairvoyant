import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { returnHome } from "../../history";
import { fetchArticle } from "../../store/articles";

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { articleId } = useParams();
  const article = useSelector(store => store.articles[articleId]);

  useEffect(() => {
    dispatch(fetchArticle(articleId));
  }, [dispatch, articleId])


  if (!article) return null;
  return (
    <>
    <div>
      <h1>{article.title}</h1>
      <h3>Author: {article.author_id}</h3>
      <p>{article.categories}</p>
      <ul>
        <li>Likes: TODO</li>
        <li>Dislikes: TODO</li>
        <li>Liked: TODO</li>
        <li>Disliked: TODO</li>
        <li>Bookmarked: TODO</li>
      </ul>
      <button onClick={returnHome(history)}>Return Home
        {/* <Link to="/">Return Home</Link> */}
      </button>
    </div>
    </>
  )
}

export default ArticleShow;
