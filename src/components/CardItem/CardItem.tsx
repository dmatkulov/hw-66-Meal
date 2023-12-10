import React from 'react';
import {Meal} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  meals: Meal[];
  onDelete: (id: string) => void;
}

const CardItem: React.FC<Props> = ({meals, onDelete}) => {
  const getCurrentDate = (currentDate: string ) => {
    const date = new Date(currentDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `created at ${day}.${month}.${year}`;
  };
  
  return (
    <>
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div className="card mb-3" key={meal.id}>
            <div className="card-header d-flex justify-content-between">
              <h5>{meal.time}</h5>
              <span>{getCurrentDate(meal.date)}</span>
            </div>
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
        ))
      ) : (
        <p className="text-center text-secondary fs-4">No items found</p>
      )}
    </>
  );
};

export default CardItem;