import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'


class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            viewport: {
                width: 400,
                height: 250,
                latitude: 40.7401,
                longitude: -73.9903,
                zoom: 16,
            }
        }
    }
    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoiaHNhbWFuNCIsImEiOiJjazMzdzVldmMwejFmM2hwYTBiczF3Mm40In0.8n33Eeu8aZbNWTXBxvb0Tw'
                }>
                <Marker
                    longitude={-73.9903}
                    latitude={40.7401}
                >
                    <img src={require("./mapicon.png")} width="25px" height="25px" alt="home local" />

                </Marker>
            </ReactMapGL>

        );
    }
}


export default Map