import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../components/home/home';
import SobreComponent from '../../components/sobre/sobre';
import ProjetosComponent from '../../components/projetos/projetos'; // Corrija o nome se necessário
import ContatosComponent from '../../components/contato/contato';

function Main() {
    return (
        <>
            
            <Home></Home>
            <SobreComponent></SobreComponent>
            <ProjetosComponent></ProjetosComponent>
            <ContatosComponent></ContatosComponent>
        </>
    );
}

export default Main;
