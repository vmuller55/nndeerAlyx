import './work.css'
import ongle1 from '../../assets/ongle1.jpg'
import ongle2 from '../../assets/ongle2.jpg'
import ongle3 from '../../assets/ongle3.jpg'
import ongle4 from '../../assets/ongle4.jpg'
import ongle5 from '../../assets/ongle5.jpg'
import ongle6 from '../../assets/ongle6.jpg'
import ongle7 from '../../assets/ongle7.jpg'
import ongle8 from '../../assets/ongle8.jpg'
import { useState, useEffect } from 'react'

const Work = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIndex, setModalIndex] = useState(1)


    const handleOpenModal = (index) => {
        setModalIsOpen(true)
        setModalIndex(index)
        console.log(index)
    }

    const handlePrevious = () => {
        setModalIndex(modalIndex -1)
    }

    const handleNext = () => {
        setModalIndex(modalIndex +1)
    }

    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

    useEffect(() => {
        if(modalIndex <= 0 ) {
            setModalIndex(8)
        }
        if(modalIndex > 8) {
            setModalIndex(1)
        }
    },[modalIndex])

    return(
        <div className="workContainer">
            <div className="workContain">
                <h2>Mon travail</h2>
                <div className="workPhoto">
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(1)} >
                            <img src={ongle1} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(2)} >
                            <img src={ongle2} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(3)} >
                            <img src={ongle3} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(4)} >
                            <img src={ongle4} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(5)} >
                            <img src={ongle5} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(6)} >
                            <img src={ongle6} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(7)} >
                            <img src={ongle7} alt="pose onglerie" />
                        </button>
                    </div>
                    <div className="photoWorkContainer">
                        <button className='openModalButton' onClick={() => handleOpenModal(8)} >
                            <img src={ongle8} alt="pose onglerie" />
                        </button>
                    </div>
                </div>
                {modalIsOpen 
                ?
                    <div className="modalContainer">
                        <div className="arrowLeft" onClick={() => handlePrevious()}><i className="fa-solid fa-arrow-left"></i></div>
                        <div className="arrowRight" onClick={() => handleNext()}><i className="fa-solid fa-arrow-right"></i></div>
                        <div className="closeModal" onClick={() => handleCloseModal()}>X</div>
                        <div className="modalContent">
                            {
                                modalIndex === 1 
                                ?
                                    <img src={ongle1} className='modalImage'></img>
                                :
                                    modalIndex === 2
                                    ?
                                        <img src={ongle2} className='modalImage'></img>
                                    :
                                        modalIndex === 3 
                                        ?
                                            <img src={ongle3} className='modalImage'></img>
                                        :
                                            modalIndex === 4 
                                            ?
                                                <img src={ongle4} className='modalImage'></img>
                                            :
                                                modalIndex === 5 
                                                ?
                                                    <img src={ongle5} className='modalImage'></img>
                                                :
                                                    modalIndex === 6 
                                                    ?
                                                        <img src={ongle6} className='modalImage'></img>
                                                    :
                                                        modalIndex === 7 
                                                        ?
                                                            <img src={ongle7} className='modalImage'></img>
                                                        :
                                                            modalIndex === 8
                                                            ?
                                                                <img src={ongle8} className='modalImage'></img>  
                                                            : ''   
                            }
                        </div>
                    </div>
                :
                    ''
                }
                
                        
                    
            </div>
        </div>
    )
}

export default Work