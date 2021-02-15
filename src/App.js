import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import DataViz from "./pages/DataVisualizerPage/DataViz";
import { DataTest } from "./pages/DataVisualizerPage/DataTest";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Link
        style={{ textAlign: "center", textDecoration: "none" }}
        to="/DataViz"
      >
        <h2>Don't click...unless..</h2>
      </Link>
      <Switch></Switch>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/DataViz" exact component={DataViz} />
      </Switch>
      <Switch>
        <Route path="/tt" exact component={DataTest} />
      </Switch>
    </Router>
  );
}

export default App;
