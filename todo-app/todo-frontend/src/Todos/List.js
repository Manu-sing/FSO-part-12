import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
  );
};

export default TodoList;
