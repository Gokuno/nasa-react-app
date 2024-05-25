export default function SideBar(props) {
    const { handleToggleModal } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            < div className="sidebarContent">
                <h2>El Paisaje de Marte</h2>
                    <div>
                        <p>
                        Descripcion
                        </p>
                        <p>
                        jkahjsadjahsdaj kasksaksa lksalks alj lsadjl sdal lsd alds jaldjlas ljadldaljd dhfiggfibnag  gna  g nasnsfanfsan aslkfsakl.
                        </p>
                    </div>
                    <button onClick={handleToggleModal}>
                        <i className="fa-solid fa-right-long"></i>
                    </button>
            </div>
        </div>
    )
}