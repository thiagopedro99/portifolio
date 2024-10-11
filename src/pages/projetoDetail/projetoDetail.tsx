
import "../../utils.css";
import "./projetoDetail.css";
import HeaderComponent from "../../components/header/header";
import ContatosComponent from "../../components/contato/contato";
import { Container } from "react-bootstrap";
const ProjetoDetail = () => {


    return (
        <>
            <HeaderComponent />

            <Container></Container>

            <ContatosComponent />
            
        </>
    );
};

export default ProjetoDetail;