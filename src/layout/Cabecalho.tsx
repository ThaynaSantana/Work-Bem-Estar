import { Outlet, Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <>
      <header>
        <div className="Nome">
          <img
            id="logo"
            src="https://i.ibb.co/qNP3Zwq/MARCA-E-APLICA-ES-WORK-BEM-ESTAR.png"
          ></img>
        </div>
        <nav>
          <Link to="/">Noticias</Link>
          <Link to="/sentimentos">Sentir</Link>
          <Link to="/meditar">Meditar</Link>
          <Link to="/organizar">Organizar</Link>
          <Link to="/ajuda">Ajuda</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Cabecalho;
