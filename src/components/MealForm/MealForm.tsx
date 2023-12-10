import React, {useState} from 'react';
import {ApiMeal, MealMutation} from "../../types";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const initialState: MealMutation = {
  time: '',
  description: '',
  calories: '',
};

interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: MealMutation,
  isEdit?: boolean;
  isLoading?: boolean
}

const MealForm: React.FC<Props> = ({onSubmit, existingMeal = initialState, isEdit = false, isLoading = false}) => {
  const [meal, setMeal] = useState<MealMutation>(existingMeal);
  
  const changeMeal = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    
    setMeal((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (isLoading) {
      return;
    }
    
    onSubmit({
      ...meal,
      calories: parseFloat(meal.calories)
    });
  };
  
  return (
    <form onSubmit={onFormSubmit}>
      <h2>{isEdit ? 'Edit current meal' : 'Add new meal'}</h2>
      <div className="form-group">
        <label htmlFor="time">Select time</label>
        <select
          name="time"
          id="time"
          className="form-select" aria-label="Default select example"
          onChange={changeMeal}
          value={meal.time}
        >
          <option value="breakfast">Breakfast</option>
          <option value="snack">Snack</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Meal description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          onChange={changeMeal}
          value={meal.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          className="form-control"
          onChange={changeMeal}
          value={meal.calories}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default MealForm;