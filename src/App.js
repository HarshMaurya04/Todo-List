import React, { useEffect, useState, useCallback } from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import About from "./Components/About";
import Footer from "./Components/Footer";
import AddTodos from "./Components/AddTodos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodos = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      isChecked: false,
    };
    setTodos([...todos, myTodo]);
  };

  const onToggle = useCallback(
    (sno, isChecked) => {
      const updatedTodos = todos.map((todo) =>
        todo.sno === sno ? { ...todo, isChecked: isChecked } : todo
      );
      setTodos(updatedTodos);
    },
    [todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-container">
      <Router>
        <Header title="TodoList" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodos addTodos={addTodos} />
                <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App; 