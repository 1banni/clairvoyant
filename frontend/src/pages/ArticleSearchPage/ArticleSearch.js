import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../blocks/Form';
import { useInput } from '../../hooks';
import { fetchArticles } from '../../store/articles';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
import { useParams } from 'react-router-dom';

export default function ArticleSearch({...props}) {
  const dispatch = useDispatch();
  const articles = useSelector(state => Object.values(state.articles));

  // incomingTopic ||= '';
  // incomingPageNum ||= 1;
  const {topicName} = useParams();
  const [topic, changeTopic] = useInput(topicName);

  const filteredArticles = useMemo(() => {
    return topic
      ? articles.filter(article => article.topic === topic)
      : articles
  }, [articles, topic]);
  // TODO: Confirm that adding articles and topic to the above dependency array didn't mess anything up

  // const [pageNum, setPageNum] = useInput(1);


  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);


  return (
    <>
    <div className='article-search-page'>
      <div className='article-search-wrapper'>
        <div className='articles-header'></div>
          <div className='article-search'>
              <Input
                label='topic'
                placeholder='Topic Search'
                type='text'
                value={topic}
                onChange={changeTopic}
              />
              {/* <Button type='submit' label='Search'/>
            </form> */}
          </div>
          <ol>
            {filteredArticles.map(article => <ArticleTile article={article} key={article.id} />)}
          </ol>
          {/* <div>Loading...</div> */}
        {/* <div>Error</div> */}
      </div>
      <div className='staff-picks'>Staff Picks
      </div>
    </div>
    </>

  )
}
