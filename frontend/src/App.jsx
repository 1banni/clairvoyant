import { Route, Switch } from "react-router-dom";
import NavBar from "./layouts/Navigation/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ArticleIndexPage from "./pages/ArticleIndexPage";
import ArticleCreatePage from "./pages/ArticleCreatePage";
import ArticleShowPage from "./pages/ArticleShowPage";
import ModalProvider from "./context/ModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {


  return (
    <>
      <ModalProvider />
      <NavBar />
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
