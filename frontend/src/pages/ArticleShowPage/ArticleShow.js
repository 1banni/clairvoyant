import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import Image from "../../blocks/ArticleImage/ArticleImage";
import Title from "../../blocks/ArticleTitle/ArticleTitle";
import AuthorTile from "../../components/AuthorTile/AuthorTile";
import { fetchArticle } from "../../store/articles";
import ArticleLinks from "./ArticleLinks";
import './ArticleShow.css';
import Body from "./Body";

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const article = useSelector(store => store.articles[articleId]);

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticle(articleId));
    }
  }, [dispatch, articleId]);

   if (!article) return <Redirect to="/articles"/>;
  return (
    <>
    <div className="article-show-page">
      <div className="article-show-left">
        <AuthorTile article={article}/>

        <div className="article-view">ArticleView
          <div className="artcle-title">
            <Title article={article}/>
            <Image className="article-image-ctnr"
                   src="https://miro.medium.com/fit/c/400/268/0*CV8SZagj7nhTYtYn"
                   height="134px"
                   width="200px"
            />
            <Body body={article.body} />
            <ArticleLinks />
          </div>
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
