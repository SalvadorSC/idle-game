import "./App.css";

import "./CounterProgressBar.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CounterProvider } from "./context/CounterContext";
import IdleApp from "./components/IdleApp/IdleApp";

function App() {
  return (
    <Router>
      <Switch>
        <CounterProvider>
          <div className="App">
            <IdleApp />
          </div>
        </CounterProvider>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
