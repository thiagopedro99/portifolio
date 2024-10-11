
import "../../utils.css";
import { Container, Button } from 'react-bootstrap';
import "./projetos.css";
import "../../utils.css";
import { Link } from "react-router-dom";
const ProjetosComponent = () => {

    let projetos = [
        { id: 1, title: "Projeto 1", description: "Descrição do Projeto 1", image: "https://placeholder.com/200x200" },
        { id: 2, title: "Projeto 2", description: "Descrição do Projeto 2", image: "https://placeholder.com/200x200" },
    ];

    return (
        <section className='projetos' id="projetos">
            <Container style={{ maxWidth: '70%' }}>
                <div className="col-12">
                    <h2 className="section-header">Projetos</h2>
                    <p className="section-text">
                        Aqui você encontrará alguns dos projetos pessoais e de clientes que criei.
                    </p>
                </div>
                {projetos.map((projeto) => (
                    <div key={projeto.id}>
                        <h3>{projeto.title}</h3>
                        <p className="projetos-text">{projeto.description}</p>
                        <Button className="projects-btn btn--med">
                            <Link to={`/projetos/${projeto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                VER PROJETO
                            </Link>
                        </Button>
                    </div>
                ))}

            </Container>
        </section>

    );
};

export default ProjetosComponent;