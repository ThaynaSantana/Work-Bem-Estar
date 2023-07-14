import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div id="circle">
        <h3>
          AVANCE COM SUA<br></br> PRODUTIVIDADE<br></br> COM AS<br></br>{" "}
          FERRAMENTAS<br></br> CERTAS
        </h3>
        <Link to="/organizar">
          <button className="btn btn-primary">Agende suas tarefas</button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
