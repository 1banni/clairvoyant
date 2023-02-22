import { Route, Switch } from 'react-router-dom';
import NavBar from './layouts/NavBar/NavBar';
import ArticleIndex from './components/ArticleIndex';
import ArticleForm from './pages/ArticleForm';
import ArticleShow from './pages/ArticleShowPage';
import ModalProvider from './context/ModalProvider';
import ArticleSearch from './pages/ArticleSearchPage/ArticleSearch';
import SplashPage from './pages/SplashPage';
import Chat from './components/Chat/Chat';
import ResetScroll from './context/ResetScroll';
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <>
      <NavBar/>
      <ModalProvider />
      <ResetScroll />
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Route exact path='/articles/new'>
          <ArticleForm />
        </Route>
        <Route path='/articles/:articleId/edit'>
          <ArticleForm />
        </Route>
        <Route path='/articles/:articleId'>
          <ArticleShow />
        </Route>
        <Route path='/search/:queryName'>
          <ArticleSearch />
        </Route>
        <Route path='/search'>
          <ArticleSearch />
        </Route>
        <Route path='/articles/'>
          <ArticleIndex />
        </Route>
        <Route exact path='/chats/new'>
          <Chat />
        </Route>
        <Route path='/users/:userId'>
          <UserPage />
        </Route>
        <Route path='/'>
          <SplashPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
