import React from 'react'
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
        </div>
    )
}
export default Details