import "./App.css";
import Navbar from "./components/navbar/navbar";
import Signin from "./components/auth/signin/signin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Signin />
      </div>
    </div>
  );
}

export default App;
