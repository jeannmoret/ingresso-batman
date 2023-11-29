import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentario from './pages/comentários/comentarios';

function App() { 

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/comentarios' element={<Comentario />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
