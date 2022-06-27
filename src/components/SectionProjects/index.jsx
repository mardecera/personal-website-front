import { projectsTitle, projectsSubTitle } from '../../consts'
import ProjectsItems from '../ProjectsItems'
import styles from './index.module.css'

const SectionProjects = () => {
    return (
        <div className={styles.projects} id="projects">
            <div className={styles.projectsContainer}>
                <div className={styles.projectsContent}>
                    <div className={styles.projectsTitle}>{projectsTitle}</div>
                    <div className={styles.projectsSubTitle}>
                        {projectsSubTitle}
                    </div>
                    <div className={styles.projectsList}>
                        <div className={styles.projectsListContainer}>
                            <ul>
                                <ProjectsItems />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionProjects
