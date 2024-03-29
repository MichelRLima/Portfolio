import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sobre from "./Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import { Link } from "react-router-dom";

import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { DiJqueryLogo, DiReact, DiPython } from 'react-icons/di';
import { SiCsharp, SiAxios, SiMongodb, SiSocketdotio } from 'react-icons/si';
import { FaBars, FaNodeJs, FaAws, FaGitAlt } from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'

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
            <Link to="pages/projetos">Projetos</ Link>
            <Link to="pages/contato">Contato</ Link>
          </div>

          <div className="containerMobile">
            <FaBars onClick={() => setShowDiv(!showDiv)} size={32} />

          </div>

          <div className="menuMobile" style={{ display: showDiv ? 'block' : 'none' }}>
            <Link onClick={() => setShowDiv(!showDiv)} to="/">Sobre</ Link>
            <Link onClick={() => setShowDiv(!showDiv)} to="pages/projetos">Projetos</ Link>

            <Link onClick={() => setShowDiv(!showDiv)} to="pages/contato">Contato</ Link>
          </div>

        </div>




        <Routes>

          <Route path="/" exact element={<Sobre />} />
          <Route exact path="pages/projetos" element={<Projetos />} />

          <Route exact path="pages/contato" element={<Contato />} />


        </Routes>
        <footer>

          <div className="containerFooter">
            <h4>Tecnologias</h4>
            <div className="icones">


              <AiFillHtml5 title="HTML5" size={32} color="#f59519" />
              <IoLogoCss3 title="CSS3" size={32} color="#428ad6" />
              <IoLogoJavascript title="JavaScript" size={32} color="#d5f060" />
              <DiReact title="React" size={32} color="#0769ad" />
              <DiPython title="Python" size={32} color="#3776ab" />
              <FaNodeJs title="Node.js" size={32} color="#339933 " />
              <SiMongodb title="MongoDB" size={32} color="#47A248  " />
              <FaGitAlt title="Git" size={32} color="#f34c28" />
              <FaAws title="AWS" size={32} color="#EFEFEF  " />
              <SiSocketdotio title="SocketIO" size={30} color="#010101" />
              <SiAxios title="Axios" size={32} color="#007ACC" />
              <BsBootstrapFill title="Bootstrap" size={32} color="#7311ec" />
              <DiJqueryLogo title="jQuery" size={32} color="#0769ad" />
              <SiCsharp title="C#" size={32} color="#68217a" />

            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;