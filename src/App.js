import React from "react";
import "./App.css";
import AddTasksForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
class App extends React.Component {
  state = {
    title: "",
    description: "",
    time: "",
    priority: "",
    tasks: [
      {
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        date: "12/2",
        checked: true,
        priority: "important",
      },
      {
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        date: "12/2",
        checked: true,
        priority: "important",
      },
      {
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        date: "12/2",
        checked: true,
        priority: "important",
      },
      {
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        date: "12/2",
        checked: true,
        priority: "important",
      },
      {
        title: "Playing Time",
        description: "i go to play my favorites game this time go a head to play",
        date: "12/2",
        checked: true,
        priority: "important",
      },
    ],
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  addTaskToArray = (e) => {
    e.preventDefault();
    const { title, description, time, priority } = this.state;
    const newTask = { title, description, time, priority };
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, newTask],
        title: "",
        description: "",
        time: "",
        priority: "",
      };
    });
  };
  render() {
    const { title, description, time } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.addTaskToArray}>
          <AddTasksForm
            handleInputChange={this.handleInputChange}
            pushTask={this.addTaskToArray}
            title={title}
            description={description}
            time={time}
          />
        </form>
        <TaskList
          data={this.state.tasks}
          allActions={{
            handleChecked: "sa",
            handleDelete: "s",
            handleUpdate: "sa",
          }}
        />
      </div>
    );
  }
}

export default App;
