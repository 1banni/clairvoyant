import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import BenchIndexPage from "./components/BenchIndexPage";
import BenchShowPage from "./components/BenchShowPage";
import BenchFormPage from "./components/BenchFormPage";


function App() {
  return (
    <>
      {/* <h1>App</h1> */}
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <BenchIndexPage />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/articles/new'>
          <BenchShowPage />
        </Route>
        <Route exact path='/benches/new'>
          <BenchFormPage />
        </Route>
        <Route path='/benches/:benchId'>
          <BenchShowPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
