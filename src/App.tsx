import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import RecipeDisplay from "./components/RecipeDisplay";
import { fetchRandomRecipes, fetchVegetarianRecipes, fetchRecipeById } from "./services/recipes.services";
import { useEffect, useState } from "react";
import SearchCriteriaForm from "./components/SearchCriteriaForm";
import RecipeResults from "./components/RecipeResults";

function App() {
  const [recipe, setRecipes] = useState();
  const [recipeId, setRecipeId] = useState('');

  useEffect(() => {
    getRandomRecipe();
    getVegetartianRecipes();
    // getRecipeById();
  }, []);

  function getRandomRecipe() {
    fetchRandomRecipes().then((response) => console.log(response));
  }

  function getVegetartianRecipes() {
    fetchVegetarianRecipes().then((response) => console.log(response))
  }

  // function getRecipeById() {
  //   fetchRecipeById(recipeId).then((response) => console.log(response))
  // }

  return (
    <div className="App">
      <Header />
      <SearchCriteriaForm />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<RecipeResults />} />
      </Routes>
    </div>
  );
}

export default App;
