import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/auth/signup/signup";
import Signin from "./components/auth/signin/signin";
import Movies from "./components/movies/movies";
import Movie from "./components/movies/movie/movie";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/movies/popular"></Redirect>
            </Route>
            <Route path="/user/auth/signin" component={Signin}></Route>
            <Route path="/user/auth/signup" component={Signup}></Route>
            <Router path="/movies/popular" component={Movies}></Router>
            <Router path="/movies/popular/:id" component={Movie}></Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
