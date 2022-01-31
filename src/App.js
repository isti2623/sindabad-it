import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Company from './pages/Company/Company/Company';
import Services from './pages/Services/Services/Services';

import Carrer from './pages/Carrer/Carrer/Carrer';

import NavPart from './pages/Home/NavPart/NavPart';
import Technologys from './pages/Technologys/Technologys/Technologys';


function App() {
  return (
    <BrowserRouter>
      <NavPart></NavPart>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technologys />} />
        <Route path="/carrer" element={<Carrer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
