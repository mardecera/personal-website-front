import styles from './index.module.css'
import logo from '/images/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.copy}>
                    <Link to={'/'} className={styles.logo}>
                        <figure className={styles}>
                            <img src={logo} alt="logo" />
                        </figure>
                    </Link>
                    <span>&copy; <p>mardecera 2022</p> </span>
                </div>
                <div className={styles.redes}>
                    <span>FollowMe on:</span>
                    <ul>
                        <li>
                            <span className='icon-twitter'></span>
                        </li>
                        <li>
                            <span className='icon-github'></span>
                        </li>
                        <li>
                            <span className='icon-instagram'></span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
