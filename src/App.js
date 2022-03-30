import React from "react";
import "./App.css";
import AddTasksForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
class App extends React.Component {
  state = {
    id:1,
    tasks: [
      {
        id:555,
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        time: "12/2s33",
        checked: true,
        priority: "important",
      }
    ],
  };


  addTaskToArray = (e) => {
    e.preventDefault();
    const {elements} = e.target;
    const title = elements[0].value
    const description = elements[1].value
    const time = elements[2].value
    const priority = elements[3].value
    const {id } = this.state;
    const checked = false;
    const newTask = {id, title, description,checked, time, priority };
    this.setState((prevState) => {
      return {
        id: prevState.id + 1,
        tasks: [...prevState.tasks, newTask]
      };
    });
  };
  handleDelete = ({target:{id}})=>{
    
    this.setState((prevState) => {
      const filterd =  prevState.tasks.filter((ele) => ele.id != id)
      console.log(filterd);
      return {
        tasks: filterd
      }
    });
  }
  handleChecked = ({target:{id}})=>{
    console.log(id);
  }
  render() {
    // const { title, description, time } = this.state;
    return (
      <div className="App">
        <div></div>
        <div className="form-container">
          <form onSubmit={this.addTaskToArray}>
            <AddTasksForm />
          </form>
          <div className="time-card"></div>
        </div>
    
        <TaskList
          data={this.state.tasks}
          allActions={{
            handleChecked: this.handleChecked,
            handleDelete: this.handleDelete,
            handleUpdate: this.handleDelete,
          }}
        />
      </div>
    );
  }
}

export default App;
