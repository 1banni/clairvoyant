import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createArticle } from '../../store/articles';
import { useInput, useSubmit } from '../../hooks';
import { Input } from '../../blocks/Form';
import Button from '../../blocks/Button';


const ArticleCreatePage = props => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const [title, titleChange] = useInput('');
  const [body, bodyChange] = useInput('');
  // TODO -> make the setter convert into array, and then render split with spaces
  // format each word to look like tag within input box
  const [categoryStr, categoryStrChange] = useInput('');

  const [errors, handleSubmit] = useSubmit({
    createAction: () => createArticle({title, body, categories: categoryStr.split(' ')}),
    onSuccess: () => history.push('/')
  });

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <form onSubmit={handleSubmit} className="new-article-form">
      <Input label="Title"
        type="text"
        value={title}
        onChange={titleChange}
        required
      />
      <Input label="Body"
        type="text"
        value={body}
        onChange={bodyChange}
        required
      />
      <Input label="Categories"
        type="text"
        value={categoryStr}
        onChange={categoryStrChange}
      />
      <Button type="submit" label="Submit Article"/>
    </form>
  )
}

export default ArticleCreatePage;
