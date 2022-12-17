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
import MovieDetails from "./components/movies/movie-details/movie-details";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/movies/m/popular"></Redirect>
            </Route>
            <Route exact path="/user/auth/signin" component={Signin}></Route>
            <Route exact path="/user/auth/signup" component={Signup}></Route>
            <Route exact path="/movies/m/:state" component={Movies}></Route>
            <Route path="/movies/:id" component={MovieDetails}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
