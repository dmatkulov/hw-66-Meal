import React from 'react';
import {Meal} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  meal: Meal;
  onDelete: (id: string) => void;
}
const CardItem: React.FC <Props>= ({meal, onDelete}) => {
  return (
    <div className="card mb-3">
      <h5 className="card-header">{meal.time}</h5>
      <div className="row card-body d-flex justify-content-between">
        <p className="card-text col-auto mb-0">{meal.description}</p>
        <div className="d-flex col-5 align-items-center justify-content-between">
          <p className="mb-0 rounded-pill bg-light px-3 py-2">{meal.calories} kcal</p>
          <div className="d-flex gap-2">
            <Link
              to={'/edit-meal/' + meal.id}
              className="btn btn-success"
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(meal.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;