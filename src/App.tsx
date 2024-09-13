import './App.css'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import SobreComponent from './components/sobre/sobre';
import Projetos from './components/projetos/projetos';
import FooterComponent from './components/footer/footer';
import ContatosComponent from './components/contato/contato.tsx';


function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <SobreComponent></SobreComponent>
      <Projetos></Projetos>
      <ContatosComponent></ContatosComponent>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
