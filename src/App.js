import React from 'react';
import './App.css';
import AddTasksForm from './components/AddTaskForm';
import Navbar from './components/nav/Navbar';
import TaskList from './components/TaskList';

class App extends React.Component {
  state = {
    id: 1,
    time: new Date().toLocaleString(),
    tasks: [
      {
        id: 555,
        title: 'Playing Time',
        description:
          'i go to play my favorites game this time go a head to play',
        time: '2022-03-02T23:15',
        checked: true,
        priority: 'important',
      },
    ],
    added: false,
  };

  addTaskToArray = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const title = elements[0].value;
    const description = elements[1].value;
    const time = elements[2].value;
    const priority = elements[3].value;
    const { id } = this.state;
    const checked = false;
    const newTask = { id, title, description, checked, time, priority };
    this.setState((prevState) => {
      return {
        id: prevState.id + 1,
        tasks: [...prevState.tasks, newTask],
        added: false,
      };
    });
  };
  handleDelete = ({ target: { id } }) => {
    this.setState((prevState) => {
      const filterd = prevState.tasks.filter((ele) => ele.id != id);
      console.log(filterd);
      return {
        tasks: filterd,
      };
    });
  };
  handleUpdates = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const { elements } = e.target;
    const title = elements[0].value;
    const description = elements[1].value;
    const time = elements[2].value;
    const priority = elements[3].value;
    const checked = false;
    const task = { id, title, description, checked, time, priority };
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.map((ele) => {
          if (ele.id == id) {
            return task;
          } else {
            return ele;
          }
        }),
      };
    });
  };

  handleChecked = ({ target: { id } }) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.map((ele) => {
          if (+ele.id === +id) {
            console.log(id);
            return { ...ele, checked: !ele.checked };
          } else {
            return ele;
          }
        }),
      };
    });
  };

  handleAddBtn = () => {
    this.setState((prevState) => {
      return { added: !prevState.added };
    });
  };
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Navbar toggleAdd={this.handleAddBtn} added={this.state.added} />
        <div class='head'>
          <h1>Manage Your Task</h1>
          <p>Plan For What You Are Going To Do Today</p>
          <p> {this.state.time} </p>
        </div>
        {this.state.added && (
          <div className='form-container'>
            <AddTasksForm onSubmit={this.addTaskToArray} />
          </div>
        )}
        <TaskList
          data={this.state.tasks}
          allActions={{
            handleChecked: this.handleChecked,
            handleDelete: this.handleDelete,
            handleUpdate: this.handleUpdates,
          }}
        />
      </div>
    );
  }
}

export default App;
