import './video.css'
import Video from '../../assets/capture.mp4'

const VideoCapture = () => {
    return(
        <div className="videoContainer">
            <div className="videoContent">
                <video controls autoPlay muted loop>
                    <source src={Video} type='video/mp4'></source>
                </video>
            </div>
        </div>
    )
}
export default VideoCapture