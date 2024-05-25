export default function Footer(props) {
    const {showModal, handleToggleModal } = props
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>
                    El Paisaje De Marte
                </h2>
                <h1>
                    PROYECTO DE APOD
                </h1>
                
            </div>
            <button onClick={handleToggleModal}>
                <i class="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}