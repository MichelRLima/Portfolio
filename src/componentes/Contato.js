import styles from './contato.module.css'
import { AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';

function Contato (){

    return(
    <>
    <h2 className={styles.titulo}>Contato</h2>

    <div className={styles.containerContato}>
         <div className={styles.contato}>
            <AiOutlineMail size={40} /> 
            <p>michelrocha502@gmail.com</p>
         </div>

         <div className={styles.contato}>
            <AiOutlineWhatsApp color='#34af23' size={40} /> 
           
            <p>+55 84 99812-0957</p>
         </div>

         <div className={styles.contato}>
            <AiFillLinkedin color='#0e76a8' size={40} /> 
           
            <p><a href='https://www.linkedin.com/in/michel-rocha-01b550210/' target='_blanck'>Michel Rocha</a></p>
         </div>
    </div>
    
    </>
    )
}

export default Contato