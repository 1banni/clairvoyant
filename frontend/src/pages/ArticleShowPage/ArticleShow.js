import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Image from '../../blocks/ArticleImage/ArticleImage';
import Title from '../../blocks/ArticleTitle/ArticleTitle';
import BanniLinks from '../../blocks/BanniLinks';
import EditDelete from '../../blocks/EditDelete/EditDelete';
import AuthorTile from '../../components/AuthorTile/AuthorTile';
import AuthorTileSquare from '../../components/AuthorTile/Square/AuthorTileSquare';
import CommentIndex from '../../components/Comments';
import { fetchArticle } from '../../store/articles';
import { fetchClaps } from '../../store/claps';
import { fetchComments } from '../../store/comments';
import ArticleLinks from './ArticleLinks';
import './ArticleShow.css';
import Body from './Body';

const ArticleShow = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const article = useSelector(store => store.articles[articleId]);
  // TODO: ABSTRACT STATE TOGGLE INTO ITS OWN HOOK
  const [commentDisplay, setCommentDisplay] = useState(false);
  const showComments = commentDisplay ? 'show' : '';
  const editDeleteToggle = () => {
    return article?.authorId === sessionUser?.id;
  }

  useEffect(() => {
    dispatch(fetchClaps());
    if (articleId) {
      dispatch(fetchArticle(articleId));
      dispatch(fetchComments(articleId));
    }
  }, [dispatch, articleId]);

  const toggleCommentDisplay = () => {
    setCommentDisplay(state => !state);
  }

  console.log('article');
  console.log(article);
          // <Image url={imageUrl} width='600' />

  if (!article) return null;
  return (
    <>
    <div className='article-show-wrapper'>
      <div className='article-show'>

        <div className='left'>
          <AuthorTile article={article}>

          {editDeleteToggle() &&
            <EditDelete article={article}/>
          }
          </AuthorTile>

          <div className='article-view'>
              <Title article={article} />
              <div className='article-images'>
              {article && article.imageUrls?.map(imageUrl => (
                  <Image url={imageUrl} width='600' height='134'/>

              ))}
              </div>
              <Body body={article.body}/>
              <ArticleLinks article={article} toggleCommentDisplay={toggleCommentDisplay}/>
          </div>

          <div className='more-from-author'>More from author_name</div>

          <div className='share-your-ideas'>Share your ideas with millions of readers. TODO: WRITE ON MEDIUM button</div>

          <div className='recommended'>
            <h4>Recommended from Medium</h4>
            <div>TODO: Add 2col/4row of article tiles</div>
          </div>

        </div>

        <div className='right'>

          {commentDisplay && (
          <div className={`comment-sidebar ${showComments}`} >
            <CommentIndex article={article}/>
          </div>)}

          <div className={'article-sidebar'} >

            <AuthorTileSquare author={article.author}/>
            <div className='more-from-medium_'>More from Medium

            </div>
            <div className='links'>
                <div className='label-1'>
                  BY WILL BANNISTER
                </div>
                <BanniLinks />
              </div>
          </div>

        </div>
        {/* <button type='button' onClick={() => history.push('/')}>Return Home */}
          {/* <Link to='/'>Return Home</Link> */}
        {/* </button> */}
      </div>

    </div>
    </>
  )
}

export default ArticleShow;
