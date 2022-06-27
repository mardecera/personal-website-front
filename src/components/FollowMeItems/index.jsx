import { aboutFollowMeItems } from '../../consts'

const FollowMeItems = () => {
    return aboutFollowMeItems.map((item, index) => (
        <li key={index}>
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`open user ${item.name}`}
            >
                <span className={`icon-${item.name.toLowerCase()}`}></span>
            </a>
        </li>
    ))
}

export default FollowMeItems
