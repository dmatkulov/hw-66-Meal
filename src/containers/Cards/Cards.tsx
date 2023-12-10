import React, {useCallback, useEffect, useState} from 'react';
import CardItem from "../../components/CardItem/CardItem";
import {Meal, MealList} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import TotalCalories from "../../components/TotalCalories/TotalCalories";

const Cards: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalKcal, setTotalKcal] = useState(0);
  
  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      
      const mealsResponse = await axiosApi.get<MealList | null>('/meals.json');
      const mealsData = mealsResponse.data;
      
      if (!mealsData) {
        return setMeals([]);
      } else {
        const newMeals = Object.keys(mealsData).map((id) => {
          const meal = mealsData[id];
          return {
            ...meal,
            id
          };
        });
        const totalKcal = newMeals.reduce((sum, meal) => {
          return sum += meal.calories;
        }, 0);
        setTotalKcal(totalKcal);
        setMeals(newMeals);
      }
      
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);
  
  return (
    <div>
      <TotalCalories totalKcal={totalKcal}/>
      {loading ? <Spinner/> : (
        meals.map((meal) => (
          <CardItem key={meal.id} meal={meal}/>
        ))
      )}
    </div>
  );
};

export default Cards;