import './UserPage.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticles, selectArticlesByAuthor, selectRandomArticleIds } from '../../store/articles';
import { fetchUsers } from '../../store/users';
import { fetchBookmarks } from '../../store/bookmarks';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
import AuthorTileSquare from '../../components/AuthorTile/Square/AuthorTileSquare';
import ArticleTileSimple from '../../components/ArticleTile/Simple/ArticleTileSimple';

// import Image from '../../blocks/Image/Image';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(store => store.users.all[userId]);

  const [tab, setTab] = useState('articles');
  const active = tabName => tabName === tab ? 'active' : 'inactive';

  const authoredArticles = useSelector(selectArticlesByAuthor(20, userId));
  const excludeIds = authoredArticles
  ? authoredArticles.map(article => Number(article.id))
  : [];

  const fourRandomArticles = useSelector(selectRandomArticleIds(4, excludeIds));

  // const bookmarkedArticles = useSelector(select)


  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchArticles());
    dispatch(fetchBookmarks())
  }, [dispatch]);


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
          <h4 className={`claps-label ${active('claps')}`}
              onClick={() => setTab('claps')}
          >Claps</h4>
        </div>

        {tab === 'articles' && authoredArticles && authoredArticles.map(authoredArticle => { return (
          <ArticleTile key={authoredArticle.id} article={authoredArticle}/>
        )})}
      </section>
      <section className='sidebar'>
        <AuthorTileSquare authorId={user.id}/>
        <div className='more-articles'>
          <h4 className='more-from-medium_'>More from Medium</h4>
        {fourRandomArticles && fourRandomArticles.map(articleId => (
          <ArticleTileSimple articleId={articleId}/>
        ))}
        </div>
      </section>
    </div>
  );
};

// TODO: DELETE THIS UNUSED CODE
// {user && user.photoUrl &&
      // <Image url={user.photoUrl} /*width='750' height='600'*/ alt={user.photoUrl}/>}

export default UserPage;