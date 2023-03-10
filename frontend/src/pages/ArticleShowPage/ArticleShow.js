import './ArticleShow.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Image from '../../blocks/Image/Image';
import Title from '../../blocks/ArticleTitle/ArticleTitle';
import BanniLinks from '../../blocks/BanniLinks';
import EditDelete from '../../blocks/EditDelete/EditDelete';
import ArticleTileSimple from '../../components/ArticleTile/Simple/ArticleTileSimple';
import ArticleTile from '../../components/ArticleTile';
import AuthorTile from '../../components/AuthorTile/AuthorTile';
import AuthorTileSquare from '../../components/AuthorTile/Square/AuthorTileSquare';
import CommentIndex from '../../components/Comments';
import { fetchArticle, fetchArticles, selectArticlesByAuthor, selectRandomArticleIds } from '../../store/articles';
import { fetchClaps } from '../../store/claps';
import { fetchComments } from '../../store/comments';
import ArticleLinks from './ArticleLinks';
import Body from './Body';
import Button from '../../blocks/Button';
import { fetchBookmarks } from '../../store/bookmarks';

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { articleId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const article = useSelector(store => store.articles.current[articleId]);
  const fourRandomArticles = useSelector(selectRandomArticleIds(4, [articleId]));
  const moreArticlesByAuthor = useSelector(selectArticlesByAuthor(6, article?.authorId));
  const [commentDisplay, setCommentDisplay] = useState(false);
  const showComments = commentDisplay ? 'show' : '';
  const editDeleteToggle = () => {
    return article?.authorId === sessionUser?.id;
  }

  useEffect(() => {
    dispatch(fetchClaps());
    dispatch(fetchArticles());
    if (sessionUser)
      dispatch(fetchBookmarks(sessionUser.id));
    if (articleId) {
      dispatch(fetchArticle(articleId));
      dispatch(fetchComments(articleId));
    }
  }, [dispatch, articleId, sessionUser]);

  const toggleCommentDisplay = () => setCommentDisplay(state => !state);

  if (!article) return <></>;
  return (
    <>
    <div className='article-show-wrapper'>
      <div className='article-show'>

        <div className='left'>
          <AuthorTile photoURL={article.authorPhotoUrl} article={article}>

          {editDeleteToggle() &&
            <EditDelete article={article}/>
          }
          </AuthorTile>

          <div className='article-view'>
              <Title article={article} />
              <div className='article-images'>
              {article && article.imageUrls?.map(imageUrl => (
                <Image url={imageUrl} alt={imageUrl}
                       key={imageUrl}
                       wrapper='article-image-wrapper'
                       className={'article-image'}
                />
              ))}
              </div>
              <Body body={article.body}/>
              <ArticleLinks article={article} toggleCommentDisplay={toggleCommentDisplay}/>
          </div>

          {moreArticlesByAuthor && moreArticlesByAuthor.length > 0 &&
          <div className='more-from-author-section'>

            <h4 className='more-from-author'>
              More from {article.authorName}
            </h4>

          {moreArticlesByAuthor.map(article => (
            <ArticleTile articleId={article.id}
              key={article.id}
              excludeAuthor={true}
              blurbLength={235}
              blurbLineClamp='line-clamp-3'
            />
          ))}
          </div>
          }

          <div className='share-your-ideas'>
            Share your ideas with millions of readers.
            <Button label='Write on Clairvoyant'
              onClick={() => history.push('/articles/new')}
            />
          </div>

        </div>

        <div className='right'>
          <div className='inner'>

          {commentDisplay && (
            <section className={`comment-sidebar ${showComments}`} >
              <CommentIndex article={article}/>
            </section>)}

            <section className={'article-sidebar'} >

              {/* <AuthorTileSquare authorId={article.author?.id}/> */}
              <AuthorTileSquare author={article.author} photoURL={article.authorPhotoUrl} authorId={article.authorId}/>

              <div className='more-articles'>
                <h4 className='more-from-medium_'>More from Medium</h4>
                {fourRandomArticles && fourRandomArticles.map(articleId => (
                  <ArticleTileSimple articleId={articleId} key={articleId}/>
                ))}
              </div>

              <div className='links'>
                  <h4 className='label-1'>BY WILL BANNISTER</h4>
                  <BanniLinks />
              </div>
            </section>

          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ArticleShow;
