import React from "react";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Debounce from "./Debounce/Debounce";

const Welcome = () => <h1>Welcome to UI Module Library</h1>;
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/debounce" component={Debounce} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
