import { Route, Switch } from "react-router-dom";
import NavBar from "./layouts/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ArticleIndexPage from "./pages/ArticleIndexPage";
import ArticleCreatePage from "./pages/ArticleCreatePage";
import ArticleShowPage from "./pages/ArticleShowPage";
import ModalProvider from "./context/ModalProvider";
import ArticleSearch from "./pages/ArticleSearchPage/ArticleSearch";
import SplashPage from "./pages/SplashPage";

function App() {
  return (
    <>
      <NavBar/>
      <ModalProvider />
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
        <Route exact path='/articles/new'>
          <ArticleCreatePage />
        </Route>
        <Route exact path='/articles/all'>
          <ArticleIndexPage />
        </Route>
        <Route path='/articles/:articleId'>
          <ArticleShowPage />
        </Route>
        <Route path='/articles/search'>
          <ArticleSearch />
        </Route>
        <Route path='/articles/'>
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
