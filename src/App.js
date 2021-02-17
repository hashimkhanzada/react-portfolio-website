import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import DataViz from "./pages/DataVisualizerPage/DataViz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/DataViz" exact component={DataViz} />
      </Switch>
    </Router>
  );
}

export default App;
