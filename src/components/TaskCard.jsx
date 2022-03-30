import React from "react";

function TaskCard({ task, handlers }) {
  const {  handleChecked, handleDelete, handleUpdate } = handlers;
  const { title, description, date, checked, priority } = task;
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
          {priority === "important" ? (
            <span className="important"> IMPORTANT </span>
          ) : (
            <span className="not-important">Not IMPORTANT</span>
          )}
          <p className="date">created at {date}</p>
        </div>
        <div className="actions">
            <button className="check"  onClick={handleChecked} >de</button>
            <button className="update" onClick={handleUpdate} >do</button>
            <button className="delete" onClick={handleDelete} >ap</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
