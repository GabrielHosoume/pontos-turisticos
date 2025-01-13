import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import CadastrarPontoTuristico from './containers/CadastrarPontoTuristico/CadastrarPontoTuristico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPontoTuristico />} />
      </Routes>
    </Router>
  );
}

export default App
