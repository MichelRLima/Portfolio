import styles from './contato.module.css'
import { AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Contato (){

    return(
    <>
    <h2 className={styles.titulo}>Contato</h2>

    <div className={styles.containerContato}>
         <div className={styles.contato}>
           
            <a href='mailto:michelrocha502@gmail.com' target='_blanck'> <AiOutlineMail size={40} /> </a>
            <p>michelrocha502@gmail.com</p>
         </div>

         <div className={styles.contato}>
            <a href='https://wa.me/5584998120957' target='_blanck'><AiOutlineWhatsApp color='#34af23' size={40} /></a>
           
            <p>+55 84 99812-0957</p>
         </div>

         <div className={styles.contato}>
             
            <a href='https://www.linkedin.com/in/michel-rocha-01b550210/' target='_blanck'><AiFillLinkedin color='#0e76a8' size={40} /></a>
            <p><a href='https://www.linkedin.com/in/michel-rocha-01b550210/' target='_blanck'>Michel Rocha</a></p>
         </div>

         <div className={styles.contato}>
             
           <a href='https://github.com/MichelRLima' target='_blanck'><AiFillGithub color='#181717' size={40} /></a>
            <p><a href='https://github.com/MichelRLima' target='_blanck'>Michel Rocha</a></p>
         </div>
    </div>
    
    </>
    )
}

export default Contato