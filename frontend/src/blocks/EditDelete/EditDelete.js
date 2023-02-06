import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteArticle } from '../../store/articles';
import Button from '../Button';
import './EditDelete.css';

const EditDelete = ({article}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEditClick = () => {
    console.log('in the push');
    console.log(`URL: /articles/${article.id}/edit`);
    history.push(`/articles/${article.id}/edit`);
  }

  const handleDeleteCLick = () => {
    dispatch(deleteArticle(article.id));
    history.push('/');
  }

  return (
    <div className='edit-delete-ctnr'>
      <Button
        containername='text-btn-ctnr'
        className='text-btn'
        label='Edit Article'
        onClick={handleEditClick}
      />
      <Button
        containername='text-btn-ctnr'
        className='text-btn'
        label='Delete Article'
        onClick={handleDeleteCLick}
      />
    </div>
  );
};

export default EditDelete;