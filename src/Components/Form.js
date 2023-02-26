import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  description,
  setDescription,
  todos,
  setTodos,
  editTodo,
  SetEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    SetEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setDescription(editTodo.title);
    } else {
      setDescription("");
    }
  }, [setDescription, editTodo]);

  const onInputFieldChange = (e) => {
    setDescription(e.target.value);
  };

  const formSubmition = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { id: uuidv4(), title: description, completed: false },
      ]);
      setDescription("");
    } else {
      updateTodo(description, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={formSubmition}>
      <input
        type="text"
        placeholder="What needs done..."
        className="task-input"
        value={description}
        required
        onChange={onInputFieldChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "+" : "Add"}
      </button>
    </form>
  );
};

export default Form;
