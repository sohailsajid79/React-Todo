import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos, setTodos, SetEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    SetEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" keys={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-buton"
              onClick={() => handleComplete(todo)}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button
              className="button-edit task-buton"
              onClick={() => handleEdit(todo)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className="button-delete task-buton"
              onClick={(e) => handleDelete(todo)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
