import React from "react";
import { Recipe } from "../types";

interface Props {
  recipe: Recipe;
}

export default function RecipeDisplay({ recipe }: Props) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.vegetarian && <p>Vegetarian</p>}
    </div>
  );
}
