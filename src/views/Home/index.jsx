import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import styles from './index.module.css'
import logo from '/images/logo.svg'
import astros from '/images/astros.svg'
import photo from '/images/me_character.svg'

const Home = () => {
    return (
        <>
            <div className={styles.navbar} id="navbar">
                <div>
                    <Link to={'/'} className={styles.navbarLogo}>
                        <figure className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </figure>
                        <p>Mardecera</p>
                    </Link>
                </div>
                <nav className={styles.navbarButtons}>
                    <ul className={styles.navbarButtonsList}>
                        <li>
                            <a href="/#home">Home</a>
                        </li>
                        <li>
                            <a href="/#about">About me</a>
                        </li>
                        <li>
                            <a href="/#hobbies">Hobbies</a>
                        </li>
                        <li>
                            <a href="/#skills">Skills</a>
                        </li>
                        <li>
                            <a href="/#projects">Projects</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.navbarContactme}>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className={styles.home} id="home">
                <div className={styles.homeContainer}>
                    <div className={styles.homeInfo}>
                        <div className={styles.homeInfoContainer}>
                            <div className={styles.homeInfoTitle}>Hi! I'm</div>
                            <div className={styles.homeInfoName}>
                                <p>Jonathan</p>
                                <p>Alarcón</p>
                            </div>
                            {/* <div className={styles.homeInfoJob}>
                                {'<Junior frontend developer/>'}
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.homePicture}>
                        <figure>
                            <img src={astros} alt="astros" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className={styles.about} id="about">
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutImage}>
                        <figure>
                            <img src={photo} alt="me" />
                        </figure>
                    </div>
                    <div className={styles.aboutInfo}>
                        <div className={styles.aboutTitle}>About me</div>
                        <div className={styles.aboutSubTitle}>
                            <p>
                                {/* Soy alguien entusiasta por las programación web */}
                                I am someone who is enthusiastic about web
                                programming
                            </p>
                        </div>
                        <div className={styles.aboutDescription}>
                            <p>
                                I’m an enthusiastic person to learn new ways of
                                programming, proactive and energetic. I've
                                developed some web pages from scratch using only
                                css, html and js, without frameworks; but,
                                React.js is really getting me excited.
                            </p>
                        </div>
                        <div className={styles.aboutFollowMe}>
                            <div className={styles.aboutFollowMeContain}>
                                <span>Follow me: </span>
                                <span>
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
                                </span>
                            </div>
                        </div>
                        <div className={styles.aboutDownloadCV}>
                            <a href="/docs/cv.pdf" download={'CV'}>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hobbies} id="hobbies">
                <div className={styles.hobbiesContainer}>
                    <div className={styles.hobbiesTitle}>Hobbies</div>
                    <div className={styles.hobbiesSubTitle}>
                        {/* Los hobbies son esenciales para un equilibrio */}
                        Hobbies are essential for a balance
                    </div>
                    <div className={styles.hobbiesList}>
                        <div className={styles.hobbiesListContain}>
                            <ul>
                                <li className={styles.itemPhotography}>
                                    <div>
                                        <div className={styles.itemTitle}>
                                            Photography
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.itemCinema}>
                                    <div>
                                        <div className={styles.itemTitle}>
                                            Cinema
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.itemDraw}>
                                    <div>
                                        <div className={styles.itemTitle}>
                                            Draw
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.itemProgramming}>
                                    <div>
                                        <div className={styles.itemTitle}>
                                            Programming
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.skills} id="skills">
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsTitle}>Skills</div>
                    <div className={styles.skillsSubTitle}>
                        {/* Las skills se desarrollan y mejoran continuamente */}
                        Skills are continuously developed and improved
                    </div>
                    <div className={styles.skillsList}>
                        <div className={styles.skillsListContainer}>
                            <ul>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-javascript"></span>
                                        <div className={styles.itemName}>
                                            Javascript
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-git"></span>
                                        <div className={styles.itemName}>
                                            Git
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-html"></span>
                                        <div className={styles.itemName}>
                                            Html
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-css3"></span>
                                        <div className={styles.itemName}>
                                            Css
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-react"></span>
                                        <div className={styles.itemName}>
                                            React Js
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-figma"></span>
                                        <div className={styles.itemName}>
                                            Figma
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <span className="icon-sass"></span>
                                        <div className={styles.itemName}>
                                            Sass
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.projects} id="projects">
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsTitle}>Projects</div>
                    <div className={styles.projectsSubTitle}>
                        {/* Estos son algunos de mis proyectos */}
                        These are some of my projects
                    </div>
                    <div className={styles.projectsList}>
                        <div className={styles.projectsListContainer}>
                            <ul>
                                <li className={styles.projectPasswordGenerator}>
                                    <a href="https://passwordgenerator.mardecera.com" target="_blank" rel='noopener noreferrer'>
                                        <p>Password generator</p>
                                    </a>
                                </li>
                                <li className={styles.projectInstagramClone}>
                                    <a  href="https://passwordgenerator.mardecera.com" target="_blank" rel='noopener noreferrer'>
                                        <p>Instagram clone</p>
                                    </a>
                                </li>
                                <li className={styles.projectWeather}>
                                    <a  href="https://passwordgenerator.mardecera.com" target="_blank" rel='noopener noreferrer'>
                                        <p>Weather</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
