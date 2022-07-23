import { ArrowTopIcon } from '../../icons'
import styles from './index.module.css'

const ButtonToTop = () => {
   const handleToTop = () => (document.documentElement.scrollTop = 0)

   return (
      <button
         className={styles.toTop}
         onClick={() => handleToTop()}
         aria-label="Button To Top"
      >
         <ArrowTopIcon />
      </button>
   )
}

export default ButtonToTop
