import React, {useCallback, useEffect, useState} from 'react';
import CardItem from "../../components/CardItem/CardItem";
import {Meals, ApiMeals, Meal} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import TotalCalories from "../../components/TotalCalories/TotalCalories";

const initialState: Meals = {
  meals: [],
  totalCalories: 0,
};

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<Meals>(initialState);
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
        
        setMeals({
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
    const deletedItem = meals.meals.filter((meal) => {
      return meal.id !== id;
    });
    
    const totalCalories = deletedItem.reduce((sum, meal) => {
      return sum + meal.calories;
    }, 0);
    
    setMeals({
      meals: deletedItem,
      totalCalories,
    });
    
    await fetchMeals();
  };
  
  return (
    <div>
      <TotalCalories totalKcal={meals.totalCalories}/>
      {loading ? <Spinner/> : (
        meals.meals.map((meal) => (
          <CardItem
            key={meal.id}
            meal={meal}
            onDelete={deleteMeal}
          />
        ))
      )}
    </div>
  );
};

export default Meals;