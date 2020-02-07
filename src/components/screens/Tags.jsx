import React from 'react'
import truckicon from '../../pictures/truckicon.png'
import textbubble from '../../pictures/textbubble.png'
import tagp from '../../pictures/tagp2.png'

const Tags = () => {
    return (
            <div className="details">
            
                <div className="details1">
                    <div className="free">
                        <img src={truckicon} alt="truck" className="truckicon" />
                        <li>FREE DELIVERIES ON ORDERS OVER $50!</li>
                    </div>
                </div>
                <div className="details2">
                    <div className="contact">
                        <img src={textbubble} alt="text bubble" className="textbubble" />
                        <li>CONTACT US!</li>
                        </div>
                </div>
                <div className="details3">
                    <div className="shipping">
                        <img src={tagp} alt="tag" className="tag" />
                        <li>FREE SHIPPING!</li>
                        </div>
                </div>
            </div>

    )
}

export default Tags 