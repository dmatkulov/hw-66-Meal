import React, {useCallback, useEffect, useState} from 'react';
import MealForm from "../../components/MealForm/MealForm";
import {useParams} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const EditMealForm: React.FC = () => {
  const {mealId} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  
  const fetchOneMeal = useCallback(async () => {
    try {
      const mealResponse = await axiosApi.get<ApiMeal>('/meals/' + mealId + '.json');
      setMeal(mealResponse.data);
    } finally {
      setLoading(false);
    }
  }, [mealId]);
  
  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);
  
  const onEditMeal = async (meal: ApiMeal) => {
    try {
      setUpdating(true);
      await axiosApi.put('/meals/' + mealId + '.json', meal);
      await fetchOneMeal();
    } finally {
      setUpdating(false);
    }
  };
  
  const existingMeal = meal ? ({
    ...meal,
    calories: meal.calories.toString()
  }) : undefined;
  
  return (
    <div className="row">
      <div className="col">
        {loading && <Spinner/>}
        {meal && (
          <MealForm
            onSubmit={onEditMeal}
            isLoading={updating}
            existingMeal={existingMeal}
            isEdit
          />
        )}
      </div>
    </div>
  );
};

export default EditMealForm;