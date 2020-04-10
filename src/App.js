import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recepies from "./pages/Recepies";
import SingleRecepie from "./pages/SIngleRecepie";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recepies" exact component={Recepies} />
          <Route path="/recepies/:id" component={SingleRecepie} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
