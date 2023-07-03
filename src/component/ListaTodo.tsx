import React from "react";


interface TodoItem {
  id: number;
  time: string;
  task: string;
}

interface ListaTodoProps {
  todos: TodoItem[];
  deleteTodoItem: (itemId: number) => void;
}

const ListaTodo: React.FC<ListaTodoProps> = ({ todos, deleteTodoItem }) => {

  return (
    <div className="table-lista table-responsive">
      <table className="table table-hover table-bordered">
        <thead className="thead-dark table-danger">
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Tarefa</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.time}</td>
              <td>{item.task}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => deleteTodoItem(item.id)}
                >
                  <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Feito
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTodo;
