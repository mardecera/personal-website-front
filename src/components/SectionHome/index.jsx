import styles from './index.module.css'
import { astros } from '../../assets'

const SectionHome = () => {
    return (
        <div className={styles.home} id="home">
                <div className={styles.homeContainer}>
                    <div className={styles.homeInfo}>
                        <div className={styles.homeInfoContainer}>
                            <div className={styles.homeInfoTitle}>Hi! I'm</div>
                            <div className={styles.homeInfoName}>
                                <p>Jonathan</p>
                                <p>Alarcón</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homePicture}>
                        <figure>
                            <img src={astros} alt="astros" />
                        </figure>
                    </div>
                </div>
            </div>
    );
}
 
export default SectionHome;