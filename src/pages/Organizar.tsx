import React, { useState, useEffect } from "react";

interface ScheduleItem {
  id: number;
  time: string;
  task: string;
}

const Organizar: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [newTime, setNewTime] = useState("");
  const [newTask, setNewTask] = useState("");
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      setSchedule(JSON.parse(savedSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const addScheduleItem = () => {
    if (newTime && newTask && !validationError) {
      const newItem: ScheduleItem = {
        id: Date.now(),
        time: newTime,
        task: newTask,
      };
      setSchedule((prevSchedule) => [...prevSchedule, newItem]);
      setNewTime("");
      setNewTask("");
    }
  };

  const deleteScheduleItem = (itemId: number) => {
    setSchedule((prevSchedule) =>
      prevSchedule.filter((item) => item.id !== itemId)
    );
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
    <div className="Cronograma">
      <h2>Cronograma</h2>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Tarefa</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id}>
              <td>{item.time}</td>
              <td>{item.task}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => deleteScheduleItem(item.id)}
                >
                  Feito
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Adicionar Tarefa</h3>
        <div className="mb-3">
          <label className="form-label">Hora:</label>
          <input
            type="text"
            className="form-control"
            value={newTime}
            onChange={handleTimeChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tarefa:</label>
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={handleTaskChange}
          />
        </div>
        <button className="btn btn-primary" onClick={addScheduleItem}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Organizar;
