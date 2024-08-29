import './App.css'
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import SobreComponent from './components/sobre/sobre';
import Projetos from './components/projetos/projetos';


function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <SobreComponent></SobreComponent>
      <Projetos></Projetos>
    </>
  )
}

export default App
