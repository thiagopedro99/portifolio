
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
                    Sou mineiro, apaixonado por café, música e pelos desafios que a tecnologia traz. Estou sempre em constante aprendizado e evolução na área de desenvolvimento. 
                    </p>
                </div>
                <a href="#projetos">
                    <Button className="projects-btn">POJETOS</Button>
                </a>
            </Container>

            <div className="home-welcome__social d-none d-lg-block">
                <div className="home-welcome__social--item">
                    <a href="https://www.linkedin.com/in/thiago-pedro-da-silva/" target="_blank"><img src={linkedinImg} alt="logo do linkedin" /></a>
                </div>
                <div className="home-welcome__social--item">
                    <a href="https://github.com/thiagopedro99" target="_blank"><img src={githubImg} alt="ogo do github" /></a>
                </div>
                <div className="home-welcome__social--item">
                    <a href="mailto:thiago.gefa@gmail.com" target="_blank"><img src={gmailImg} alt="logo do gmail" /></a>
                </div>
            </div>

        </section>

    );
};

export default HomeComponent;