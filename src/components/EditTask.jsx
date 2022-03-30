import React from 'react';

const EditTask = ({ title, description, time, onSubmit ,id}) => {
  return (
    <>
      <form onSubmit={onSubmit} id={id} >
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
        <button type="submit">Edit</button>
      </form>
    </>
  );
};

export default EditTask;