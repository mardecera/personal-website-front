import FollowMeItems from '../FollowMeItems'
import { myPhoto } from '../../assets'
import * as constants from '../../consts'
import styles from './index.module.css'

const SectionAboutMe = () => {
    return (
        <section className={styles.about} id="about">
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
                            <p>{constants.aboutSubTitle}</p>
                        </div>
                        <div className={styles.aboutDescription}>
                            <p>{constants.aboutContent}</p>
                        </div>
                        <div className={styles.aboutFollowMe}>
                            <div className={styles.aboutFollowMeContain}>
                                <span>Follow me: </span>
                                <span>
                                    <ul>
                                        <FollowMeItems />
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className={styles.aboutDownloadCV}>
                            <a
                                href="/docs/cv.pdf"
                                download={'Jonathan-Alarcón-cv'}
                                aria-label="Download cv"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAboutMe
