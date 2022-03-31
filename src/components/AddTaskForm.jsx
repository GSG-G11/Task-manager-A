import React from 'react';

const AddTasksForm = ({ title, description, time, onSubmit }) => {
  return (
    <>
    <h1 className='form-comp'>Add Thing To Do</h1>
      <form onSubmit={onSubmit}>
        <label>Title : </label>
        <input value={title} name="title" type="text" />
        <label>Description : </label>
        <textarea value={description} name="description" type="text" />
        <label>time : </label>
        <input value={time} name="time" type="datetime-local" />
        <label>priority : </label>
        <select name="priority">
          <option value="important">Important</option>
          <option value="not-important">not-important</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTasksForm;
