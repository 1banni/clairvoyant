import React from 'react';
import { Redirect, useHistory, withRouter} from 'react-router-dom';
import './ArticleTile.css';
import ArticleAuthor from '../../blocks/ArticleAuthor';
import ArticleDetail from '../../blocks/ArticleDetail';
import ArticleTitle from '../../blocks/ArticleTitle';
import Bookmark from '../../blocks/Bookmark'
import Image from '../../blocks/Image/Image';
// import Image from '../../blocks/ArticleImage/ArticleImage';
import NavUtil from '../../utils/NavUtil';
import { useSelector } from 'react-redux';

const ArticleTile = (
  { articleId, excludeAuthor, excludeImages, blurbLength, blurbLineClamp, imageDims }
) => {
  let history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  imageDims ||= { height: '134', width: '200' };
  // excludeAuthor ||= false;
  excludeImages ||= false;
  blurbLength ||= 115;
  blurbLineClamp ||= 'line-clamp-2';
  const article = useSelector(store => store.articles.all[articleId]);


  if (excludeImages) console.log('excludeImages');
  if (excludeImages) console.log(excludeImages);

  if (!article) return <></>;
  return (
    <div>
    <div className='article-tile' key={article.id}>

      <div className='article-info'>
      {!excludeAuthor &&
        <ArticleAuthor userId={article.authorId} name={article.authorName}/>}

        <ArticleTitle
          article={article}
          includeBlurb={true}
          blurbLength={blurbLength}
          blurbLineClamp={blurbLineClamp}
          onClick={NavUtil.goToArticleById(history, article.id)}
        />

        <ArticleDetail article={article}>
          <Bookmark articleId={article.id} />
        </ArticleDetail>
      </div>
    {!excludeImages && article.imageUrls && (article.imageUrls.length !== 0) &&
     (
      <div className='article-image'>
      {
        <Image url={article.imageUrls[0]} /*width={imageDims.width} height={imageDims.height}*//>
      }
      </div>
    )}
    </div>
      <div className='spacing-between-tiles'/>
    </div>
  );
};

export default withRouter(ArticleTile);
