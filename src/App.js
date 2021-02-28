import "./App.css";
import Login from "./login.js";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">webDAST</h1>
      </div>

      <div className="space-box">
        <span className="welcome-text">
          hey! Do something very simple: Draw a Scientist
        </span>
      </div>

      <Login />
    </div>
  );
}

export default App;
