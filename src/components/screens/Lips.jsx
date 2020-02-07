import React from 'react'
import './lips.css'

const Lips = (props) => {
    const makeups = () => {
        return props.makeup[0] && props.makeup[0].map(makeup => {
            if (makeup.lips) {
                return (
                    <div className="thelipsBox">
                        <div className="lipsDiv" >
                            <div className="lipsName">
                            <h3>{makeup.lips}</h3>
                            </div>
                            <div className="lipsImg">
                                <img src={makeup.imgUrlLips} alt="" className="faceUrl" />
                                <p>$20</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }


    return (
    <div className="lipsBanner">
        <h1>LIPS</h1>
        <h3>{makeups()}</h3>
        </div>
    )



}

export default Lips