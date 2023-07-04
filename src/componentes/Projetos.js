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
import { FaNodeJs } from 'react-icons/fa'


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
                    <h3>Portal de Notícias</h3>

                    <div onClick={() => setPor(!por)} className={styles.portal}></div>
                    {por && (
                        <div className={styles.aba}>

                            <div onClick={() => setPor(!por)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Portal de Notícias</h3>
                                <p><AiFillHtml5 title='HTML5' size={32} color="#f59519" /> | <IoLogoJavascript title="JavaScript" size={32} color="#F7DF1E" /> | <SiMongodb title="MongoDB" size={32} color="#47A248  " /> | <FaNodeJs title="Node.js" size={32} color="#339933 " /> </p>


                                <button><Button target="_blank" href={portalLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={portalrep} variant="secondary">Repositório</Button></button>

                            </div>

                        </div>
                    )}

                </div>

                <br />

                <div className={styles.projeto}>
                    <h3>Chat em grupo</h3>
                    <div onClick={() => setChat(!chat)} className={styles.chat}></div>
                    {chat && (
                        <div className={styles.aba}>

                            <div onClick={() => setChat(!chat)} className={styles.close}><AiOutlineCloseCircle size={30} /></div>
                            <div className={styles.containerDescricao}>
                                <h3>Chat em grupo</h3>
                                <p><AiFillHtml5 title="HTML5" size={32} color="#f59519" /> | <SiSocketdotio title="SocketIO" size={30} color="#010101" /> | <IoLogoCss3 title="CSS3" size={32} color="#428ad6" /> </p>
                                <button><Button target="_blank" href={chatLink} variant="success">Site</Button></button>
                                <button><Button target="_blank" href={chatrep} variant="secondary">Repositório</Button></button>

                            </div>
                        </div>
                    )}

                </div>



                <br />

                <div className={styles.projeto}>
                    <h3>Conversor de Moedas</h3>
                    <div onClick={() => setCoin(!coin)} className={styles.conversor}></div>
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
                    <div onClick={() => setPok(!pok)} className={styles.pok}></div>
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
                    <div onClick={() => setGif(!gif)} className={styles.gif}></div>
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
                    <div onClick={() => setRt(!rt)} className={styles.restaurante}></div>
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
                    <div onClick={() => setCalc(!calc)} className={styles.calculadora}></div>
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
                    <div onClick={() => setBc(!bc)} className={styles.buscarCep}></div>
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
                    <div onClick={() => setTd(!td)} className={styles.todoList}></div>

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
                    <div onClick={() => setJdv(!jdv)} className={styles.jogoDaVelha}></div>

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
                    <div onClick={() => setAb(!ab)} className={styles.agenciaBold}></div>
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