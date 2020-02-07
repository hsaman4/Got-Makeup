import React from 'react'
import './header.css'
import flag from '../pictures/american-flag-icon.png'



const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
                <h1>GOT MAKEUP</h1>
                <div className="account">
                    <h3 className="myAccount">My Account</h3>
                    <h3>Ship to:</h3>
                    <img src={flag} alt="" className="flag"/>

                </div>
            </div>
            <div className="links">
                <ul>
                    <a className="whatsnew" href="#whatsnew">What's New</a>
                    <li>Makeup</li>
                    <li>Skin Care</li>
                    <li>Holiday Gift Guide</li>
                    <li className="sale">Sale</li>
                    <a className="storelocatorlink" href="#storelocator">Store Locator</a>
                </ul>
            </div>
        </div>
    )
}

export default Header