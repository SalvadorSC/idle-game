import "./App.css";
import "./CounterProgressBar.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Contador from "./Contador";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <Router>
      <Switch>
        <CounterProvider>
          <div className="App">
            <Contador />
          </div>
        </CounterProvider>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
