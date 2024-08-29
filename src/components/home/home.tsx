
import "../../utils.css";
import { Container, Button } from 'react-bootstrap';
import linkedinImg from '../../assets/svg/linkedin-dark.svg';
import githubImg from '../../assets/svg/github-dark.svg';
import gmailImg from '../../assets/svg/gmail.svg';
import "./home.css";
const HomeComponent = () => {


    return (
        <section className='home' id="home">

            <Container fluid className="home-welcome d-flex flex-column align-items-center">
                <h1 className="heading-primary">Hello World, meu nome é Thiago Silva</h1>
                <div className="home-welcome__info">
                    <p className="text-primary">
                        Um desenvolvedor da Web orientado a resultados, construindo e gerenciando
                        sites e aplicativos da Web que levam ao sucesso do produto geral
                    </p>
                </div>
                <a href="#projetos">
                    <Button className="projects-btn">POJETOS</Button>
                </a>
            </Container>

            <div className="home-welcome__social d-none d-lg-block">
                <div className="home-welcome__social--item">
                    <a href="https://www.linkedin.com/in/thiago-pedro-da-silva/" target="_blank"><img src={linkedinImg} alt="" /></a>
                </div>
                <div className="home-welcome__social--item">
                    <a href="https://github.com/thiagopedro99" target="_blank"><img src={githubImg} alt="" /></a>
                </div>
                <div className="home-welcome__social--item">
                    <a href="https://github.com/thiagopedro99" target="_blank"><img src={gmailImg} alt="" /></a>
                </div>
            </div>

        </section>

    );
};

export default HomeComponent;