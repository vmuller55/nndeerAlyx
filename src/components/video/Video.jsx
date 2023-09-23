import './video.css'
import Video from '../../assets/capture.mp4'
import ExploSmoke from '../../assets/exploSmoke.png'

const VideoCapture = () => {
    return(
        <div className="videoContainer">
            <div className="videoContent">
                <video controls autoPlay muted loop>
                    <source src={Video} type='video/mp4'></source>
                </video>
            </div>
            <div className="exploSmoke">
                <img src={ExploSmoke} alt='smoke explosion for style'></img>
            </div>
        </div>
    )
}
export default VideoCapture