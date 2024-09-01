import React, { useState } from "react";
import AddStyle from "./CSS/AddTodos.module.css"; 

const AddTodos = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title && !desc) {
      alert("Title and Description should not be blank!!");
    } else if (!title) {
      alert("Title should not be blank!!");
    } else if (!desc) {
      alert("Description should not be blank!!");
    } else {
      props.addTodos(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className={AddStyle.container}> 
      <h3 className={AddStyle.heading1}>Add Todos</h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className={AddStyle.labels}>
            Title
          </label> <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={AddStyle.inputs}
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className={AddStyle.labels}>
            Description
          </label> <br />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={AddStyle.inputs}
            id="desc"
          />
        </div>
        <div className={AddStyle.btnContainer}>
          <button type="submit" className={AddStyle['add-btn']}>
            Add to list
          </button>
        </div>
      </form>
      <hr className={AddStyle.line} />
      <hr className={AddStyle.line} />
    </div>
  );
};

export default AddTodos;
