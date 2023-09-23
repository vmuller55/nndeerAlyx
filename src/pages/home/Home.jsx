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
            <section className="homeHeader">
                <Header/>
            </section>
            <section className="bio">
                <Bio/>
            </section>
            <section className="bioTwo">
                <BioTwo/>
            </section>
            <section className="video">
                <VideoCapture/>
            </section>
            <section className="formations">
                <Forma/>
            </section>
            <section className="work">
                <Work/>
            </section>
            <section className="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Home