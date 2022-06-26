import { Link } from 'react-router-dom'
import { imagotipo } from '../../assets'
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.copy}>
                    <Link to={'/'} className={styles.logo}>
                        <figure className={styles}>
                            <img src={imagotipo} alt="logo" />
                        </figure>
                    </Link>
                    <span>
                        &copy; <p>mardecera 2022</p>{' '}
                    </span>
                </div>
                <div className={styles.redes}>
                    <span>FollowMe on:</span>
                    <ul>
                        <li>
                            <a
                                href="https://twitter.com/mardecera"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Mardecera"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-github"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/mardecera"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-instagram"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
