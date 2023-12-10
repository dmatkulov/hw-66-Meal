import React, {useCallback, useEffect, useState} from 'react';
import CardItem from "../../components/CardItem/CardItem";
import {Meal, MealList} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Cards: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  
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
      {loading ? <Spinner/> : (
        meals.map((meal) => (
          <CardItem key={meal.id} meal={meal}/>
        ))
      )}
    </div>
  );
};

export default Cards;