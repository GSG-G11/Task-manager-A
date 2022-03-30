import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashCan,
  faCircleCheck,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import EditTask from './EditTask';
class TaskCard extends React.Component {
  state = {
    isEdit: false,
  };

  editToggle = () => {
    this.setState((prevState) => {
      return { isEdit: !prevState.isEdit };
    });
  };

  render() {
    const { handlers, task } = this.props;
    const { handleChecked, handleDelete, handleUpdate } = handlers;
    const { id, title, description, time, checked, priority } = task;
    return (
      <div className="card">
        <div className="card-container">
          {this.state.isEdit ? (
            <EditTask title={title} description={description} time={time} id={id} onSubmit={handleUpdate} />
          ) : 
          <>
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
            <p className="date">created at {new Date(time).toLocaleString()}</p>
          </div>
          </>}
        
          <div className="actions">
            <button id={id} className="check" onClick={handleChecked}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button id={id} className="update" onClick={this.editToggle}>
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
}

export default TaskCard;
