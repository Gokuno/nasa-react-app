export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            <img src={data.hdurl} atl={data.title || 'bg-img'} className="bgImage" />
        </div>
    )
}