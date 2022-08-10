import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import RecipeDisplay from "./components/RecipeDisplay";
import { fetchAllRecipes } from "./services/recipes.services";
import { useEffect, useState } from "react";

function App() {
  const [recipe, setRecipes] = useState();

  useEffect(() => {
    getRandomRecipe();
  }, []);

  function getRandomRecipe() {
    fetchAllRecipes().then(response => console.log(response.data));
  }

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
