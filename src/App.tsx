import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import RecipeDisplay from "./components/RecipeDisplay";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<RecipeDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
