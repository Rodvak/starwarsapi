import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Character from './views/Character';
import Planet from './views/Planet';
import './App.css';
import Starship from './views/Starship';

function App() {
  return (

  <BrowserRouter>
    <Form/>
      <Routes>
        <Route path='/people/:id' element={<Character/>}/>
        <Route path='/planet/:id' element={<Planet/>}/>
        <Route path='/starship/:id' element={<Starship/>}/>
      </Routes>
  </BrowserRouter>

  );
}

export default App;
