import './ArticleSearch.css';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
import { useInput } from '../../hooks';
import { fetchArticles } from '../../store/articles';

export default function ArticleSearch({...props}) {
  const dispatch = useDispatch();
  const articles = useSelector(state => Object.values(state.articles.all));
  let { queryName } = useParams();
  console.log('queryName');
  console.log(queryName);
  console.log('useParams');
  console.log(useParams().toString());
  const [query, changeQuery] = useInput(queryName);

  const filteredArticles = useMemo(() => {
    const lowerCaseQuery = query?.toLowerCase();

    return query
      ? articles.filter(article => (
        (article.topic.toLowerCase().includes(lowerCaseQuery))
        || (article.body.toLowerCase().includes(lowerCaseQuery))
        || (article.title.toLowerCase().includes(lowerCaseQuery))
      ))
      : articles
  }, [query, articles]);
  // TODO: Confirm that adding articles and topic to the above dependency array didn't mess anything up

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);


  if (!filteredArticles) return <></>;
  return (
    <>
    <div className='search-page'>
      <div className='search-wrapper'>
        <div className='search-input-wrapper'>
          <input
            // label='topic'
            className='search-input'
            placeholder='Search Clairvoyant'
            type='text'
            value={query}
            onChange={changeQuery}
          />
        </div>
        <div className='results-label'>Articles</div>
        <ol className='search-results'>
        {filteredArticles.map(article => (
          <ArticleTile articleId={article.id} key={article.id}
            excludeImages={true}
            blurbLength={300}
            blurbLineClamp={'line-clamp-3'}
          />
        ))}
        </ol>
      </div>
      {/* <div className='staff-picks'>
        Staff Picks
      </div> */}
    </div>
    </>

  )
}
