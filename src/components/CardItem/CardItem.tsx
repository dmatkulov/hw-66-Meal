import React from 'react';
import {Meal} from "../../types";

interface Props {
  meal: Meal;
}
const CardItem: React.FC <Props>= ({meal}) => {
  return (
    <div className="card">
      <h5 className="card-header">{meal.time}</h5>
      <div className="row card-body d-flex justify-content-between">
        <p className="card-text col-auto mb-0">{meal.description}</p>
        <div className="d-flex col-5 align-items-center justify-content-between">
          <p className="mb-0">{meal.calories} Calories</p>
          <div className="d-flex gap-2">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;