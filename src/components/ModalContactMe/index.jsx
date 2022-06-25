import styles from './index.module.css'

const ModalContactMe = () => {
    return (
        <div className={StyleSheet.modalContactMe}>
            <div className={styles.container}>
                <form className={styles.content}>
                    <div className={styles.modalTitle}>
                        
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.field}>
                            <label htmlFor="">E-mail</label>
                            <input
                                type="text"
                                placeholder="Your email address"
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="">E-mail</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder='Tu mensaje'
                            ></textarea>
                        </div>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.sendEmail}>Send</button>
                    </div>
                    <div className={styles.closeButton}>
                        <span className="icon-close"></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalContactMe
