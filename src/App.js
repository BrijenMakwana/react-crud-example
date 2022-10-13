import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input) {
      setTodoList([
        ...todoList,
        {
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          title: input,
          isChecked: false,
        },
      ]);
      console.log(todoList);
      setInput("");
    }
  };

  const deleteTask = (taskName) => {
    setTodoList(
      todoList.filter((currentTask) => currentTask.id !== taskName.id)
    );
  };

  const updateTask = (taskname) => {
    setTodoList(
      todoList.map((currentTask) => {
        if (currentTask.id === taskname.id) {
          return {
            ...currentTask,
            isChecked: !currentTask.isChecked,
          };
        } else {
          return currentTask;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          className="input"
          onChange={handleInput}
          placeholder="add task"
          value={input}
        />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map((todo, index) => (
          <div key={todo.id} className="todos">
            <span
              className="todo"
              style={{
                textDecoration: todo.isChecked ? "line-through" : "none",
                backgroundColor: todo.isChecked ? "chartreuse" : "brown",
                color: todo.isChecked ? "#000" : "#fff",
              }}
            >
              {todo.title}
            </span>

            <button className="btnDelete" onClick={() => updateTask(todo)}>
              Done
            </button>
            <button className="btnUpdate" onClick={() => deleteTask(todo)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
