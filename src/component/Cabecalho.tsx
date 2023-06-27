import { Outlet, Link } from "react-router-dom";

const Cabecalho = () => {
  return(
      <>
      <header>
          <div className="Nome">
  				<img id="logo" src="https://cdn-icons-png.flaticon.com/512/2770/2770932.png"></img>
  				<h1>Site do bem estar</h1>
  			</div>
  			<nav>
  				<Link to="/">Novidades</Link>
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