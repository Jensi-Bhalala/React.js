import {BrowserRouter, Router, Route } from "react-router-dom";
import Todo from "./pages/todo";

function App() {
  return (
    <div align="center">
      <BrowserRouter>
      <Router>
        <Route path="/" element={<Todo />} />
      </Router>
      </BrowserRouter>
    </div>
  );
}
export default App;