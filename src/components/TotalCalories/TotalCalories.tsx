import React from 'react';
import {useNavigate} from "react-router-dom";

const TotalCalories: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      Total calories: 900kcal
      <button onClick={() => navigate('/add-meal')}>Add new meal</button>
    </div>
  );
};

export default TotalCalories;