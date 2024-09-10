
import "../../utils.css";
import { Container, Button } from 'react-bootstrap';
import "./projetos.css";
import "../../utils.css";
const ProjetosComponent = () => {


    return (
        <section className='projetos' id="projetos">
            <Container style={{maxWidth: '70%'}}>
            <div className="col-12">
                <h2 className="section-header">Projetos</h2>
                <p className="section-text">
                    Aqui você encontrará alguns dos projetos pessoais e de clientes que criei.
                </p>
            </div>

            <div className="row margin-top-5-rem mb-3">
                <div className="col-12 col-lg-7 text-center mb-5">
                    <img src="https://placeholder.com/200x200" className="align-self-start" alt="" />
                </div>
                <div className="col-12 col-lg-5  text-center text-lg-start">
                    <h3>Projeto 1</h3>
                    <p className="projetos-text text-center text-lg-start"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, soluta tempora error necessitatibus assumenda ullam officia et. Atque alias sapiente qui nemo odit dolores at nobis vitae autem corporis.</p>
                    <Button className="projects-btn btn--med">
                        <a href="">VER PROJETO</a>
                    </Button>
                </div>
            </div>
            <div className="row margin-top-5-rem mb-3">
                <div className="col-12 col-lg-7 text-center mb-5 img-content">
                    <img src="https://placeholder.com/200x200" className="align-self-start" alt="" />
                </div>
                <div className="col-12 col-lg-5  text-center text-lg-start">
                    <h3>Projeto 2</h3>
                    <p className="projetos-text text-center text-lg-start"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur, soluta tempora error necessitatibus assumenda ullam officia et. Atque alias sapiente qui nemo odit dolores at nobis vitae autem corporis.</p>
                    <Button className="projects-btn btn--med">
                        <a href="">VER PROJETO</a>
                    </Button>
                </div>
            </div>

            </Container>
        </section>

    );
};

export default ProjetosComponent;