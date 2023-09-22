import './forma.css'
import ongle4 from '../../assets/ongle4.jpg'
import ongle5 from '../../assets/ongle5.jpg'
import ongle6 from '../../assets/ongle6.jpg'
import StainTwo from '../../assets/stainTwo.png'

const Forma = () => {
    return(
        <div className="formaContainer">
            <div className="formaContent">
                <h2>Mes formations</h2>
                <ul className="formaTab">
                    <li className="forma">
                        <div className="colorBandTop"></div><img src={ongle4} alt='pose ongulaire'></img><div className="colorBandBottom"></div>
                        <h3 className='formaTitle'>Perfectionnement Gel</h3>
                    </li>
                    <li className="forma">
                        <div className="colorBandTop"></div><img src={ongle5} alt='pose ongulaire'></img><div className="colorBandBottom"></div>
                        <h3 className='formaTitle'>Perfectionnement BabyBoomer</h3>
                    </li>
                    <li className="forma">
                        <div className="colorBandTop"></div><img src={ongle6} alt='pose ongulaire'></img><div className="colorBandBottom"></div>
                        <h3 className='formaTitle'>Coaching Personnel</h3>
                    </li>
                </ul>
            </div>
            <div className="formaList">
                <div className="formaDetail">
                    <h3>Perfectionnement Gel</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Révisions des bases</p>
                    <p>Préparation de la plaque</p>
                    <p>Manucure express</p>
                    <p>Extensions multi technique</p>
                    <p>Travail de différentes formes</p>
                    <p>Couleur sous cuticule</p>
                    <p>French paint</p>
                    <p>Incrustations</p>
                    <p>French reverse</p>
                </div>
                <div className="formaDetail">
                    <h3>Perfectionnement BabyBoomer</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Révisions des bases</p>
                    <p>Préparation de la plaque</p>
                    <p>Manucure express</p>
                    <p>Extensions multi technique</p>
                    <p>Travail de différentes formes</p>
                    <p>BabyBoomer en construction</p>
                    <p>BabyGlitter</p>
                    <p>BabyColor</p>
                    <p>BabyEffect</p>
                    <p>Ombré Milky</p>
                </div>
                <div className="formaDetail coaching">
                    <h3>Coaching Personnel</h3>
                    <h4>14h - 2 jours</h4>
                    <p>Le coaching privé est entièrement personnalisée</p>
                    <p>Le programme est fait sur mesure afin de s adapter au mieux aux besoins de l élève</p>
                </div>
            </div>
            <div className="stainTwo">
                <img src={StainTwo} alt="stain red" />
            </div>
        </div>
    )
}

export default Forma