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
                  Feito
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
