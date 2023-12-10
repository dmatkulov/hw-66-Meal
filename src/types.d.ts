export interface Meal {
  id: string;
  time: string;
  description: string;
  calories: number;
}

export interface MealMutation {
  time: string;
  description: string;
  calories: string;
}

export type ApiMeal = Omit<Meal, 'id'>

export interface ApiMeals {
  [id: string]: ApiMeal;
}

export interface MealList {
  meals: Meal[]
  totalCalories: number;
}