import React, { useState } from "react";
import { Recipe } from "../types";

export default function SearchCriteriaForm() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    { title: "", vegetarian: false },
  ]);
  const [recipe, setRecipe] = useState<Recipe>({
    title: "",
    vegetarian: false,
  });
  const [active, setActive] = useState(false);

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setActive(e.target.checked);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vegetarian">Vegetarian</label>
        <input
          type="checkbox"
          name="vegetarian"
          id="vegetarian"
          checked={active}
          onChange={handleCheckboxChange}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
