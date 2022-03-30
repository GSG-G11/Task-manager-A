import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faCircleCheck,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

function TaskCard({ task, handlers }) {
  const { handleChecked, handleDelete, handleUpdate } = handlers;
  const {id, title, description, time, checked, priority } = task;
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-title">
          {checked ? (
            <span className="done"> &#x2714; </span>
          ) : (
            <span className="not-done"> &#x2715;</span>
          )}
          <h3 className="title">{title}</h3>
        </div>
        <p className="card-description"> {description} </p>
        <div className="info">
          {priority === 'important' ? (
            <span className="important"> IMPORTANT </span>
          ) : (
            <span className="not-important">Not IMPORTANT</span>
          )}
          <p className="date">created at {time}</p>
        </div>
        <div className="actions">
          <button id={id} className="check" onClick={handleChecked}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </button>
          <button className="update" onClick={handleUpdate}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button id={id} className="delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
