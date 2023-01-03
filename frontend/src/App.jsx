import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ArticleIndexPage from "./components/ArticleIndexPage";
import ArticleCreatePage from "./components/ArticleCreatePage";
import ArticleShowPage from "./components/ArticleShowPage";



function App() {
  return (
    <>
      {/* <h1>App</h1> */}
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <ArticleIndexPage />
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
        <Route path='/articles/:articleId'>
          <ArticleShowPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
