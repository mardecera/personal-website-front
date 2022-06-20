import { Link } from 'react-router-dom'
import styles from './index.module.css'
import notFoundSVG from '/images/404-notFound.svg'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <img src={notFoundSVG} alt="404" />
                <p>Lo sentimos, esta pagina no se pudo encontrar.</p>
                <Link className={styles.goToHome} to="/">Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFound