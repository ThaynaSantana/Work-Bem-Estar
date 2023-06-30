import React from "react";

const Calendar: React.FC = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const monthLength = daysInMonth(today.getMonth(), today.getFullYear());
    const startDay = firstDayOfMonth(today.getMonth(), today.getFullYear());

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const calendarDays: JSX.Element[] = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    for (let day = 1; day <= monthLength; day++) {
      const isToday = isCurrentDate(today, day);
      const dayClassName = isToday ? "calendar-day today" : "calendar-day";

      calendarDays.push(
        <td key={day} className={dayClassName}>
          {isToday && <span className="circle"></span>}
          {day}
        </td>
      );
    }

    const totalCells = Math.ceil((startDay + monthLength) / 7) * 7;

    while (calendarDays.length < totalCells) {
      calendarDays.push(<td key={`empty-${calendarDays.length}`} className="empty-cell"></td>);
    }

    const weeks: JSX.Element[][] = [];
    let week: JSX.Element[] = [];

    calendarDays.forEach((day, index) => {
      week.push(day);

      if ((index + 1) % 7 === 0) {
        weeks.push(week);
        week = [];
      }
    });

    return (
      <table className="table table-bordered calendar">
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={`week-${index}`}>{week}</tr>
          ))}
        </tbody>
      </table>
    );
  };

  const isCurrentDate = (date: Date, day: number) => {
    const currentDate = new Date();
    return (
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth() &&
      day === currentDate.getDate()
    );
  };

  return (
    <div className="calendar-container">
      <h2>{`${currentMonth} ${currentYear}`}</h2>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
