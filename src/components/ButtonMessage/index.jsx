const ButtonMessage = ({ width }) => {
    const sendEmail = () =>
        window.open('mailto:mardecera.personal@gmail.com', 'mail')

    if (width <= 1440) {
        return (
            <button onClick={() => sendEmail()} aria-label="Send Email">
                <span className="icon-send"></span>
            </button>
        )
    }
    return <button onClick={() => sendEmail()} aria-label="Send Email">Contact me</button>
}
export default ButtonMessage
