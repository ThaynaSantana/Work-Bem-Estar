import Profile from '../component/Profile'
import Rodape from '../layout/Rodape'

const Ajuda = () => {
  return (
    <>
      <Profile/>
      <p className="ajuda-p">
        Se você está passando por momentos difíceis e precisa de apoio emocional ou prevenção do suicídio, saiba que você não está sozinho. O Centro de Valorização da Vida CVV está aqui para ajudar.<br></br><br></br>

        O CVV é uma organização que oferece suporte voluntário e gratuito a todas as pessoas que desejam e precisam conversar. Eles atendem 24 horas por dia, todos os dias da semana, por telefone, email e chat, mantendo total sigilo.<br></br><br></br>

      Seja qual for o motivo pelo qual você está se sentindo assim, os voluntários do CVV estão prontos para ouvir, acolher e oferecer apoio. Não hesite em entrar em contato com eles se precisar. Lembre-se de que buscar ajuda é um ato corajoso e pode fazer toda a diferença.<br></br><br></br>

      Para entrar em contato com o CVV:<br></br><br></br>
      <ul>
        <li>Ligue para <a href="tel:+55188">188</a> ligação gratuita e sigilosa</li>
        <li>Envie um email para cvv@cvv.org.br</li>
        <li>Acesse o chat no site <a target='_blank' href="https://www.cvv.org.br">AQUI</a></li>
      </ul>
      <br></br>
      Não hesite em buscar ajuda quando precisar. O CVV está aqui para te apoiar.
      </p>
      <Rodape />
    </>
  )
}

export default Ajuda