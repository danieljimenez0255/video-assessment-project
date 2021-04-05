import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoAssessment from "./components/Video/VideoAssessment";
import TestForm from "./components/TestForm";

/* 

Also anything new in here you see we'll cover tomorrow


*/

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <TestForm part={1} />
        </Route>
        <Route exact path="/assessment" component={VideoAssessment} />
        <Route path="/">
          <div className="app">
            <h1>App Js</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
