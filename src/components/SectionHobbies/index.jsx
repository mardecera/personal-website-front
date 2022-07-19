import { hobbiesTitle, hobbiesSubTitle } from '../../consts'
import HobbiesItems from '../HobbiesItems'
import styles from './index.module.css'

const SectionHobbies = () => {
  return (
    <div className={styles.hobbies} id="hobbies">
      <div className={styles.hobbiesContainer}>
        <div className={styles.hobbiesContent}>
          <div className={styles.hobbiesTitle}>{hobbiesTitle}</div>
          <div className={styles.hobbiesSubTitle}>{hobbiesSubTitle}</div>
          <div className={styles.hobbiesList}>
            <div className={styles.hobbiesListContain}>
              <ul>
                <HobbiesItems />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHobbies
