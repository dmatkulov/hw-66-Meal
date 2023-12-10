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


export interface MealTotal {
  meals: Meal[]
}

export interface Meals extends MealTotal{
  totalCalories: number;
}