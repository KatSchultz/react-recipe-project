export interface Recipes {
  results: Recipe[];
}

export interface Recipe {
  id: number;
  title: string;
  vegetarian: boolean;
}
