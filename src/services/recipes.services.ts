import axios from "axios";
import { config } from "../config";
import { Recipe, Recipes } from "../types";

export function fetchRandomRecipes() {
	return axios
		.get<Recipes[]>(
			`https://api.spoonacular.com/recipes/complexSearch?sort=random&apiKey=${config.apiKey}`
		)
		.then((response) => response.data);
}

export function fetchVegetarianRecipes() {
	return axios
		.get(
			`https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&apiKey=${config.apiKey}`
		)
		.then((response) => response.data);
}

export function fetchRecipeById(id: string) {
	return axios
		.get<Recipe>(
			`https://api.spoonacular.com/recipes/645776/information?apiKey=${config.apiKey}`
		)
		.then((response) => response.data);
}
