import styles from './projetos.module.css'
function Projetos (){

    return(
        <>
       
        <br/>
        <h2 className={styles.titulo}>Projetos</h2>

        <div className={styles.containerProjetos}>

       
            <div className={styles.projeto}>
                <h3>Jogo da Velha</h3>
                <div className={styles.jogoDaVelha}></div>
                
            
            </div>
     

            <div className={styles.projeto}>
                <h3>Buscar CEP</h3>
                <div className={styles.buscarCep}></div>

            </div>

            <div className={styles.projeto}>
            <h3>Projeto</h3>

            </div>

            <div className={styles.projeto}>
            <h3>Projeto</h3>

            </div>

            

        </div>
        </>
    )
}

export default Projetos