import "./App.css";
import "./CounterProgressBar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contador from "./Contador";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CounterProvider>
            <div className="App">
              <header>
                <h1>CountBox</h1>
                <Contador />
              </header>
            </div>
          </CounterProvider>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
