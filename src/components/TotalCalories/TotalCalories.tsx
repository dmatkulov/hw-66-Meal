import React from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
  totalKcal: number;
}
const TotalCalories: React.FC<Props> = ({totalKcal}) => {
  const navigate = useNavigate();
  return (
    <div className="border border-primary rounded py-4 px-3 mb-5 d-flex justify-content-between align-items-center">
      <div className="text-secondary">
        Total calories: <strong className="text-primary">{totalKcal} Kcal</strong>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate('/add-meal')}
      >
        Add new meal
      </button>
    </div>
  );
};

export default TotalCalories;