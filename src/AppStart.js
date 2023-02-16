import "./App.css";
import AppTodo from "./AddToDo.js"
function App() {
  const initTasks = [
    { id: 'todo-0', content: "Do Homework", done:false },
    { id: 'todo-1', content: "Write a report", done:true },
    { id: 'todo-2', content: "Hangout with friends", done:true },
    { id: 'todo-3', content: "New Task", done:false },
  ];

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
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label htmlFor="todo-0">Do Homework</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label htmlFor="todo-0">Write a report</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item">
          <div className="list-item">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label htmlFor="todo-0">Hang out with friends</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
      {/* Todos end here */}

    </div>
  );
}
export default App;
