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

const ArticleTile = (
  { article, excludeAuthor, excludeImages, blurbLength, blurbLineClamp }
) => {
  let history = useHistory();
  excludeAuthor ||= false;
  excludeImages ||= false;
  blurbLength ||= 115;
  blurbLineClamp ||= 'line-clamp-2';

  if (article && article.imageUrls) {
    // console.log('article.imageUrls');
    // console.log(article.imageUrls);
  }

  if (!article) return <></>;
  return (
    <div>
    <div className='article-tile' key={article.id}>

      <div className='article-info'>
      {!excludeAuthor &&
        <ArticleAuthor name={article.authorName}/>}

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
    {excludeImages
    ? (<div></div>)
    : (
      <div className='article-image'>{console.log(article?.imageUrls)}
      {article.imageUrls && (article.imageUrls.length !== 0) && (
        <Image url={article.imageUrls[0]} width='200' height='134'/>
      )}
      </div>
    )}
    </div>
      <div className='spacing-between-tiles'/>
    </div>
  );
};

export default withRouter(ArticleTile);
