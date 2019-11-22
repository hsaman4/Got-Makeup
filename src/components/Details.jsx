import React from 'react'
import truckicon from '../pictures/truckicon.png'
import textbubble from '../pictures/textbubble.png'
import tagp from '../pictures/tagp2.png'
import arrow from '../pictures/arrow.png'

const Details = () => {
    return (
        <div className="top">
            <div className="bannerContainer">
                <div className="banner">
                    <p>WHAT'S NEW</p>
                    <img src={arrow} alt="arrow" className="arrow" ></img>
                </div>
            </div>
            <hr />
            <div className="details">
                <div className="details1">
                    <ul>
                        <img src={truckicon} alt="truck" className="truckicon" />
                        <li>FREE DELIVERIES ON ORDERS OVER $50!</li>
                    </ul>
                </div>
                <div className="details2">
                    <ul>
                        <img src={textbubble} alt="text bubble" className="textbubble" />
                        <li>CONTACT US!</li>
                    </ul>
                </div>
                <div className="details3">
                    <ul>
                        <img src={tagp} alt="tag" className="tag" />
                        <li>FREE SHIPPING!</li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>

    )

}

export default Details