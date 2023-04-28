import styles from './sobre.module.css'
function Sobre (){
    
    
return(
    <>
    <div className={styles.containerTitulo}>
        <h1 className={styles.titulo}>Quem sou eu</h1>
    </div>
    <div className={styles.containerTexto}>
    <p>
    Olá, meu nome é Michel, tenho 24 anos e sou de Natal/RN. 
    Sou um profissional em desenvolvimento web e embora ainda 
    não tenha experiência profissional na área, venho me dedicando 
    para ingressar no mercado de trabalho e construir uma carreira 
    de sucesso.
    </p>
    <p>
    Descobri minha paixão por desenvolvimento web em 2021, durante a pandemia, 
    quando comecei a estudar sozinho, começando com cursos gratuitos no 
    YouTube e depois comprando cursos online. No final de 2022, ingressei 
    na graduação em Análise e Desenvolvimento de Sistemas para aprimorar 
    ainda mais meus conhecimentos. 
    </p>
    <p>
    Minhas habilidades incluem HTML5, CSS3, JavaScript, jQuery e React, além de 
    ter conhecimento em Python e C#. Apesar de ainda não ter experiência na área 
    de desenvolvimento web, atualmente sou analista de suporte na empresa Riachuelo,
     onde tenho a oportunidade de aprender muito e sempre que possível, coloco em prática 
     minhas habilidades de programação para ajudar no trabalho.
    </p>

    <p>
    Meu sonho é me tornar um desenvolvedor de sucesso e estou trabalhando incansavelmente 
    para alcançá-lo. Convido você a visitar a aba Projetos do meu portfólio para ver meus 
    trabalhos e como eu aplico minhas habilidades de programação para criar soluções inovadoras.
    </p>

    <p>
    Acredito que cada projeto é uma oportunidade de aprendizado e evolução, e estou animado 
    para continuar crescendo e me desenvolvendo como profissional de desenvolvimento web. 
    Agradeço pela visita e espero ter a oportunidade de colaborar com você em projetos futuros.
    
    </p>
    <div className={styles.containerPerfil}></div>
    </div>
    
    </>
    )
}

export default Sobre;
