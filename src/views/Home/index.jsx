import { Link, NavLink } from 'react-router-dom'
import styles from './index.module.css'
import logo from '/images/logo.svg'
import astros from '/images/astros.svg'
import photo from '/images/me_character.svg'
import twitter from '/images/twitter.svg'
import github from '/images/github.svg'
import instagram from '/images/instagram.svg'
import figma from '/images/figma.svg'
import git from '/images/git.svg'
import html from '/images/html.svg'
import javascript from '/images/javascript.svg'
import react from '/images/react.svg'
import sass from '/images/sass.svg'
import css from '/images/css3.svg'

const Home = () => {
    return (
        <>
            <div className={styles.navbar}>
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
                        <div className={styles.homeInfoTitle}>Hi! My names is</div>
                        <div className={styles.homeInfoName}>Jonathan Alarcon</div>
                        <div className={styles.homeInfoJob}>
                            {'<Junior frontend developer/>'}
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
                <div className={styles.aboutImage}>
                    <figure>
                        <img src={photo} alt="me" />
                    </figure>
                </div>
                <div className={styles.aboutInfo}>
                    <div className={styles.aboutTitle}>About me</div>
                    <div className={styles.aboutSubTitle}>
                        <p>Soy alguien entusiasta por las programación web</p>
                    </div>
                    <div className={styles.aboutDescription}>
                        <p>
                            I’m an enthusiastic person to learn new ways of
                            programming, proactive and energetic. I've developed
                            some web pages from scratch using only css, html and
                            js, without frameworks; but, React.js is really
                            getting me excited.
                        </p>
                    </div>
                    <div className={styles.aboutFollowMe}>
                        <div className={styles.aboutFollowMeContain}>
                            <span>Follow me: </span>
                            <span>
                                <ul>
                                    <li>
                                        <img src={twitter} alt="twitter" />
                                    </li>
                                    <li>
                                        <img src={github} alt="twitter" />
                                    </li>
                                    <li>
                                        <img src={instagram} alt="twitter" />
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div className="aboutDownloadCV">
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
            <div className={styles.hobbies} id="hobbies">
                <div className={styles.hobbiesContainer}>
                    <div className={styles.hobbiesTitles}>Hobbies</div>
                    <div className={styles.hobbiesSubTitle}>
                        Los hobbies son esenciales para un equilibrio
                    </div>
                    <div className={styles.hobbiesList}>
                        <div className={styles.hobbiesListContain}>
                            <ul>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemTitle}>
                                            Photografy
                                        </div>
                                        <div
                                            className={styles.itemDescription}
                                        ></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemTitle}>
                                            Cinema
                                        </div>
                                        <div
                                            className={styles.itemDescription}
                                        ></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemTitle}>
                                            Draw
                                        </div>
                                        <div
                                            className={styles.itemDescription}
                                        ></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemTitle}>
                                            Programming
                                        </div>
                                        <div
                                            className={styles.itemDescription}
                                        ></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.skills} id="skills">
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsTitles}>Skills</div>
                    <div className={styles.skillsSubTitle}>
                        Las skills se desarrollan y mejoran continuamente
                    </div>
                    <div className={styles.skillsList}>
                        <div className={styles.skillsListContainer}>
                            <ul>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img
                                                src={javascript}
                                                alt="javascript"
                                            />
                                        </div>
                                        <div className={styles.itemName}>
                                            Javascript
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={git} alt="git" />
                                        </div>
                                        <div className={styles.itemName}>
                                            Git
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={html} alt="html" />
                                        </div>
                                        <div className={styles.itemName}>
                                            Html
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={css} alt="css" />
                                        </div>
                                        <div className={styles.itemName}>
                                            Css
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={react} alt="react" />
                                        </div>
                                        <div className={styles.itemName}>
                                            React Js
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={figma} alt="figma" />
                                        </div>
                                        <div className={styles.itemName}>
                                            Figma
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.hobbiesListItem}>
                                        <div className={styles.itemIcon}>
                                            <img src={sass} alt="sass" />
                                        </div>
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
                    <div className={styles.projectsTitles}>Projects</div>
                    <div className={styles.projectsSubTitle}>
                        Estos son algunos de mis proyectos
                    </div>
                    <div className={styles.projectsList}>
                        <div className={styles.projectsListContainer}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
