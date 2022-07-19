import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logotipo } from '../../consts'
import { imagotipo } from '../../assets'
import { useWindowDimensions } from '../../hooks'
import { CloseIcon, MenuIcon } from '../../icons'
import ButtonToTop from '../ButtonToTop'
import ButtonMessage from '../ButtonMessage'
import ButtonsToSections from '../ButtonsToSections'
import styles from './index.module.css'

const Header = () => {
   const { width } = useWindowDimensions()
   const [menuBar, setMenuBar] = useState(true)
   const [stateMenu, setStateMenu] = useState('show')
   const [stateNavbar, setStateNavbar] = useState('hidden')
   const [stateCloseMenu, setStateCloseMenu] = useState('show')

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
      <div className={styles.navbar} id="navbar">
         <div>
            <Link to={'/'} className={styles.navbarLogo}>
               <figure className={styles.logo}>
                  <img src={imagotipo} alt="logo" />
               </figure>
               <p>{logotipo}</p>
            </Link>
         </div>
         <nav className={`${styles.navbarButtons} ${stateNavbar}`}>
            <ButtonsToSections handleFunction={handleCloseMenuBar} />
            <button
               className={`${styles.closeMenu} ${stateCloseMenu}`}
               onClick={() => handleToggleMenu()}
               aria-label="Close Menu"
            >
               <CloseIcon fill={'black'} />
            </button>
         </nav>
         <ButtonMessage width={width} />
         <div className={`${styles.navbarMenu} ${stateMenu}`}>
            <button
               className={styles.menuButton}
               onClick={() => handleToggleMenu()}
               aria-label="Button show menu buttons"
            >
               <MenuIcon />
            </button>
         </div>
         <ButtonToTop />
      </div>
   )
}

export default Header
