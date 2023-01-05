import { Route, Switch } from "react-router-dom";
import NavBar from "./layouts/Navigation/NavBar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ArticleIndexPage from "./pages/ArticleIndexPage";
import ArticleCreatePage from "./pages/ArticleCreatePage";
import ArticleShowPage from "./pages/ArticleShowPage";
import { ModalProvider } from "./context/Modal";
import ModalRoot from "./context/ModalRoot";
import ModalService from "./context/ModalService";
import TestModal from "./context/TestModal";


function App() {


  return (
    <>
      <div className='App'>App

      </div>
      {/* <h1>App</h1> */}
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



      {/* <Modal onClose={(setShowModal) => setShowModal(false)}/> */}
    </>
  );
}

export default App;
