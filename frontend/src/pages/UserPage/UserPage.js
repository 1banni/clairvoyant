import './UserPage.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticles, selectArticlesByAuthor, selectRandomArticleIds } from '../../store/articles';
import { fetchUser } from '../../store/users';
import { fetchBookmarks, selectBookmarksByUserId } from '../../store/bookmarks';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
import AuthorTileSquare from '../../components/AuthorTile/Square/AuthorTileSquare';
import ArticleTileSimple from '../../components/ArticleTile/Simple/ArticleTileSimple';

// import Image from '../../blocks/Image/Image';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector(store => store.users.user);

  const [tab, setTab] = useState('articles');
  const active = tabName => tabName === tab ? 'active' : 'inactive';

  const authoredArticles = useSelector(selectArticlesByAuthor(20, userId));
  const excludeIds = authoredArticles
    ? authoredArticles.map(article => Number(article.id))
    : []
  ;
  const bookmarkedArticles = useSelector(selectBookmarksByUserId(userId));
  const fourRandomArticles = useSelector(selectRandomArticleIds(4, excludeIds));


  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchArticles());
    if (userId) dispatch(fetchBookmarks(userId));
  }, [dispatch, userId]);


  if (!user) return <></>;
  return (
    <div className='user-page'>
      <section className='main'>
        <h2 className='name'>{user.name}</h2>
        <div className='tabs'>

         <h4 className={`articles-label ${active('articles')}`}
              onClick={() => setTab('articles')}
          >Articles</h4>

          <h4 className={`bookmarks-label ${active('bookmarks')}`}
            onClick={() => setTab('bookmarks')}
          >Bookmarks</h4>

        </div>

      {tab === 'articles' && authoredArticles &&
        authoredArticles.map(authoredArticle => { return (
          <ArticleTile key={authoredArticle.id} articleId={authoredArticle?.id}/>
      )})}

      {tab === 'bookmarks' && bookmarkedArticles &&
        bookmarkedArticles.map(bookmarkedArticle => { return (
        <ArticleTile key={bookmarkedArticle.id} articleId={bookmarkedArticle?.articleId}/>
      )})}

      </section>
      <section className='sidebar'>
        <AuthorTileSquare author={user} photoURL={user.photoUrl} authorId={user.id}/>
        <div className='more-articles'>
          <h4 className='more-from-medium_'>More from Medium</h4>
        {fourRandomArticles && fourRandomArticles.map(articleId => (
          <ArticleTileSimple key={articleId} articleId={articleId}
            excludeImage={true}
          />
        ))}
        </div>
      </section>
    </div>
  );
};


export default UserPage;