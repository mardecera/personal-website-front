import styles from './index.module.css'

const ButtonToTop = () => {
    const handleToTop = () => document.documentElement.scrollTop = 0

    return (
        <button className={styles.toTop} onClick={() => handleToTop()} arial-label="Button To Top">
            <span className="icon-arrow-up"></span>
        </button>
    )
}

export default ButtonToTop
