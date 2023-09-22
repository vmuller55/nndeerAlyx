import './home.css'
import Header from '../../components/header/Header'
import BioTwo from '../../components/bioTwo/BioTwo'
import Bio from '../../components/bio/Bio'
import VideoCapture from '../../components/video/Video'
import Forma from '../../components/forma/Forma'
import Work from '../../components/work/Work'
import Contact from '../../components/contact/Contact'

const Home = () => {
    return(
        <div className="homeContainer">
            <div className="homeHeader">
                <Header/>
            </div>
            <div className="bio">
                <Bio/>
            </div>
            <div className="bioTwo">
                <BioTwo/>
            </div>
            <div className="video">
                <VideoCapture/>
            </div>
            <div className="formations">
                <Forma/>
            </div>
            <div className="work">
                <Work/>
            </div>
            <div className="contact">
                <Contact/>
            </div>
        </div>
    )
}

export default Home