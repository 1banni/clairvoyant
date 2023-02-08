import './UserPage.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticles, selectArticlesByAuthor } from '../../store/articles';
import { fetchUsers } from '../../store/users';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
// import Image from '../../blocks/Image/Image';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(store => store.users.all[userId]);
  const authoredArticles = useSelector(selectArticlesByAuthor(20, userId));
  const allArticles = useSelector(state => state.articles.all)

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchArticles());
  }, [dispatch])

  console.log('authoredArticles');
  console.log(authoredArticles);


  console.log('allArticles');
  console.log(allArticles);
  console.log('userId');
  console.log(userId);

  if (!user) return <></>;
  return (
    <div className='user-page'>
      <section className='main'>
        <h2 className='name'>{user.name}</h2>
        <h4 className='articles'>Articles</h4>
        {authoredArticles && authoredArticles.map(authoredArticle => { return (
          <ArticleTile key={authoredArticle.id} article={authoredArticle}/>
        )})}
      </section>
      <section className='main'>

      </section>
    </div>
  );
};

// TODO: DELETE THIS UNUSED CODE
// {user && user.photoUrl &&
      // <Image url={user.photoUrl} /*width='750' height='600'*/ alt={user.photoUrl}/>}

export default UserPage;