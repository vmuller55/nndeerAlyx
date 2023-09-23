/* eslint-disable react/no-unescaped-entities */
import './contact.css'
import InstaLogo from '../../assets/insta.webp'
import Smoke from '../../assets/smoke.png'

const Contact = () => {
    return(
        <div className="contactContainer">
            <div className="contactContent">
                <h2>Me contacter</h2>
                <h3>Pour toutes demandes de formation ou questions relatives merci de me contacter par mail à l'adresse suivante :</h3>
                <a href='mailto:formation@deeralyx.fr' className='mailButton'>Formations@deeralyx.fr</a>
                <h3>Retrouvez mon travail sur instagram :</h3>
                <a href='https://www.instagram.com/deer.alyx.onglerie/'><img src={InstaLogo} alt='instagram' className='instaLogo'></img></a>
            </div>
            <div className="smokeContainer">
                <img src={Smoke} alt='smoke style'></img>
            </div>
        </div>
    )
}

export default Contact