import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sobre from "./Sobre";
import Projetos from "./componentes/Projetos";

import { Link } from "react-router-dom";
import Contato from "./componentes/Contato";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { DiJqueryLogo, DiReact, DiPython } from 'react-icons/di';
import { SiCsharp } from 'react-icons/si';
import {FaBars} from 'react-icons/fa'
import { useState } from "react";

function App() {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <>
    
    <BrowserRouter>
    <div className="container-menu">
    <div className="logo">

    </div>
      

      <div className="container-button">
          <Link to="/">Sobre</ Link>
          <Link to="componentes/projetos">Projetos</ Link> 
          <Link to="componentes/contato">Contato</ Link>
      </div>
      
    </div>

    <div className="containerMobile">
      <FaBars onClick={() => setShowDiv(!showDiv)} size={32} />
    
    </div>
    <div className="menuMobile" style={{display: showDiv ? 'block' : 'none', transition: 'opacity , 2s'}}>
          <Link onClick={() => setShowDiv(!showDiv)} to="/">Sobre</ Link>
          <Link onClick={() => setShowDiv(!showDiv)} to="componentes/projetos">Projetos</ Link> 
         
          <Link onClick={() => setShowDiv(!showDiv)}  to="componentes/contato">Contato</ Link>
    </div>

    <Routes>
        

        <Route path="/" exact element={<Sobre />} />
        <Route path="componentes/projetos" element={<Projetos />} />
      
        <Route path="componentes/contato" element={<Contato />} />
        
     
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
