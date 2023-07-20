import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div id="circle">
        <img src="marca3.png"></img>
        <h3>
        " Por vezes, é cuidando da saúde mental que a gente cuida do resto do nosso corpo. " 🧘‍♀️
        </h3>
        <Link to="/organizar">
          <button className="btn btn-success">Agende suas tarefas</button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
