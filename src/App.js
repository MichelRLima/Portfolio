import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import CV from "./CV";
import { Link } from "react-router-dom";
import Contato from "./Contato";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { DiJqueryLogo, DiReact, DiPython } from 'react-icons/di';
import { SiCsharp } from 'react-icons/si';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className="container-menu">
      <div className="container-button">
          <Link to="/">Sobre</ Link>
          <Link to="/projetos">Projetos</ Link> 
          <Link to="/cv">CV</ Link>
          <Link to="/contato">Contato</ Link>
      </div>
    </div>
    <Routes>
        

        <Route path="/" exact element={<Sobre />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="cv" element={<CV />} />
        <Route path="contato" element={<Contato />} />
        
     
    </Routes>
    <footer>
    
      <div className="containerFooter">
        
        <div className="icones">
        <h4>Tecnologias</h4>
      <AiFillHtml5 title="HTML5" size={32} color="#f59519" />
      <IoLogoCss3 title="CSS3" size={32} color="#428ad6" />
      <IoLogoJavascript title="JavaScript" size={32} color="#d5f060"/>
      <DiJqueryLogo title="jQuery" size={32} color="#0769ad" />
      <DiReact title="React" size={32} color="#0769ad"/>
      <DiPython title="Python" size={32} color="#3776ab"/>
      <SiCsharp title="C#"size={32} color="#68217a"/>
      </div>
      </div>
    </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
