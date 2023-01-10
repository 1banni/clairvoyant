import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ColorUtil from '../../utils/ColorUtil';
import ArticleAuthor from '../../blocks/ArticleAuthor/';
import './AuthorTile.css';
import ArticleDetail from '../../blocks/ArticleDetail';
import { Redirect } from 'react-router-dom';


const AuthorTile = ({article}) => {


  console.log('article');
  console.log(article);

  if (!article) return <Redirect to="/articles"/>;
  const styleOptions = {
    stroke: ColorUtil.nameToColor(article.author.name),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }
  return (
    <div className="author-tile-1">
      <div className="left">
        <FaUserCircle className="user-icon"
          size="40px"
          style={styleOptions}
        />
      </div>
      <div>
        <div className='right'>
          <div className="author-name">{article.author.name}</div>
          <ArticleDetail article={article}/>
        </div>
        <div>

        </div>
      </div>
    </div>
  )



  return (
    <div className="author-tile-1">
      <ArticleAuthor name={article.author.name}>
        <div className=""></div>
      </ArticleAuthor>
    </div>


  )
}

export default AuthorTile