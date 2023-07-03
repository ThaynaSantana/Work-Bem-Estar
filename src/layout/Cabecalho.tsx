import { Outlet, Link } from "react-router-dom";

const Cabecalho = () => {
  return(
      <>
      <header>
          <div className="Nome">
  				<img id="logo" src="marca3.png"></img>
  			</div>
  			<nav>
  				<Link to="/">Noticias</Link>
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