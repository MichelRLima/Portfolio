import styles from './projetos.module.css'
import { useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
function Projetos (){
    const jdvLink = 'https://game-jogodavelha.netlify.app';
    const jdvrep =  'https://github.com/MichelRLima/Jogo-da-velha'
    const [jdv, setJdv] = useState(false);
    
    console.log(jdv)
    return(
        <>
       
        <br/>
        <h2 className={styles.titulo}>Projetos</h2>

        <div className={styles.containerProjetos}>

       
            <div className={styles.projeto}>
                <h3>Jogo da Velha</h3>
                <div onClick={() => setJdv(!jdv)} className={styles.jogoDaVelha}>
                    
                </div>
                {jdv && (
                    <div className={styles.abajdv}>
                   
                    <div onClick={() => setJdv(!jdv)} className={styles.closeJDV}><FaSignOutAlt size={30}/></div>
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
                <div className={styles.buscarCep}></div>

            </div>

            <br/>

            <div className={styles.projeto}>

            <h3>Todo List</h3>
            <div className={styles.todoList}></div>

            </div>

            <br/>

            <div className={styles.projeto}>
            <h3>Cardápio / restaurante</h3>
            <div className={styles.restaurante}></div>


            </div>

            

        </div>
        </>
    )
}

export default Projetos