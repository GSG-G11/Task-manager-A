import React from 'react';

const AddTasksForm = ({
  handleInputChange,
  title,
  description,
  time,
}) => {
  return (
    <>
      <label>Title : </label>
      <input
        value={title}
        name="title"
        type="text"
        onChange={handleInputChange}
      />
      <label>Description : </label>
      <textarea
        value={description}
        name="description"
        type="text"
        onChange={handleInputChange}
      />
      <label>time : </label>
      <input
        value={time}
        name="time"
        type="datetime-local"
        onChange={handleInputChange}
      />
      <label>priority : </label>
      <select name="priority" onChange={handleInputChange}>
        <option value="important">Important</option>
        <option value="not-important">not-important</option>
      </select>
      <button type='submit'>Add Task</button>
    </>
  );
};

export default AddTasksForm;
