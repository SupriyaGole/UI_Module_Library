import React from "react";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Debounce from "./Debounce/Debounce";
import ParallelPromise from "../Utils/concurrent";

const Welcome = () => <h1>Welcome to UI Module Library</h1>;
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/debounce" component={Debounce} />
          <Route exact path="/" component={() => <ParallelPromise limit={2} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
