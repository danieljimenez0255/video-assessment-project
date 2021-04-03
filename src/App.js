import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoAssessment from "./components/Video/VideoAssessment";

function App() {
  return (
    <Router>
      <Switch>
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
