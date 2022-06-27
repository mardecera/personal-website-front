import styles from './index.module.css'

const ButtonMessage = ({ width }) => {
    const sendEmail = () =>
        window.open('mailto:mardecera.personal@gmail.com', 'mail')

    if (width <= 1440) {
        return (
            <div className={styles.navbarContactme}>
                <button onClick={() => sendEmail()} aria-label="Send Email">
                    <span className="icon-send"></span>
                </button>
            </div>
        )
    }
    return (
        <div className={styles.navbarContactme}>
            <button onClick={() => sendEmail()} aria-label="Send Email">
                Contact me
            </button>
        </div>
    )
}
export default ButtonMessage
