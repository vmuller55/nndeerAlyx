import './header.css'
import ongle1 from '../../assets/ongle1.jpg'
import ongle2 from '../../assets/ongle2.jpg'
import ongle3 from '../../assets/ongle3.jpg'
import ongle4 from '../../assets/ongle4.jpg'
import ongle5 from '../../assets/ongle5.jpg'
import ongle6 from '../../assets/ongle6.jpg'
import ongle7 from '../../assets/ongle7.jpg'
import ongle8 from '../../assets/ongle8.jpg'
import { useState, useEffect } from 'react'

const Header = () => {

    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(currentImgIndex > 6 ) {
                setCurrentImgIndex(0)
            }
            else{
                setCurrentImgIndex(currentImgIndex + 1)
            }
            
        }, 5000)
    }, [currentImgIndex])


    return(
        <div className="headerContainer">
            <div className="headerContent">
                <h1>DEER ALYX ONGLERIE FORMATION</h1>
                <div className="imgContainer">
                    <img src={ongle1} alt='pose' className={`${currentImgIndex === 0 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle2} alt='pose' className={`${currentImgIndex === 1 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle3} alt='pose' className={`${currentImgIndex === 2 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle4} alt='pose' className={`${currentImgIndex === 3 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle5} alt='pose' className={`${currentImgIndex === 4 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle6} alt='pose' className={`${currentImgIndex === 5 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle7} alt='pose' className={`${currentImgIndex === 6 ? 'currentImage' : 'imgOff'}`}></img>
                    <img src={ongle8} alt='pose' className={`${currentImgIndex === 7 ? 'currentImage' : 'imgOff'}`}></img>
                </div>
            </div>
        </div>
    )
}

export default Header