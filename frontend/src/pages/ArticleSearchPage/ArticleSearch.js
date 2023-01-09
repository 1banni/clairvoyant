import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../components/Form';
import { useInput } from '../../hooks';
import { fetchArticles } from '../../store/articles';
import ArticleTile from '../../components/ArticleTile/ArticleTile';

export default function ArticleSearch({incomingTopic, incomingPageNum}) {
  const dispatch = useDispatch();
  // incomingTopic ||= '';
  // incomingPageNum ||= 1;
  const [topic, setTopic] = useInput('')
  // const [pageNum, setPageNum] = useInput(1);
  const articles = useSelector(state => Object.values(state.articles));


  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);

  const filteredArticles = useMemo(() => {
    return topic
      ? articles.filter(article => article.topic === topic)
      : articles
  })

  return (
    <>
    <div className="article-search-page">
      <div className="article-search-wrapper">
        <div className="articles-header"></div>
          <div className="article-search">
              <Input
                label="topic"
                placeholder="Topic Search"
                type="text"
                value={topic}
                onChange={setTopic}
              />
              {/* <Button type="submit" label="Search"/>
            </form> */}
          </div>
          <ol>
            {filteredArticles.map(article => <ArticleTile article={article} key={article.id} />)}
          </ol>
          <div>Loading...</div>
        <div>Error</div>
      </div>
      <div className="staff-picks">Staff Picks
      </div>
    </div>
    </>

  )
}
