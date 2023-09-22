import './contact.css'
import InstaLogo from '../../assets/insta.webp'

const Contact = () => {
    return(
        <div className="contactContainer">
            <div className="contactContent">
                <h2>Me contacter :</h2>
                <h3>Par mail</h3>
                <a href='mailto:formation@deeralyx.fr' className='mailButton'>Formations@deeralyx.fr</a>
                <h3>Retrouvez mon travail sur instagram :</h3>
                <a href='https://www.instagram.com/deer.alyx.onglerie/'><img src={InstaLogo} alt='instagram' className='instaLogo'></img></a>
            </div>
        </div>
    )
}

export default Contact