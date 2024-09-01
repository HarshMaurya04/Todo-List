import React from "react";
import TodoItems from "./TodoItems";
import TodoStyle from "./CSS/Todos.module.css";

const Todos = (props) => {
  return (
    <div className={TodoStyle.container}>
      <h3 className={TodoStyle.heading2}>List of Todos</h3>

      {props.todos.length === 0 ? (
        <div className={TodoStyle.noTodo}>No todos to Display!!</div>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItems
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
              onToggle={props.onToggle}
            />
          );
        })
      )}
    </div>
  );
};

export default Todos;
