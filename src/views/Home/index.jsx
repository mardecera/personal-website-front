import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { imagotipo, astros, myPhoto } from '../../assets'
import * as constants from '../../consts'
import { ButtonToTop, ButtonMessage, Footer } from '../../components'
import { useWindowDimensions } from '../../hooks'
import styles from './index.module.css'

const Home = () => {
    const { width } = useWindowDimensions()
    const [menuBar, setMenuBar] = useState(true)
    const [stateMenu, setStateMenu] = useState('')
    const [stateNavbar, setStateNavbar] = useState('')
    const [stateCloseMenu, setStateCloseMenu] = useState('')

    useEffect(() => {
        if (width < 768) {
            setMenuBar(true)
            setStateMenu('show')
            setStateNavbar('hiddenNavbar')
            setStateCloseMenu('show')
        } else {
            setMenuBar(false)
            setStateMenu('hidden')
            setStateNavbar('show')
            setStateCloseMenu('hidden')
        }
    }, [width])

    const handleToggleMenu = () => {
        setStateNavbar(
            stateNavbar === 'showNavbar' ? 'hiddenNavbar' : 'showNavbar'
        )
    }

    const handleCloseMenuBar = () => {
        if (menuBar) setStateNavbar('hiddenNavbar')
    }

    return (
        <>
            <div className={styles.navbar} id="navbar">
                <div>
                    <Link to={'/'} className={styles.navbarLogo}>
                        <figure className={styles.logo}>
                            <img src={imagotipo} alt="logo" />
                        </figure>
                        <p>{constants.logotipo}</p>
                    </Link>
                </div>
                <nav className={`${styles.navbarButtons} ${stateNavbar}`}>
                    <ul className={styles.navbarButtonsList}>
                        <li>
                            <a
                                href="/#home"
                                onClick={() => handleCloseMenuBar()}
                            >
                                {constants.homeTitle}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#about"
                                onClick={() => handleCloseMenuBar()}
                            >
                                {constants.aboutTitle}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#hobbies"
                                onClick={() => handleCloseMenuBar()}
                            >
                                {constants.hobbiesTitle}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#skills"
                                onClick={() => handleCloseMenuBar()}
                            >
                                {constants.skillsTitle}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#projects"
                                onClick={() => handleCloseMenuBar()}
                            >
                                {constants.projectsTitle}
                            </a>
                        </li>
                    </ul>
                    <button
                        className={`${styles.closeMenu} ${stateCloseMenu}`}
                        onClick={() => handleToggleMenu()}
                    >
                        x
                    </button>
                </nav>
                <div className={`${styles.navbarContactme} `}>
                    <ButtonMessage width={width} />
                </div>
                <div className={`${styles.navbarMenu} ${stateMenu}`}>
                    <button
                        className={styles.menuButton}
                        onClick={() => handleToggleMenu()}
                        arial-label="Button show menu buttons"
                    >
                        <span className="icon-tree-dots"></span>
                    </button>
                </div>
                <ButtonToTop />
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
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutImage}>
                            <figure>
                                <img src={myPhoto} alt="me" />
                            </figure>
                        </div>
                        <div className={styles.aboutInfo}>
                            <div className={styles.aboutTitle}>
                                {constants.aboutTitle}
                            </div>
                            <div className={styles.aboutSubTitle}>
                                <p>
                                    {/* Soy alguien entusiasta por las programación web */}
                                    {constants.aboutSubTitle}
                                </p>
                            </div>
                            <div className={styles.aboutDescription}>
                                <p>{constants.aboutContent}</p>
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
                                                    aria-label='open user twitter'
                                                >
                                                    <span className="icon-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://github.com/Mardecera"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label='open user github'
                                                >
                                                    <span className="icon-github"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/mardecera"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label='open user instagram'
                                                >
                                                    <span className="icon-instagram"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.aboutDownloadCV}>
                                <a href="/docs/cv.pdf" download={'CV'}>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hobbies} id="hobbies">
                <div className={styles.hobbiesContainer}>
                    <div className={styles.hobbiesContent}>
                        <div className={styles.hobbiesTitle}>
                            {constants.hobbiesTitle}
                        </div>
                        <div className={styles.hobbiesSubTitle}>
                            {/* Los hobbies son esenciales para un equilibrio */}
                            {constants.hobbiesSubTitle}
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
            </div>
            <div className={styles.skills} id="skills">
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsContent}>
                        <div className={styles.skillsTitle}>
                            {constants.skillsTitle}
                        </div>
                        <div className={styles.skillsSubTitle}>
                            {/* Las skills se desarrollan y mejoran continuamente */}
                            {constants.skillsSubTitle}
                        </div>
                        <div className={styles.skillsList}>
                            <div className={styles.skillsListContainer}>
                                <ul>
                                    <li>
                                        <div className={styles.hobbiesListItem}>
                                            <span className="icon-javascript"></span>
                                            <div className={styles.itemName}>
                                                JavaScript
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
                                                Html5
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.hobbiesListItem}>
                                            <span className="icon-css3"></span>
                                            <div className={styles.itemName}>
                                                Css3
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
            </div>
            <div className={styles.projects} id="projects">
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsContent}>
                        <div className={styles.projectsTitle}>
                            {constants.projectsTitle}
                        </div>
                        <div className={styles.projectsSubTitle}>
                            {/* Estos son algunos de mis proyectos */}
                            {constants.projectsSubTitle}
                        </div>
                        <div className={styles.projectsList}>
                            <div className={styles.projectsListContainer}>
                                <ul>
                                    <li
                                        className={
                                            styles.projectPasswordGenerator
                                        }
                                    >
                                        <a
                                            href="https://passwordgenerator.mardecera.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p>Password generator</p>
                                        </a>
                                    </li>
                                    <li
                                        className={styles.projectInstagramClone}
                                    >
                                        <a
                                            href="https://passwordgenerator.mardecera.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p>Instagram clone</p>
                                        </a>
                                    </li>
                                    <li className={styles.projectWeather}>
                                        <a
                                            href="https://passwordgenerator.mardecera.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p>Weather</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
