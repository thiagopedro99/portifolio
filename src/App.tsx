import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import ProjetoDetail from './pages/projetoDetail/projetoDetail';
import FooterComponent from './components/footer/footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projeto/:id" element={<ProjetoDetail />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
