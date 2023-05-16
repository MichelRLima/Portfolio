import styles from './projetos.module.css'
import { useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


function Projetos (){
    const jdvLink = 'https://game-jogodavelha.netlify.app';
    const jdvrep =  'https://github.com/MichelRLima/Jogo-da-velha'
    const bcLink = 'https://search-mycep.netlify.app';
    const bcrep =  'https://github.com/MichelRLima/BuscarCep'
    const abLink = 'https://portfolio-agenciabold.netlify.app';
    const abrep =  'https://github.com/MichelRLima/Agencia-bold'
    const tdLink = 'https://react-tasktodolist.netlify.app';
    const tdrep =  'https://github.com/MichelRLima/TodoList'
    const rtLink = 'https://restaurante-hungrychef.netlify.app';
    const rtrep =  'https://github.com/MichelRLima/Cardapio'
    const calcLink = 'https://mycalc-basic.netlify.app'
    const calcrep =  'https://github.com/MichelRLima/Calculadora'
    const coinLink = 'https://coin-to-real.netlify.app'
    const coinrep =  'https://github.com/MichelRLima/Conversor-de-moedas'
    const gifLink = 'https://sharegif.netlify.app'
    const gifrep =  'https://github.com/MichelRLima/BuscarGIF'
    const [jdv, setJdv] = useState(false);
    const [bc, setBc] = useState(false);
    const [ab, setAb] = useState(false);
    const [td, setTd] = useState(false);
    const [rt, setRt] = useState(false);
    const [calc, setCalc] = useState(false);
    const [coin, setCoin] = useState(false);
    const [gif, setGif] = useState(false);
    
    
    return(
        <>
       
        <br/>
        <h2 className={styles.titulo}>Projetos</h2>

        <div className={styles.containerProjetos}>

        <div className={styles.projeto}>
            <h3>Conversor de Moedas</h3>
            <div onClick={() => setCoin(!coin)} className={styles.conversor}></div>
            {coin && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setCoin(!coin)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Conversor de Moedas</h3>
                        <p>React | Axios | Bootstrap</p>
                        <button><Button target="_blank" href={coinLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={coinrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>



            <br/>

            <div className={styles.projeto}>
            <h3>Buscar GIF</h3>
            <div onClick={() => setGif(!gif)} className={styles.gif}></div>
            {gif && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setGif(!gif)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Buscar GIF</h3>
                        <p>React | CSS3 | useEffect</p>
                        <button><Button target="_blank" href={gifLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={gifrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>



            <br/>

        <div className={styles.projeto}>
            <h3>Cardápio / Restaurante</h3>
            <div onClick={() => setRt(!rt)} className={styles.restaurante}></div>
            {rt && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setRt(!rt)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Cardápio / Restaurante</h3>
                        <p>React | CSS3 | useEffect</p>
                        <button><Button target="_blank" href={rtLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={rtrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>



            <br/>

            <div className={styles.projeto}>
                <h3>Calculadora</h3>
                <div onClick={() => setCalc(!calc)} className={styles.calculadora}></div>
                {calc && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setCalc(!calc)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Calculadora</h3>
                        <p>React | CSS3 | Bootstrap</p>
                        <button><Button target="_blank" href={calcLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={calcrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>


            <br/>
     

            <div className={styles.projeto}>
                <h3>Buscar CEP</h3>
                <div onClick={() => setBc(!bc)} className={styles.buscarCep}></div>
                {bc && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setBc(!bc)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Buscar CEP</h3>
                        <p>React | Axios | Bootstrap</p>
                        <button><Button target="_blank" href={bcLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={bcrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>
            
            <br/>
            
            <div className={styles.projeto}>

            <h3>Todo List</h3>
            <div onClick={() => setTd(!td)} className={styles.todoList}></div>
            
            {td && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setTd(!td)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Todo List</h3>
                        <p>React | Bootstrap | useEffect</p>
                        <button><Button target="_blank" href={tdLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={tdrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}


            </div>
            

            <br/>

            <div className={styles.projeto}>
                <h3>Jogo da Velha</h3>
                <div onClick={() => setJdv(!jdv)} className={styles.jogoDaVelha}></div>

                {jdv && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setJdv(!jdv)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Jogo da velha</h3>
                        <p>HTML5 | CSS3 | jQuery</p>
                        <button><Button target="_blank" href={jdvLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={jdvrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}
                

            </div>


            <br/>

            <div className={styles.projeto}>
                <h3>Agência Bold</h3>
                <div onClick={() => setAb(!ab)} className={styles.agenciaBold}></div>
                {ab && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setAb(!ab)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Agencia Bold</h3>
                        <p>HTML5 | CSS3 | JavaScript</p>
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