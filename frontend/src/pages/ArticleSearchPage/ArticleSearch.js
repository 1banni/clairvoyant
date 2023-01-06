import { useState, useEffect } from 'react';
import { fetchArticles } from '../../store/articles';

export default function ArticleSearch(query, pageNum) {


  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNum}
    }).then( res => {
      console.log(res.data);
    })
  }, [pageNum, query])


}
