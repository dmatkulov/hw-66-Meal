import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";

const AddMealForm: React.FC = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  
  const addNewMeal = async (meal: ApiMeal) => {
    try {
      setCreating(true);
      await axiosApi.post('/meals.json', meal);
      navigate('/');
    } finally {
      setCreating(false);
    }
  };
  
  return (
    <div className="row">
      <div className="col">
        <MealForm
          onSubmit={addNewMeal}
          isLoading={creating}
        />
      </div>
    </div>
  );
};

export default AddMealForm;