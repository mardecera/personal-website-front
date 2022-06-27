import { projectsList } from '../../consts'
import styles from './index.module.css'

const ProjectsItems = () => {
    return projectsList.map((project, index) => (
        <li className={styles.projectInstagramClone} key={index}>
            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`to go the project ${project.name}"`}
            >
                <p>{project.name}</p>
            </a>
        </li>
    ))
}

export default ProjectsItems
