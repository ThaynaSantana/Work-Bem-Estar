import { Outlet, Link } from "react-router-dom";

const Cabecalho = () => {
  return(
      <>
      <header>
          <div className="Nome">
  				<img id="logo" src="marca.png"></img>
  				<h1>Work Bem-estar</h1>
  			</div>
  			<nav>
  				<Link to="/">Novidades</Link>
				<Link to="/sentimentos">Sentir</Link>
  				<Link to="/meditar">Meditar</Link>
  				<Link to="/organizar">Organizar</Link>
  			  <Link to="/ajuda">Ajuda!</Link>
  			</nav>
  		</header>
      <Outlet />
    </>
  );
};

export default Cabecalho;