import './bio.css'
import ongle3 from '../../assets/ongle3.jpg'
import SmokeRedAndBlue from '../../assets/SmokeRedAndBlue.png'

const Bio = () => {
    return(
        <div className="bioContainer">
            <div className="smokeRedAndBlue">
                    <img src={SmokeRedAndBlue} alt='smoke red and blue style'></img>
                </div>
            <div className="bioContent">
                <div className="bioImage">
                    <img src={ongle3} alt='pose néon'></img>
                </div>
                <div className="bioText">
                    <h2>Deer Alyx</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat quo soluta, consequatur voluptatum nihil asperiores vel et praesentium odit excepturi incidunt culpa cum dicta nobis at, dolor ipsum, hic labore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat quo soluta, consequatur voluptatum nihil asperiores vel et praesentium odit excepturi incidunt culpa cum dicta nobis at, dolor ipsum, hic labore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat quo soluta, consequatur voluptatum nihil asperiores vel et praesentium odit excepturi incidunt culpa cum dicta nobis at, dolor ipsum, hic labore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat quo soluta, consequatur voluptatum nihil asperiores vel et praesentium odit excepturi incidunt culpa cum dicta nobis at, dolor ipsum, hic labore.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio