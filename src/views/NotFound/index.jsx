import { Link } from 'react-router-dom'
import { error404Image } from '../../assets'
import { notFoundMessage, notFoundButtonGoTo } from '../../consts'
import styles from './index.module.css'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <img src={error404Image} alt="404" />
                <p>{notFoundMessage}</p>
                <Link
                    className={styles.goToHome}
                    to="/"
                    aria-label={notFoundButtonGoTo}
                >
                    <span className="icon-arrow-left"></span>
                    <p>{notFoundButtonGoTo}</p>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
