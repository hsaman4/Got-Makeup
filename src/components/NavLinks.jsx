import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Face from './screens/Face'
import Eyes from './screens/Eyes'
import Lips from './screens/Lips'
import WishList from './screens/WishList'
import './navlinks.css'
import { api } from '../services/ApiConfig'






class NavLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            makeup: []
        }
    }
    componentDidMount() {
        this.fetchMakeup()
    }
    fetchMakeup = async () => {
        try {
            const makeup = await api.get("/mockMakeup/")
            this.setState((state => ({
                makeup: [...state.makeup, makeup.data]
            })))
        } catch (error) {

        }
    }
    render() {
        return (
            <div className="navlinks">
                <nav className="navs">
                    <div className="faceContainer">
                        <NavLink exact activeClassName="active" to="/">
                            <li>FACE</li>
                        </NavLink>
                    </div>
                    <div className="lipsContainer">
                        <NavLink exact activeClassName="active" to="/Lips">
                            <li>LIPS</li>
                        </NavLink>
                    </div>
                    <div className="eyesContainer">
                        <NavLink exact activeClassName="active" to="/Eyes">
                            <li>EYES</li>
                        </NavLink>
                    </div>
                    <div className="wishlistContainer">
                        <NavLink exact activeClassName="active" to="/WishList">
                            <li>WISHLIST</li>
                        </NavLink>
                    </div>
                </nav>
                <main>
                    <Switch>
                        <Route
                            exact path='/'
                            render={(props) => <Face {...props} makeup={this.state.makeup} />}
                        />
                        <Route
                            exact path='/Lips'
                            render={(props) => <Lips {...props} makeup={this.state.makeup} />}
                        />
                        <Route
                            exact path='/Eyes'
                            render={(props) => <Eyes {...props} makeup={this.state.makeup} />}
                        />
                        <Route exact path='/Wishlist' component={WishList}
                        />
                    </Switch>

                </main>
            </div>

        )
    }
}

export default NavLinks