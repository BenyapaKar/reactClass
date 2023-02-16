import "./App.css";
import AppTodo from "./AddToDo.js"
import Todo from "./Todo.js"
import React from "react";

const initTasks = [
  { id: 'todo-0', content: "Do Homework", done:false },
  { id: 'todo-1', content: "Write a report", done:true },
  { id: 'todo-2', content: "Hangout with friends", done:true },
  { id: 'todo-3', content: "New Task", done:false },
];
// function App() {

  class App extends React.Component {

    constructor(props){
      super(props);

      this.state = {taskList : initTasks}
    }

    render(){
      return (
        <div className="container">
      {/* make this h1 to be Title component */}
      <h1>Todo List</h1>

      {/* make an AddTodo component  */}
      {/* AddTodo start here */}
      <AppTodo/>
      {/* AddTodo end here */}

      <span>
      <label htmlFor="filter">Filter</label>
      <select name="filter">
        <option value="all">...</option>
        <option value="done">Done</option>
        <option value="active">Not Done Yet</option>
      </select>
      </span>

      {/* make a Todos to display tasks from the given initTasks object */}

      {/* <Todo/> */}
      
      {/* Todos end here */}
      {/* <Todo taskList={initTasks} filter="all"/> */}
      <Todo taskList={this.state.taskList} filter="all"/>

    </div>
      );
    }
  
  // return (
  //   <div className="container">
  //     {/* make this h1 to be Title component */}
  //     <h1>Todo List</h1>

  //     {/* make an AddTodo component  */}
  //     {/* AddTodo start here */}
  //     <AppTodo/>
  //     {/* AddTodo end here */}

  //     <span>
  //     <label htmlFor="filter">Filter</label>
  //     <select name="filter">
  //       <option value="all">...</option>
  //       <option value="done">Done</option>
  //       <option value="active">Not Done Yet</option>
  //     </select>
  //     </span>

  //     {/* make a Todos to display tasks from the given initTasks object */}

  //     {/* <Todo/> */}
      
  //     {/* Todos end here */}
  //     {/* <Todo taskList={initTasks} filter="all"/> */}
  //     <Todo taskList={this.state.tastList} filter="all"/>

  //   </div>
  // );
}

export default App;
