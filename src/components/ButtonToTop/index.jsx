import styles from './index.module.css'

const ButtonToTop = ({ handleClick }) => {
    return (
        <button className={styles.toTop} onClick={() => handleClick()}>
            <span className="icon-arrow-up"></span>
        </button>
    )
}

export default ButtonToTop
