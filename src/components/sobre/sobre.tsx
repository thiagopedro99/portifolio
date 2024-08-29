import { Button, Container } from "react-bootstrap";
import "./sobre.css";
import Skills from "./skills";
import "../../utils.css";
const SobreComponent = () => {

  return (
    <section className="sobre" id="sobre">
      <Container>
        <div className="row">
          <div className="col-12">
            <h2 className="section-header">Sobre</h2>
            <p className="section-text">Aqui você encontrará mais informações sobre mim, o que faço minhas habilidades atuais e as tecnologias que utilizo.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <div className="  sobre__info--item ">
              <h3 className="">Venha me conhecer!</h3>
              <div className="col-12 mt-5 sobre__info--item__text">
                <p>Sou mineiro, apaixonado por café, música e pelos desafios que a tecnologia traz. Estou sempre em constante aprendizado e evolução nessa área. Atualmente, estou cursando tecnólogo em Análise e Desenvolvimento de Sistemas na UniCesumar. </p>
                <p>Fui um dos 1000 talentos selecionados pelo programa Potência Tech, uma parceria entre a Cubos Academy e o iFood, onde me especializei em <strong> Desenvolvimento de Software Back-End</strong> , adquirindo experiência em tecnologias como <strong>JavaScript, Node.js, Express, SQL, PostgreSQL e Git </strong> </p>
                <p>Hoje, trabalho como estagiário de <strong> Front-End na Stoque</strong>, onde utilizo tecnologias como <strong>HTML, CSS, SCSS, JavaScript, TypeScript, Angular e jQuery. </strong>
                  Tenho interesse em trabalhar como  <strong>Desenvolvedor Front-End, Back-End ou FullStack.</strong></p>
              </div>
              <div className="sobre__info--item__text">
                <Button className="projects-btn btn--med">
                  CONTATO
                </Button>
              </div>

            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="skills sobre__info--item ">
              <h3 className="">Minhas Habilidades</h3>
              <div className="col-12 sobre__info--item__text margin-top-10">
                <p className="">Essas são as tecnologias que utilizo no meu dia-a-dia e o que gosto de estudar</p>
              </div>
              <Skills />
            </div>
          </div>
        </div>
      </Container>
    </section>

  );
};

export default SobreComponent;