import React from "react";
import TaskCard from "./TaskCard";
function TaskList({ data, allActions }) {
  return (
    <div className="container">
      {data.map((el) => (
        <TaskCard key={el.id} task={el} handlers={allActions} />
      ))}
    </div>
  );
}

export default TaskList;

