import { sectionNames } from '../../consts'
import styles from './index.module.css'

const ButtonsToSections = ({ handleFunction }) => {
    return (
        <ul className={styles.navbarButtonsList}>
            {sectionNames.map((sectionName, index) => (
                <li key={index}>
                    <a
                        href={`/#${sectionName.toLowerCase()}`}
                        onClick={() => handleFunction()}
                        aria-label={`go to ${sectionName}`}
                    >
                        {sectionName}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default ButtonsToSections
