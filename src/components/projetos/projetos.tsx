
import "../../utils.css";
import { Container, Button } from 'react-bootstrap';
import "./projetos.css";
import "../../utils.css";
import { Link } from "react-router-dom";
const ProjetosComponent = () => {

    let projetos = [
        { id: 1, title: "Projeto 1", description: "Descrição do Projeto 1", image: "https://placeholder.com/300x300" },
        { id: 2, title: "Projeto 2", description: "Descrição do Projeto 2", image: "https://placeholder.com/300x300" },
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
                    <div key={projeto.id} className="projetos__item mt-5 ">
                        <div>
                            <img src={projeto.image} alt={projeto.title} />
                        </div>
                        <div>
                            <h3 className="mb-5">{projeto.title}</h3>
                            <p className="projetos-text ">{projeto.description}</p>

                            <Link to={`/projeto/${projeto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button className="btn_default btn--med">
                                    VER PROJETO
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Container>
        </section>

    );
};

export default ProjetosComponent;