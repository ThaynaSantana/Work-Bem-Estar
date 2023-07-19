import React, { useState, useEffect } from "react";
import EmotionMenu from "../component/EmotionMenu";
import Profile from "../component/Profile";
import ListaTodo from "../component/ListaTodo";
import EmotionCalendario from "../component/EmotionCalendario";

interface TodoItem {
  id: number;
  time: string;
  task: string;
}

const Status: React.FC = () => {
  const [currentEmotion, setCurrentEmotion] = useState<string>("");

  const handleEmotionSelect = (emotion: string) => {
    setCurrentEmotion(emotion);
  };

  // Lembretes
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
    <div className="status-page">
      <h1 id="title-status-page">Como você está se sentindo hoje?</h1>
      <EmotionMenu onSelectEmotion={handleEmotionSelect} />
      <Profile currentEmotion={currentEmotion} />
      <h1>Calendario de suas Emoções</h1>
      <EmotionCalendario />
  
    </div>
  );
};

export default Status;
