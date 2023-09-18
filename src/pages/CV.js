import styles from './cv.module.css'
import { AiOutlineCloudDownload } from 'react-icons/ai';
function CV (){
    const fileUrl = 'teste.txt';
    const fileName = 'teste.txt';

    return (
        <>
      
        <h3 className={styles.descricao}>Clica que baixar meu Currículo</h3>
        
        
        <div className={styles.containerDown}>
        
        <a  href="michel.pdf" download className={styles.down}>teste</a>
        <p>Download</p>
        </div>
       
        </>
    )
}

export default CV;