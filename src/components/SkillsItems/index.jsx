import { skillsList } from '../../consts'
import styles from './index.module.css'

const SkillsItems = () => {
    return skillsList.map((skill, index) => (
        <li key={index}>
            <div className={styles.skillsListItem}>
                <div className={`icon-${skill.toLowerCase()}`}></div>
                <div>{skill}</div>
            </div>
        </li>
    ))
}

export default SkillsItems
