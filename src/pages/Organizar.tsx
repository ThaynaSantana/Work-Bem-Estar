import React, { useState, useEffect } from "react";
import Calendar from "../component/Calendar";
import ListaTodo from "../component/ListaTodo";
import Profile from "../component/Profile";

interface TodoItem {
  id: number;
  time: string;
  task: string;
}

const Organizar: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTime, setNewTime] = useState("");
  const [newTask, setNewTask] = useState("");
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoItem = () => {
    if (newTime && newTask && !validationError) {
      const newItem: TodoItem = {
        id: Date.now(),
        time: newTime,
        task: newTask,
      };
      setTodos((prevTodos) => [...prevTodos, newItem]);
      setNewTime("");
      setNewTask("");
    }
  };

  const deleteTodoItem = (itemId: number) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== itemId));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timeValue = e.target.value;
    const formattedTime = formatTime(timeValue);
    setNewTime(formattedTime);
    setValidationError(!validateTime(formattedTime));
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const formatTime = (time: string) => {
    if (time.length <= 5) {
      const formattedTime = time.replace(/[^0-9:]/g, "");
      if (formattedTime.length <= 2) {
        return formattedTime;
      } else if (formattedTime.length <= 4) {
        return `${formattedTime.slice(0, 2)}:${formattedTime.slice(2)}`;
      } else if (formattedTime.length <= 5) {
        return `${formattedTime.slice(0, 2)}:${formattedTime.slice(3, 5)}`;
      }
    }
    return time;
  };

  const validateTime = (time: string) => {
    const regex = /^[0-9]{1,2}:[0-9]{2}$/;
    return regex.test(time);
  };

  return (
    <>
      <Profile />
      <div className="organizar-page">
        <div className="calendar-tarefas-container">
          <Calendar />
          <div className="lista-container">
            <ListaTodo todos={todos} deleteTodoItem={deleteTodoItem} />
          </div>
        </div>
        <div className="tarefas">
          <div className="agendar-container">
            <h2>Agendar Tarefas</h2>
            {validationError && (
              <p className="text-danger error-message">Hora inválida</p>
            )}
            <div className="input-container">
              <label htmlFor="timeInput">Hora:</label>
              <input
                type="text"
                id="timeInput"
                className="form-control"
                value={newTime}
                onChange={handleTimeChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="taskInput">Tarefa:</label>
              <input
                type="text"
                id="taskInput"
                className="form-control"
                value={newTask}
                onChange={handleTaskChange}
              />
            </div>
            <button
              className="btn btn-outline-primary btn-lg btn-block"
              onClick={addTodoItem}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organizar;
