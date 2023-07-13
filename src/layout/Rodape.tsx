import { Link } from "react-router-dom";

const Rodape = () => {
  return (
    <footer>
      <h1>Work Bem-estar</h1>
      <div id="inicio">
        <h3>Início</h3>
        <Link to="/">Noticias</Link>
        <Link to="/sentimentos">Sentir</Link>
        <Link to="/meditar">Meditar</Link>
        <Link to="/organizar">Organizar</Link>
        <Link to="/ajuda">Ajuda</Link>
      </div>
      <div id="sobre">
        <h3>Sobre-nós</h3>
        <label>Quem nós somos?</label>
        <p>Turma 211 Admin</p>
        <label>Onde estamos localizados?</label>
        <p>Senac Praça da Sé Salvador - BA</p>
      </div>
      <div id="creditos">
        <h3>Creditos</h3>
        <p>© 2023 Copyright</p>
        <p>Desenvolvedora Thayna Santana</p>
        <a target="_blank" href="https://www.github.com/thaynasantana">
          Acesse meu perfil do github
        </a>
      </div>
    </footer>
  );
};

export default Rodape;
