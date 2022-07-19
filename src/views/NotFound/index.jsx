import { Link } from 'react-router-dom'
import { error404Image } from '../../assets'
import { notFoundMessage, notFoundButtonGoTo } from '../../consts'
import { ArrowLeftIcon } from '../../icons'
import styles from './index.module.css'

const NotFound = () => {
   return (
      <div className={styles.container}>
         <div className={styles.contain}>
            <img src={error404Image} alt="404" />
            <p>{notFoundMessage}</p>
            <Link
               to="/"
               className={styles.goToHome}
               aria-label={notFoundButtonGoTo}
            >
               <ArrowLeftIcon fill={'#ff725e'} />
               <p>{notFoundButtonGoTo}</p>
            </Link>
         </div>
      </div>
   )
}

export default NotFound
