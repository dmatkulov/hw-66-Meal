import React, {useCallback, useEffect, useState} from 'react';
import CardItem from "../../components/CardItem/CardItem";
import {MealList, ApiMeals, Meal} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import TotalCalories from "../../components/TotalCalories/TotalCalories";

const initialState: MealList = {
  meals: [],
  totalCalories: 0,
};
const Meals: React.FC = () => {
  const [mealList, setMealList] = useState<MealList>(initialState);
  const [loading, setLoading] = useState(false);
  
  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const mealsResponse = await axiosApi.get<ApiMeals | null>('/meals.json');
      const mealsData = mealsResponse.data;
      
      if (!mealsData) {
        return;
      } else {
        const newMeals: Meal[] = Object.keys(mealsData).map((id) => ({
          ...mealsData[id],
          id,
        }));
        
        const totalCalories = newMeals.reduce((sum, meal) => sum + meal.calories, 0);
        
        setMealList({
          meals: newMeals,
          totalCalories,
        });
      }
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);
  
  const deleteMeal = async (id: string) => {
    setLoading(true);
    await axiosApi.delete('/meals/' + id + '.json');

    const deletedItem = mealList.meals.filter((meal) => {
      return meal.id !== id;
    });

    const totalCalories = deletedItem.reduce((sum, meal) => {
      return sum + meal.calories;
    }, 0);

    setMealList({
      meals: deletedItem,
      totalCalories,
    });

    await fetchMeals();
  };
  
  return (
    <div>
      <TotalCalories totalKcal={mealList.totalCalories}/>
      {loading ? <Spinner/> : (
        <CardItem
          meals={mealList.meals}
          onDelete={deleteMeal}
        />
      )}
    </div>
  );
};

export default Meals;