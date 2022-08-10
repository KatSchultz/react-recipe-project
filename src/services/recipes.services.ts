import axios from "axios";


export function fetchAllRecipes() {
    return axios
        .get('https://api.spoonacular.com/recipes/random')
        .then(response => response)
}