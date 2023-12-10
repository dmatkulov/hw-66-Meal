import React from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
  totalKcal: number;
}
const TotalCalories: React.FC<Props> = ({totalKcal}) => {
  const navigate = useNavigate();
  return (
    <div>
      Total calories: {totalKcal} Kcal
      <button onClick={() => navigate('/add-meal')}>Add new meal</button>
    </div>
  );
};

export default TotalCalories;