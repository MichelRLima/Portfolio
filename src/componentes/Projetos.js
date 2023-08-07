import styles from './projetos.module.css'
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { DiJqueryLogo, DiReact } from 'react-icons/di';
import { BsBootstrapFill } from 'react-icons/bs'
import { SiAxios, SiMongodb, SiSocketdotio } from 'react-icons/si';
import { TbApi } from 'react-icons/tb'
import { FaNodeJs, FaAws } from 'react-icons/fa'


function Projetos() {
    const jdvLink = 'https://game-jogodavelha.netlify.app';
    const jdvrep = 'https://github.com/MichelRLima/Jogo-da-velha'
    const bcLink = 'https://search-mycep.netlify.app';
    const bcrep = 'https://github.com/MichelRLima/BuscarCep'
    const abLink = 'https://portfolio-agenciabold.netlify.app';
    const abrep = 'https://github.com/MichelRLima/Agencia-bold'
    const tdLink = 'https://react-tasktodolist.netlify.app';
    const tdrep = 'https://github.com/MichelRLima/TodoList'
    const rtLink = 'https://restaurante-hungrychef.netlify.app';
    const rtrep = 'https://github.com/MichelRLima/Cardapio'
    const calcLink = 'https://mycalc-basic.netlify.app'
    const calcrep = 'https://github.com/MichelRLima/Calculadora'
    const coinLink = 'https://coin-to-real.netlify.app'
    const coinrep = 'https://github.com/MichelRLima/Conversor-de-moedas'
    const gifLink = 'https://sharegif.netlify.app'
    const gifrep = 'https://github.com/MichelRLima/BuscarGIF'
    const pokLink = 'https://mypokedex-go.netlify.app'
    const pokrep = 'https://github.com/MichelRLima/Pokedex'
    const portalLink = 'http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3000'
    const portalrep = 'https://github.com/MichelRLima/portal-de-noticia'
    const chatLink = 'http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3001'
    const chatrep = 'https://github.com/MichelRLima/ChatSocket'
    const hairtimeLink = 'http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3002'
    const hairtimerep = 'https://github.com/MichelRLima/Projeto-HairTime'
    const [jdv, setJdv] = useState(false);
    const [bc, setBc] = useState(false);
    const [ab, setAb] = useState(false);
    const [td, setTd] = useState(false);
    const [rt, setRt] = useState(false);
    const [calc, setCalc] = useState(false);
    const [coin, setCoin] = useState(false);
    const [gif, setGif] = useState(false);
    const [pok, setPok] = useState(false);
    const [por, setPor] = useState(false);
    const [chat, setChat] = useState(false);
    const [hairtime, setHairtime] = useState(false);


    useEffect(() => {

        // Ao montar o componente, rolar para o topo da página
        window.scrollTo(0, 0);
    }, []);


    return (
        <>


            <br />
            <h2 className={styles.titulo}>Projetos</h2>

            <div className={styles.containerProjetos}>

                <div className={styles.projeto}>
                    <h3>Projeto HairTime</h3>

                    <div onClick={() => setHairtime(!hairtime)} className={styles.hairtime}>
                        {/* Mensagem que será exibida quando o mouse estiver sobre a div */}
                        <div className={styles.mensagem}> <p>O HairTime é meu primeiro projeto freelancer.
                            Esse projeto é uma plataforma robusta e elegante, projetada para permitir que os
                            clientes agendem seus serviços de corte de cabelo com facilidade e conveniência.
                            Por meio do framework Express.js e do banco de dados MongoDB, criei uma aplicação
                            que não apenas facilita o agendamento, mas também proporciona atualizações em tempo
                            real sobre disponibilidade e permite a gestão eficiente de horários. Os principais
                            recursos e funcionalidades são o agendamento simplificado para o cliente, através do
                            link apropriado, atualizações em tempo real dos agendamentos para evitar conflitos de
                            horários e um painel administrativo eficiente para fazer a alteração de horários disponíveis
                            para agendamento</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {hairtime && (
                        <div className={styles.aba}>

                            <div onClick={() => setHairtime(!hairtime)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Projeto HairTime</h3>
                                <p><AiFillHtml5 title='HTML5' size={32} color="#f59519" /> | <IoLogoJavascript title="JavaScript" size={32} color="#F7DF1E" /> | <SiMongodb title="MongoDB" size={32} color="#47A248  " /> | <FaNodeJs title="Node.js" size={32} color="#339933 " /> | <FaAws title="AWS" size={32} color=" #FF9900  " /></p>


                                <button><Button target="_blank" href={hairtimeLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={hairtimerep} variant="secondary">Repositório</Button></button>

                            </div>

                        </div>
                    )}

                </div>

                <br />

                <div className={styles.projeto}>
                    <h3>Portal de Notícias</h3>

                    <div onClick={() => setPor(!por)} className={styles.portal}>
                        {/* Mensagem que será exibida quando o mouse estiver sobre a div */}
                        <div className={styles.mensagem}> <p>Esse projeto é um servidor web construído
                            em Node.js usando o framework Express e o banco de dados MongoDB. O objetivo desse
                            projeto é criar um blog de notícias chamado "Michel News". O arquivo index.js é o
                            ponto de entrada do servidor. Nele, são importados os módulos necessários, incluindo o
                            Express, o Mongoose (para lidar com o MongoDB), o Body Parser (para analisar os corpos
                            das requisições HTTP), e o Fileupload (para lidar com uploads de arquivos). Além disso,
                            é configurado um sistema de sessão para autenticação e é feita a conexão com o banco de dados
                            MongoDB hospedado no serviço MongoDB Atlas.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {por && (
                        <div className={styles.aba}>

                            <div onClick={() => setPor(!por)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Portal de Notícias</h3>
                                <p><AiFillHtml5 title='HTML5' size={32} color="#f59519" /> | <IoLogoJavascript title="JavaScript" size={32} color="#F7DF1E" /> | <SiMongodb title="MongoDB" size={32} color="#47A248  " /> | <FaNodeJs title="Node.js" size={32} color="#339933 " /> | <FaAws title="AWS" size={32} color=" #FF9900  " /></p>


                                <button><Button target="_blank" href={portalLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={portalrep} variant="secondary">Repositório</Button></button>

                            </div>

                        </div>
                    )}

                </div>

                <br />

                <div className={styles.projeto}>
                    <h3>Chat em grupo</h3>
                    <div onClick={() => setChat(!chat)} className={styles.chat}>
                        <div className={styles.mensagem}><p>Esse projeto é chat em grupo em
                            tempo real construído com Node.js, Express e Socket.IO. O objetivo é
                            permitir que os usuários se conectem ao chat, conversem entre si e recebam
                            notificações de novas mensagens. O arquivo index.js é o arquivo principal do servidor.
                            Nele, são criados um servidor HTTP utilizando o módulo http e um servidor WebSocket
                            utilizando o módulo socket.io. Os usuários conectados são armazenados em duas arrays,
                            usuarios e socketIds, para rastrear os nomes dos usuários e seus respectivos IDs de socket.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {chat && (
                        <div className={styles.aba}>

                            <div onClick={() => setChat(!chat)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Chat em grupo</h3>
                                <p><AiFillHtml5 title="HTML5" size={32} color="#f59519" /> | <SiSocketdotio title="SocketIO" size={30} color="#010101" /> | <FaNodeJs title="Node.js" size={32} color="#339933 " /> | <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> | <FaAws title="AWS" size={32} color=" #FF9900  " />  </p>
                                <button><Button target="_blank" href={chatLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={chatrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Conversor de Moedas</h3>
                    <div onClick={() => setCoin(!coin)} className={styles.conversor}>
                        <div className={styles.mensagem}><p>O projeto Coin to Real permite
                            aos usuários converter valores de moedas estrangeiras para a moeda
                            brasileira (BRL - Real). A aplicação utiliza a biblioteca React para
                            construir a interface do usuário (UI) de forma interativa e responsiva.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {coin && (
                        <div className={styles.aba}>

                            <div onClick={() => setCoin(!coin)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Conversor de Moedas</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <SiAxios title="Axios" size={29} color="#007ACC" /> | <TbApi title="AwesomeAPI" size={32} color="#000000" /> </p>
                                <button><Button target="_blank" href={coinLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={coinrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Pokedex</h3>
                    <div onClick={() => setPok(!pok)} className={styles.pok}>
                        <div className={styles.mensagem}><p>A pokedex é Essa aplicação
                            permite aos usuários buscar informações sobre diferentes Pokémon
                            usando a API PokeAPI (https://pokeapi.co/). A interface é construída
                            usando a biblioteca React, proporcionando uma experiência de usuário
                            interativa e amigável.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {pok && (
                        <div className={styles.aba}>

                            <div onClick={() => setPok(!pok)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Pokedex</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <SiAxios title="Axios" size={29} color="#007ACC" /> | <TbApi title="PokeAPI" size={32} color="#000000" /></p>
                                <button><Button target="_blank" href={pokLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={pokrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Buscar GIF</h3>
                    <div onClick={() => setGif(!gif)} className={styles.gif}>
                        <div className={styles.mensagem}><p>Esse projeto é uma aplicação web que
                            permite aos usuários buscar e compartilhar GIFs usando a API do Giphy.
                            Com ele é possivel buscar os GIFs e compartilhar no WhatsApp.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {gif && (
                        <div className={styles.aba}>

                            <div onClick={() => setGif(!gif)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Buscar GIF</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <SiAxios title="Axios" size={29} color="#007ACC" /> | <TbApi title="API Giphy" size={32} color="#000000" /></p>
                                <button><Button target="_blank" href={gifLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={gifrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Cardápio / Restaurante</h3>
                    <div onClick={() => setRt(!rt)} className={styles.restaurante}>
                        <div className={styles.mensagem}><p>O aplicativo web chamado "Hungry Chef"
                            permite que os usuários façam um pedido de alimentos e bebidas e o enviem
                            via WhatsApp. Quando o usuário preenche todas as informações necessárias na
                            página de pedido e clica no botão "Enviar", o aplicativo gera um pedido completo que
                            inclui a lista de itens pedidos, informações de endereço e forma de pagamento.
                            Em seguida, o aplicativo utiliza um componente chamado "WhatsappLink" para criar um
                            link que pode ser usado para abrir o WhatsApp com uma mensagem contendo o pedido.
                            Dessa forma, o usuário pode revisar o pedido e enviar o pedido para o número de WhatsApp
                            do estabelecimento.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {rt && (
                        <div className={styles.aba}>

                            <div onClick={() => setRt(!rt)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Cardápio / Restaurante</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> </p>
                                <button><Button target="_blank" href={rtLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={rtrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Calculadora</h3>
                    <div onClick={() => setCalc(!calc)} className={styles.calculadora}>
                        <div className={styles.mensagem}><p>Esse projeto é uma calculadora simples
                            desenvolvida como um aplicativo web usando a biblioteca React.
                            A calculadora permite ao usuário realizar operações matemáticas básicas,
                            como adição, subtração, multiplicação e divisão.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {calc && (
                        <div className={styles.aba}>

                            <div onClick={() => setCalc(!calc)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Calculadora</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" />| <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> | <BsBootstrapFill title="Bootstrap" size={29} color="#7311ec" /></p>
                                <button><Button target="_blank" href={calcLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={calcrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>


                <br />


                <div className={styles.projeto}>
                    <h3>Buscar CEP</h3>
                    <div onClick={() => setBc(!bc)} className={styles.buscarCep}>
                        <div className={styles.mensagem}><p>Esse projeto é uma aplicação web para
                            buscar informações de um endereço a partir de um CEP fornecido pelo usuário.
                            O projeto foi desenvolvido utilizando a biblioteca React e a ferramenta de estilo Bootstrap.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {bc && (
                        <div className={styles.aba}>

                            <div onClick={() => setBc(!bc)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Buscar CEP</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <SiAxios title="Axios" size={29} color="#007ACC" /> | <BsBootstrapFill title="Bootstrap" size={29} color="#7311ec" /></p>
                                <button><Button target="_blank" href={bcLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={bcrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>

                <br />

                <div className={styles.projeto}>

                    <h3>Todo List</h3>
                    <div onClick={() => setTd(!td)} className={styles.todoList}>
                        <div className={styles.mensagem}><p>Todo List é uma aplicação de lista de tarefas desenvolvida em React. Nessa aplicação,
                            os usuários podem adicionar tarefas, marcar tarefas como concluídas e remover tarefas da lista.</p>
                            <p>Clique para ver mais</p></div>
                    </div>

                    {td && (
                        <div className={styles.aba}>

                            <div onClick={() => setTd(!td)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Todo List</h3>
                                <p><DiReact title="React" size={32} color="#0769ad" /> | <BsBootstrapFill title="Bootstrap" size={29} color="#7311ec" /></p>
                                <button><Button target="_blank" href={tdLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={tdrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}


                </div>


                <br />

                <div className={styles.projeto}>
                    <h3>Jogo da Velha</h3>
                    <div onClick={() => setJdv(!jdv)} className={styles.jogoDaVelha}>
                        <div className={styles.mensagem}><p>Esse projeto consiste em um jogo da velha implementado em HTML,
                            CSS e JavaScript. O arquivo "index.html" é a página principal do jogo, onde são definidos os elementos
                            visuais e os eventos de clique dos quadrantes. O arquivo "codigo.js" contém o código JavaScript que controla a lógica do jogo.</p>
                            <p>Clique para ver mais</p></div>
                    </div>

                    {jdv && (
                        <div className={styles.aba}>

                            <div onClick={() => setJdv(!jdv)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Jogo da velha</h3>
                                <p><AiFillHtml5 title="HTML5" size={32} color="#f59519" /> | <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> | <DiJqueryLogo title="jQuery" size={32} color="#0769ad" /></p>
                                <button><Button target="_blank" href={jdvLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={jdvrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}


                </div>


                <br />

                <div className={styles.projeto}>
                    <h3>Agência Bold</h3>
                    <div onClick={() => setAb(!ab)} className={styles.agenciaBold}>
                        <div className={styles.mensagem}><p>O projeto "Agência Bold" é uma página web para
                            promover uma agência de marketing ou publicidade chamada "Bold". O projeto utiliza HTML,
                            CSS e JavaScript para criar uma interface moderna e interativa.</p>
                            <p>Clique para ver mais</p></div>
                    </div>
                    {ab && (
                        <div className={styles.aba}>

                            <div onClick={() => setAb(!ab)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Agencia Bold</h3>
                                <p><AiFillHtml5 title="HTML5" size={32} color="#f59519" /> | <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> |  <IoLogoJavascript title="JavaScript" size={32} color="#F7DF1E" /></p>
                                <button><Button target="_blank" href={abLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={abrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



            </div>
        </>
    )
}

export default Projetos