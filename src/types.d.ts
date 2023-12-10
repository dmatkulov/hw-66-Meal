export interface Meal {
  id: string;
  time: string;
  description: string;
  calories: number;
}

export type ApiMeal   = Omit<Meal, 'id'>

export interface MealList {
  [id: string]: ApiMeal;
}