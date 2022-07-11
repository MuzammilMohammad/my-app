import logo from "./logo.svg";
import "./App.css";
import { PrivateRoute } from "./routes/private-rotes";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PrivateRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
