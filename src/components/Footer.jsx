import React from 'react'
import './footer.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import Map from './Map'



class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            money: [],
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="locator">
                    <p>Find the Store:</p>
                </div>
            <Map />
            
            </div>
        )
    }
}

export default Footer