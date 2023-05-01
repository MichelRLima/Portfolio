import styles from './projetos.module.css'
import { useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


function Projetos (){
    const jdvLink = 'https://game-jogodavelha.netlify.app';
    const jdvrep =  'https://github.com/MichelRLima/Jogo-da-velha'
    const bcLink = 'https://search-mycep.netlify.app';
    const bcrep =  'https://github.com/MichelRLima/BuscarCep'
    const tdLink = 'https://react-tasktodolist.netlify.app';
    const tdrep =  'https://github.com/MichelRLima/TodoList'
    const rtLink = 'https://restaurante-hungrychef.netlify.app';
    const rtrep =  'https://github.com/MichelRLima/Cardapio'
    const [jdv, setJdv] = useState(false);
    const [bc, setBc] = useState(false);
    const [td, setTd] = useState(false);
    const [rt, setRt] = useState(false);
    
    
    return(
        <>
       
        <br/>
        <h2 className={styles.titulo}>Projetos</h2>

        <div className={styles.containerProjetos}>

       
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
                <h3>Buscar CEP</h3>
                <div onClick={() => setBc(!bc)} className={styles.buscarCep}></div>
                {bc && (
                    <div className={styles.aba}>
                   
                    <div onClick={() => setBc(!bc)} className={styles.close}><FaSignOutAlt size={30}/></div>
                    <div className={styles.containerDescricao}>
                        <h3>Buscar CEP</h3>
                        <p>React</p>
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
                        <p>React</p>
                        <button><Button target="_blank" href={tdLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={tdrep} variant="secondary">Repositório</Button></button>
                        
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
                        <p>React</p>
                        <button><Button target="_blank" href={rtLink} variant="success">Site</Button></button>
                        <button><Button target="_blank" href={rtrep} variant="secondary">Repositório</Button></button>
                        
                    </div>
                </div>
                )}

            </div>

            

        </div>
        </>
    )
}

export default Projetos