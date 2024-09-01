import React, { useState } from "react";
import RemoveStyle from "./CSS/Items.module.css";

const TodoItems = ({ todo, onDelete, onToggle }) => {
  const [isChecked, setIsChecked] = useState(todo.isChecked || false);

  const handleCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle(todo.sno, newCheckedState); // Call onToggle here directly
  };

  return (
    <>
      <div className={RemoveStyle.Container}>
        <div className={RemoveStyle.checkText}>
          <div className={RemoveStyle.check}>
            <input
              type="checkbox"
              className={RemoveStyle.checkBox}
              checked={isChecked}
              onChange={handleCheck}
            />
          </div>
          <div className={RemoveStyle["text-group"]}>
            <h4 className={isChecked ? RemoveStyle.textChecked : RemoveStyle.text1}>
              {todo.title}
            </h4>
            <p className={RemoveStyle.text2}>{todo.desc}</p>
          </div>
        </div>

        <button
          className={RemoveStyle["remove-btn"]}
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

export default TodoItems;
