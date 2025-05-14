import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BanhoTosa from  './pages/BanhoTosa'
import HotelResort from  './pages/HotelResort'
import Adestramento from  './pages/Adestramento'
import NavBarMenu from  './pages/NavBarMenu'

function App() {
  return (
    <Router>
      <header>
      <NavBarMenu />

      </header>

     <main>

     <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/banho-e-tosa" element={ <BanhoTosa />} />
          <Route path="/hotel-resort" element={ <HotelResort />} />
          <Route path="/adestramento" element={ <Adestramento />} />
      </Routes>
      </main>

      <footer>
      
      </footer>
       
    </Router>

    
  );
}

export default App;
