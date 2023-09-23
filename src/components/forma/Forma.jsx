import './forma.css'
import ongle4 from '../../assets/ongle4.jpg'
import ongle5 from '../../assets/ongle5.jpg'
import ongle6 from '../../assets/ongle6.jpg'


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
        </div>
    )
}

export default Forma