import { Button, Container, Form } from "react-bootstrap"

import "./contato.css"
import "../../utils.css"
const ContatosComponent = () => {
    return (
        <section className="contato" id="contato">
            <Container>
                <h2 className="section-header">Contato</h2>
                <p className="section-text">
                    Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível.
                </p>
                <Container className="contato_form-container">
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label className="contato_form-label">Nome</Form.Label>
                            <Form.Control className="contato_form-input" type="text" placeholder="Digite seu nome" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="contato_form-label">E-mail</Form.Label>
                            <Form.Control className="contato_form-input" type="email" placeholder="Insira seu e-mail" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label className="contato_form-label">Mensagem</Form.Label>
                            <Form.Control className="contato_form-input" as="textarea" rows={5} placeholder="Digite sua mensagem" required />
                        </Form.Group>

                        <Button className="projects-btn btn--med" type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </Container>
            </Container>
        </section>
    )
}

export default ContatosComponent