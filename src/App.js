import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [description, setDescription] = useState(""); // input
  const [todos, setTodos] = useState(initialState);
  const [editTodo, SetEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            description={description}
            setDescription={setDescription}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            SetEditTodo={SetEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            SetEditTodo={SetEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
