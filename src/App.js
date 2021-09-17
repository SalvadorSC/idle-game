import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
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
      </Switch>
    </Router>
  );
}

export default App;
