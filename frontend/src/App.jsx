import { Route, Switch } from 'react-router-dom';
import NavBar from './layouts/NavBar/NavBar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ArticleIndex from './components/ArticleIndex';
import ArticleForm from './pages/ArticleForm';
import ArticleShow from './pages/ArticleShow';
import ModalProvider from './context/ModalProvider';
import ArticleSearch from './pages/ArticleSearchPage/ArticleSearch';
import SplashPage from './pages/SplashPage';
import UserPage from './pages/UserPage';
import Chat from './components/Chat/Chat';
import ResetScroll from './context/ResetScroll';

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
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        {/* <Route path='/users/:userId'>
          <UserPage />
        </Route> */}
        <Route exact path='/articles/new'>
          <ArticleForm />
        </Route>
        <Route path='/articles/:articleId/edit'>
          <ArticleForm />
        </Route>
        <Route path='/articles/:articleId'>
          <ArticleShow />
        </Route>
        <Route path='/articles/search'>
          <ArticleSearch />
        </Route>
        <Route path='/articles/'>
          <ArticleIndex />
        </Route>
        <Route exact path='/chats/new'>
          <Chat />
        </Route>
        <Route path='/:topicName'>
          <ArticleSearch />
        </Route>
        <Route path='/'>
          <SplashPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
