import axios from "axios";
import { config } from "../config";

export function fetchAllRecipes() {
  return axios
    .get(`https://api.spoonacular.com/recipes/search?apiKey=${config.apiKey}`)
    .then((response) => response);
}

// https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true
