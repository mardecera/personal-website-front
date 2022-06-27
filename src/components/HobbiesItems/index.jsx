import { hobbiesList } from '../../consts'
import styles from './index.module.css'

const HobbiesItems = () => {
    return hobbiesList.map((item, index) => {
        return (
            <li className={styles[`item${item}`]} key={index}>
                <div>
                    <div className={styles.itemTitle}>{item}</div>
                </div>
            </li>
        )
    })
}

export default HobbiesItems
