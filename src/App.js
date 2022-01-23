import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Company from './pages/Company/Company/Company';
import Services from './pages/Services/Services/Services';
import Technology from './pages/Technology/Technology/Technology';
import Carrer from './pages/Carrer/Carrer/Carrer';
import Blog from './pages/Blog/Blog/Blog';
import NavPart from './pages/Home/NavPart/NavPart';


function App() {
  return (
    <BrowserRouter>
      <NavPart></NavPart>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrer" element={<Carrer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
