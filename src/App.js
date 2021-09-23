import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CounterProvider } from "./context/CounterContext";
import IdleApp from "./components/IdleApp/IdleApp";
import { StatsProvider } from "./context/StatsContext";
import { MiscProvider } from "./context/MiscContext";

function App() {
  return (
    <Router>
      <Switch>
        <CounterProvider>
          <StatsProvider>
            <MiscProvider>
              <div className="App">
                <IdleApp />
              </div>
            </MiscProvider>
          </StatsProvider>
        </CounterProvider>
      </Switch>
    </Router>
  );
}

export default App;
