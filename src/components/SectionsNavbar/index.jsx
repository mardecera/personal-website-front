import { sectionNames } from '../../consts'

const SectionsNavbar = ({ handleFunction }) => {
    return sectionNames.map((sectionName, index) => (
        <li key={index}>
            <a
                href={`/#${sectionName.toLowerCase()}`}
                onClick={() => handleFunction()}
                aria-label={`go to ${sectionName}`}
            >
                {sectionName}
            </a>
        </li>
    ))
}

export default SectionsNavbar
