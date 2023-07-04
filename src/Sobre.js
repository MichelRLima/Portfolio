import styles from './sobre.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useEffect } from 'react';
function Sobre() {
  useEffect(() => {
    // Ao montar o componente, rolar para o topo da página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.Perfil}>
        <div className={styles.containerPerfil}></div>
        <div className={styles.apresentacaoTitulo}>
          <h3>Michel Rocha</h3>
          <p>Desenvolvedor Web</p>
          <div className={styles.redes}>
            <a href='https://www.linkedin.com/in/michel-rocha-01b550210/' target='_blanck'><AiFillLinkedin color='#0e76a8' size={40} /></a>
            <a href='https://github.com/MichelRLima' target='_blanck'><AiFillGithub color='#181717' size={40} /></a>
          </div>
        </div>
      </div>


      <div className={styles.containerTexto}>
        <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Quem sou eu</h1>
        </div>


        <br />
        <p>
          Olá, eu sou Michel, um estudante de 24 anos de Análise e Desenvolvimento de Sistemas
          que mora em Natal/RN e que está em busca de uma oportunidade no mercado de trabalho de
          desenvolvimento web. Meu amor pela área começou em 2020, quando comecei a estudar por conta
          própria e rapidamente me apaixonei por desenvolvimento web. Desde então, venho trabalhando duro
          para alcançar meu objetivo e estou constantemente atualizando minhas habilidades por meio de cursos
          e projetos.
        </p>



        <p>
          Sobre minha personalidade, eu me considero uma uma pessoa tranquila e confiável, que sabe agir bem sob pressão e que acredita
          que nada é impossível quando se tem dedicação, esforço e alguns recursos para alcançar
          seus objetivos. Sou facilmente adaptável e sempre disposto a aprender coisas novas.Meu
          objetivo é me tornar um desenvolvedor full-stack e continuar a evoluir na área. Estou
          animado para ver onde essa jornada me levará e estou ansioso para trabalhar em projetos
          desafiadores e inspiradores.
        </p>





      </div>

      <div className={styles.containerTexto}>
        <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Habilidades e tecnologias</h1>
        </div>


        <br />
        <br />

        <p>Tenho experiência sólida no desenvolvimento front-end, com conhecimentos em HTML, CSS e JavaScript,
          incluindo bibliotecas como jQuery. Essa base me permite criar interfaces de usuário atraentes e responsivas,
          oferecendo uma ótima experiência aos usuários. Estou constantemente aprimorando minhas habilidades e
          conhecimentos, buscando aprender novas tecnologias e frameworks para me manter atualizado com as tendências
          do mercado. Recentemente, tenho me dedicado ao desenvolvimento de projetos com React, uma biblioteca JavaScript
          de código aberto, que me permite criar interfaces de usuário interativas e reutilizáveis, além de consumir
          APIs para buscar dados dinamicamente.</p>

        <p>Além disso, tenho trabalhado em projetos utilizando o Node.js, uma plataforma de desenvolvimento JavaScript do
          lado do servidor. Com o Node.js, consigo criar aplicações web eficientes e escaláveis, aproveitando a mesma
          linguagem tanto no front-end quanto no back-end. Tenho desenvolvido projetos com o uso do Socket.IO, uma
          biblioteca que permite a comunicação em tempo real entre clientes e servidores. Essa tecnologia tem me
          proporcionado a criação de aplicações interativas e dinâmicas, com recursos de chat em tempo real,
          atualizações em tempo real e muito mais.</p>

        <p>Outra área em que tenho trabalhado é o gerenciamento de banco de dados, mais especificamente com o MongoDB e
          MySQL. Com o MongoDB, um banco de dados NoSQL orientado a documentos, tenho explorado recursos como flexibilidade
          na estrutura dos dados e escalabilidade horizontal. Essa combinação de Node.js e MongoDB tem me permitido criar
          aplicações web completas, desde o back-end até o front-end, com facilidade e eficiência. Com MySQL, um
          sistema de gerenciamento de banco de dados relacional amplamente utilizado em aplicações web.
          Estou aprendendo sobre criação de tabelas, consultas SQL e integração de bancos de dados em meus projetos.</p>

        <p>Atualmente, estou estudando Python, uma linguagem de programação versátil e poderosa. Tenho interesse em
          explorar suas diversas aplicações, desde o desenvolvimento web até a ciência de dados. Com Python, estou
          ampliando minhas habilidades e conhecimentos, buscando entender sua sintaxe elegante e suas vastas bibliotecas
          e frameworks, como Django.</p>





      </div>




    </>
  )
}

export default Sobre;
