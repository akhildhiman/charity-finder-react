import React from "react";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage";
import { Switch, Route } from "react-router-dom";
import SearchParams from "./SearchParams";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchParams} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
