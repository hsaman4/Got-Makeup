import React from 'react'
import '../screens/face.css'



const Face = (props) => {
    const makeups = () => {
        return props.makeup[0] && props.makeup[0].map(makeup => {
            if (makeup.face) {
                return (
                <div className="thefaceBox">
                    <div className="faceDiv" >
                        <div className="faceName">
                            <h3>{makeup.face}</h3>
                        </div>
                        <div className="faceImg">
                            <img src={makeup.imgUrlFace} alt="" className="faceUrl" />
                            <p>$30</p>
                        </div>
                    </div>
                    </div>
                )
            }
        })
    }


    return (
        <div className="test" >
            <h1>FACE</h1>
            <h3>{makeups()}</h3>
        </div>

    )

}

export default Face