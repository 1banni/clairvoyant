import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Image from "../../blocks/ArticleImage/ArticleImage";
import Title from "../../blocks/ArticleTitle/ArticleTitle";
// import EditDelete from "../../blocks/EditDelete/EditDelete";
import EditDelete from "../../blocks/EditDelete/EditDelete";
import AuthorTile from "../../components/AuthorTile/AuthorTile";
import Comments from "../../components/Comments";
import { fetchArticle } from "../../store/articles";
import { fetchClaps } from "../../store/claps";
import { fetchComments } from "../../store/comments";
import ArticleLinks from "./ArticleLinks";
import './ArticleShow.css';
import Body from "./Body";

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { articleId } = useParams();
  const article = useSelector(store => store.articles[articleId]);
  const editDeleteToggle = () => {
    return article?.authorId === sessionUser?.id;
  }

  useEffect(() => {
    dispatch(fetchClaps());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchClaps());
    if (articleId) {
      dispatch(fetchArticle(articleId));
      dispatch(fetchComments(articleId));
    }
  }, [dispatch, articleId]);

  if (!article) return null;
  return (
    <>
    <div className="article-show">
      <div className="article-show-l">
        <AuthorTile article={article}>
        {editDeleteToggle() &&
          <EditDelete article={article}/>
        }
        </AuthorTile>
        <div className="article-view">
            <Title article={article} />
            <Image containername="article-image-ctnr"
                   className="article-image"
                   src="https://miro.medium.com/fit/c/400/268/0*CV8SZagj7nhTYtYn"
                  //  height="134px"
                  //  width="200px"
            />
            <Body body={article.body}/>
            <ArticleLinks article={article}/>
            <Comments article={article}/>
        </div>
        <div className="more-from-author">More from author_name</div>
        <div className="share-your-ideas">Share your ideas with millions of readers. TODO: WRITE ON MEDIUM button</div>
        <div className="recommended">
          <h4>Recommended from Medium</h4>
          <div>TODO: Add 2col/4row of article tiles</div>
        </div>
      </div>
      <div className="article-show-right">
        <div className="author-tile-1">Author Tile 2

        </div>
        <div className="more-from-medium_">Four Article Tiles

        </div>
        <div className="footer-links">

        </div>
      </div>
      {/* <button type="button" onClick={() => history.push('/')}>Return Home */}
        {/* <Link to="/">Return Home</Link> */}
      {/* </button> */}
    </div>
    </>
  )
}

export default ArticleShow;
