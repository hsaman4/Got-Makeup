import React from 'react'
import './footer.css'
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
                <div className="mapStuff">
                    <div className="locator" id="storelocator">
                        <p>Store Locator:</p>
                    </div>
                    <div className="map">
                        <Map />
                    </div>
                </div>
                <div className="otherlinks">
                    <h4>Ways to Shop</h4>
                    <p>Just Arrived</p>
                    <p>Best Sellers</p>
                    <p>Beauty Offers</p>
                    <p>Returns & Exchanges</p>
                    <p>Online Ordering</p>
                    <p>International Shipments</p>
                </div>
                <div className="morelinks">
                    <h4>My Got Makeup</h4>
                    <p>My Account</p>
                    <p>Order Status</p>
                    <p>Rewards</p>
                    <p>Billing</p>
                    <p>Customer Service</p>
                    <p>Careers</p>
                </div>


            </div>
        )
    }
}

export default Footer