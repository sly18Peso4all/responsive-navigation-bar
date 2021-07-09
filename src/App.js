import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import More from "./Pages/More";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/more">
          <More />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
