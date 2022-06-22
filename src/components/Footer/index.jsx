import styles from './index.module.css'
import logo from '/images/logo.svg'
import twitter from '/images/twitter.svg'
import github from '/images/github.svg'
import instagram from '/images/instagram.svg'
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
                            <img src={twitter} alt="twitter" />
                        </li>
                        <li>
                            <img src={github} alt="github" />
                        </li>
                        <li>
                            <img src={instagram} alt="instagram" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
