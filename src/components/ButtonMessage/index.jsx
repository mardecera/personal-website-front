import { SendMessageIcon } from '../../icons'
import { email } from '../../consts'
import styles from './index.module.css'

const ButtonMessage = ({ width }) => {
   const sendEmail = () => window.open(`mailto:${email}`, 'mail')

   if (width <= 1440) {
      return (
         <div className={styles.navbarContactme}>
            <button onClick={() => sendEmail()} aria-label="Send Email">
               <SendMessageIcon />
            </button>
         </div>
      )
   }
   return (
      <div className={styles.navbarContactme}>
         <button onClick={() => sendEmail()} aria-label="Send Email">
            Contact me
         </button>
      </div>
   )
}
export default ButtonMessage
