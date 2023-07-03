import React, { useEffect, useState, ChangeEvent } from 'react';

interface TodoItem {
  id: number;
  time: string;
  task: string;
}

const AgendarTarefa: React.FC = () => {
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
      setTodos(prevTodos => [...prevTodos, newItem]);
      setNewTime("");
      setNewTask("");
    }
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const timeValue = e.target.value;
    const formattedTime = formatTime(timeValue);
    setNewTime(formattedTime);
    setValidationError(!validateTime(formattedTime));
  };

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <h2>Agendar Tarefas</h2>
      {validationError && <p className="error-message">Hora inválida</p>}
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
      <button className="btn btn-primary" onClick={addTodoItem}>
        Adicionar
      </button>
    </div>
  );
};

export default AgendarTarefa;
