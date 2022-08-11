import React, { useState } from "react";
import { Recipe } from "../types";

export default function SearchCriteriaForm() {
	const [recipes, setRecipes] = useState<Recipe[]>([{ vegetarian: false }]);
	const [recipe, setRecipe] = useState<Recipe>({ vegetarian: false });
	const [active, setActive] = useState(false);

	function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(active);
	}

	return (
		<div>
			<form>
				<label htmlFor="vegetarian">Vegetarian</label>
				<input
					type="checkbox"
					name="vegetarian"
					id="vegetarian"
					checked={active}
					onChange={(e) => setActive(e.target.checked)}
				/>
				<button type="submit">Enter</button>
			</form>
		</div>
	);
}
