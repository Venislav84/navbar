import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./views/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import NoMatch from "./views/NoMatch";

function App() {
  return (
    <div className="App">
      <h1>Basic Example</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* това ще върне Id,след наклонената черта */}
            <Route path="dashboard/:id" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
