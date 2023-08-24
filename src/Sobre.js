import styles from './sobre.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

import { useEffect } from 'react';
function Sobre() {
  useEffect(() => {
    // Ao montar o componente, rolar para o topo da página
    window.scrollTo(0, 0);
  }, []);

  //links dos certificados
  const historico = "https://drive.google.com/file/d/1t0BrbywCTMnj1E0QXdzNW74OXYu2zRmF/view?usp=sharing"
  const front1 = "https://drive.google.com/file/d/1_ppEMxNPUoH1RZ5uanuEwCly4nDBfDg-/view?usp=sharing"
  const front2 = "https://drive.google.com/file/d/1VNJrATqbV7tW6HjNoygX941wNBl2AxAj/view?usp=sharing"
  const front3 = "https://drive.google.com/file/d/1j2WPJmNy3ElB4pBOvjKX2v9NzKLdrFT4/view?usp=sharing"
  const front4 = "https://drive.google.com/file/d/1lXTP-22R6su8jGAgrXZHhKkOO9ZSNszB/view?usp=sharing"
  const back1 = "https://drive.google.com/file/d/1QK4RujkrgVg8Q5dirR3mLFGXq4E-b-Ev/view?usp=sharing"
  const back2 = "https://drive.google.com/file/d/1-ndPnqZkeI5DNtU0bjdhCldk_6DszZIx/view?usp=sharing"
  const back3 = "https://drive.google.com/file/d/1qzPx-UTmWKl6lgLiWg2d4CajtSVvPJFk/view?usp=sharing"
  const back4 = "https://drive.google.com/file/d/1e8SwErcIW3cPdQE9iZjbDLq2vDod4Q8K/view?usp=sharing"
  const back5 = "https://drive.google.com/file/d/1Rfw8yloKfGXOAfv51rRRT64SEdifAqa_/view?usp=sharing"
  const back6 = "https://drive.google.com/file/d/1ouUzeSYmmr5ujU2ktodR-gGnGcLKftPX/view?usp=sharing"
  const outros1 = "https://drive.google.com/file/d/1TP5NtUlAbPZHWyARD92bOkqru9tyy85z/view?usp=sharing"
  const outros2 = "https://drive.google.com/file/d/1vwwhiLIPKLqbnkFSJil_v-ERLF0Lt8zi/view?usp=sharing"
  const outros3 = "https://drive.google.com/file/d/10sWwy9nYoQwJu3BuoU88xd3w39d02Pkw/view?usp=sharing"
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

        <p>Eu sou um desenvolvedor de software com habilidades diversas e sólida experiência em várias tecnologias.
          Ao longo dos meus estudos e certificações, adquiri conhecimentos abrangentes e aprofundados em diferentes
          áreas do desenvolvimento de software, o que me permite enfrentar desafios com confiança e entregar soluções
          inovadoras.
        </p>

        <p>Minhas habilidades incluem:</p>

        <ul>
          <li>Desenvolvimento de aplicações web com Python, Django e Node.js.</li>
          <li>Conhecimento em bancos de dados, como MongoDB e MySQL, para modelagem, consulta e manipulação de dados.</li>
          <li>Conhecimentos sólidos em React para o desenvolvimento de interfaces de usuário interativas.</li>
          <li>Domínio em JavaScript, permitindo criar interações dinâmicas e responsivas nas minhas aplicações.</li>
          <li>Experiência em programação orientada a objetos (POO), programação lógica e a utilização de PHP e C.</li>
          <li>Criação de interfaces de usuário modernas e atraentes usando HTML5 e CSS3.</li>
          <li>Competência em inteligência artificial, com algoritmos de aprendizado de máquina e processamento de linguagem natural.</li>
          <li>Habilidades em lógica de programação para resolver problemas complexos de forma eficiente.</li>
          <li>Compreensão da arquitetura de sistemas computacionais e habilidades em manutenção e reparo de computadores.</li>
          <li>Gerenciamento e manipulação de informações em bancos de dados para projetos de sistemas web.</li>
          <li>Gerenciamento e manipulação de informações em bancos de dados para projetos de sistemas web.</li>
          <li>Competências em controle de versão com Git</li>
          <li>Experiência em seguir roadmaps e planejar estratégias de aprendizado e desenvolvimento.</li>
        </ul>


        <p>Estou constantemente atualizando meu conhecimento para acompanhar as últimas tendências tecnológicas e
          melhorar ainda mais minhas habilidades. Ao longo da minha carreira, tive a oportunidade de trabalhar
          em projetos desafiadores, o que me permitiu aprimorar minha capacidade de trabalhar em equipe, resolver
          problemas complexos e entregar resultados de alta qualidade.</p>

        <p>Sou um profissional comprometido, apaixonado por tecnologia e inovação. Tenho facilidade em aprender
          novas tecnologias e estou sempre em busca de novos desafios. Acredito que o aprendizado contínuo
          é essencial para o crescimento profissional e pessoal.</p>





      </div>

      <div className={styles.containerTexto}>
        <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Diplomas e certificados</h1>
        </div>


        <br />
        <br />
        <br />
        <br />

        <h3 className={styles.tituloCategoria}>Graduação</h3>
        <div className={styles.containerCertificados}>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={historico}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h3>
              <BiTime size={25} color='#4e4e4e' />


            </div>

          </a>


        </div>

        <br />
        <br />
        <br />


        <h3 className={styles.tituloCategoria}>Front-end</h3>
        <div className={styles.containerCertificados}>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={front1}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO WEBMASTER FRONT-END COMPLETO</h3>
              <div className={styles.imageFront1}></div>
            </div>

          </a>
          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={front2}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO FRONT-END COMPLETO 2.0</h3>
              <div className={styles.imageFront2}></div>
            </div>

          </a>
          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={front3}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO JAVASCRIPT COMPLETO</h3>
              <div className={styles.imageFront3}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={front4}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>Introdução a Criação de Websites com HTML5 e CSS3</h3>
              <div className={styles.imageFront4}></div>
            </div>

          </a>
        </div>

        <br />
        <br />
        <br />

        <h3 className={styles.tituloCategoria}>Back-end</h3>
        <div className={styles.containerCertificados}>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back6}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>Versionamento de Código com Git
                e GitHub
              </h3>
              <div className={styles.imageBack6}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back1}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO NODEJS</h3>
              <div className={styles.imageBack1}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back4}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO DE PYTHON</h3>
              <div className={styles.imageBack4}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back5}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO BANCO DE DADOS</h3>
              <div className={styles.imageBack5}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back2}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>PROGRAMADOR WEB</h3>
              <div className={styles.imageBack2}></div>
            </div>

          </a>



        </div>
        <br />
        <br />
        <br />

        <h3 className={styles.tituloCategoria}>Outros certificados</h3>
        <div className={styles.containerCertificados}>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={outros3}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>
                ROADMAPS DIO E O NOTION</h3>
              <div className={styles.imageOutros3}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={outros1}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CURSO DE LÓGICA DE PROGRAMAÇÃO</h3>
              <div className={styles.imageOutros1}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={outros2}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>CERTIFIQUE-SE EM INTELIGENCIA ARTIFICAL</h3>
              <div className={styles.imageOutros2}></div>
            </div>

          </a>

          <a className={styles.linkCertificados} target='_blank' rel="noreferrer" href={back3}>
            <div className={styles.certificado}>
              <h3 className={styles.tituloCeriticado}>PROGRAMMING BASICS</h3>
              <div className={styles.imageOutros4}></div>
            </div>

          </a>


        </div>





      </div>




    </>
  )
}

export default Sobre;
