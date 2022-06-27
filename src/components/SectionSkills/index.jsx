import SkillsItems from '../SkillsItems'
import { skillsTitle, skillsSubTitle } from '../../consts'
import styles from './index.module.css'

const SectionSkills = () => {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.skillsContainer}>
                <div className={styles.skillsContent}>
                    <div className={styles.skillsTitle}>{skillsTitle}</div>
                    <div className={styles.skillsSubTitle}>
                        {skillsSubTitle}
                    </div>
                    <div className={styles.skillsList}>
                        <div className={styles.skillsListContainer}>
                            <ul>
                                <SkillsItems />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSkills
