import React from 'react'
import './eyes.css'

const Eyes = (props) => {
    const makeups = () => {
        return props.makeup[0] && props.makeup[0].map(makeup => {
            if (makeup.eyes) {
                return (
                    <div className="theeyesBox">
                        <div className="eyesDiv" >
                            <div className="eyesName">
                            <h3>{makeup.eyes}</h3>
                            </div>
                            <div className="eyesImg">
                                <img src={makeup.imgUrlEyes} alt="" className="faceUrl" />
                                <p>$40</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }


    return (
        <div className="eyesTitle">
            <h1>EYES</h1>
            <h3>{makeups()}</h3>
        </div>
    )



}


export default Eyes