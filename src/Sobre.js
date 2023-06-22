import styles from './sobre.module.css'
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react';
function Sobre (){
  useEffect(() => {
    // Ao montar o componente, rolar para o topo da página
    window.scrollTo(0, 0);
  }, []);
    
return(
    <>
    <div className={styles.containerTitulo}>
        <h1 className={styles.titulo}>Quem sou eu</h1>
    </div>
    <div className={styles.containerTexto}>
    <div className={styles.containerPerfil}></div>
    <div className={styles.redes}>
    <a href='https://www.linkedin.com/in/michel-rocha-01b550210/' target='_blanck'><AiFillLinkedin color='#0e76a8' size={40} /></a>
    <a href='https://github.com/MichelRLima' target='_blanck'><AiFillGithub color='#181717' size={40} /></a>
    </div>
    <br/>
    <p>

    Olá, eu sou Michel, um estudante de 24 anos de Análise e Desenvolvimento de Sistemas 
    que mora em Natal/RN e que está em busca de uma oportunidade no mercado de trabalho de 
    desenvolvimento web. Meu amor pela área começou em 2020, quando comecei a estudar por conta 
    própria e rapidamente me apaixonei por desenvolvimento web. Desde então, venho trabalhando duro 
    para alcançar meu objetivo e estou constantemente atualizando minhas habilidades por meio de cursos 
    e projetos.
    </p>
    <p>
    Atualmente, tenho habilidades no front-end, com conhecimento em HTML, CSS e JavaScript, incluindo 
    suas bibliotecas, como jQuery. Além disso, tenho trabalhado em projetos utilizando o Node.js e o 
    MongoDB, o que me permitiu trabalhar com o desenvolvimento de aplicativos web completos, desde o 
    back-end até o front-end.Estou constantemente aprimorando minhas habilidades e conhecimentos, buscando 
    aprender novas tecnologias e frameworks para me manter atualizado com as tendências do mercado. Recentemente, 
    tenho me dedicado ao desenvolvimento de projetos com React, consumindo APIs e criando interfaces
    de usuário interativas.
    </p>
    <p>
    Eu sou uma pessoa tranquila e confiável, que sabe agir bem sob pressão e que acredita
     que nada é impossível quando se tem dedicação, esforço e alguns recursos para alcançar
      seus objetivos. Sou facilmente adaptável e sempre disposto a aprender coisas novas.Meu 
      objetivo é me tornar um desenvolvedor full-stack e continuar a evoluir na área. Estou 
      animado para ver onde essa jornada me levará e estou ansioso para trabalhar em projetos 
      desafiadores e inspiradores.
    </p>


  

    
    </div>


    
    
    </>
    )
}

export default Sobre;
