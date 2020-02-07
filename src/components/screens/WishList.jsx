import React from 'react'
import { api } from '../../services/ApiConfig'
import './wishlist.css'

class WishList extends React.Component {
    constructor() {
        super()
        this.state = {
            makeupName: "",
            makeupImgUrl: "",
            wishlist: []
        }

    }
    handleInput = (event) => {
        const stateProp = event.target.name
        const stateValue = event.target.value
        this.setState({ [stateProp]: stateValue })

    }
    handleSubmit = async (event) => {
        console.log('clicked', this.state)
        const data = {
            name: this.state.name,
            imgUrl: this.state.imgUrl,
        } = this.state
        event.preventDefault()

        await api.post("/mockMakeup", data)
            .then(async (data) => {
                this.setState({
                    wishlist: [...this.state.wishlist, data],
                })
            })
    }

    render() {
        console.log("new data", this.state.wishlist)
        const theWishlist = this.state.wishlist.map((wish) => {
            console.log(wish.data)
            return (
                <div className="wish">
                    <h1>{wish.data.makeupName}</h1>
                    <img src={wish.data.makeupImgUrl} alt="" />
                </div>
            )

        })

        return (
            <div className="form" id="wishlist">
                <h1>Your Wishlist!</h1>
                <h2>Add the product name and the URL!</h2>
                <form className="add" onSubmit={this.handleSubmit} onChange={this.handleInput}>
                    <div className="input-field">
                        <input type="text" name="makeupName" id="test id" />
                        <label for="makeupName">Product Name</label>
                        <input type="text" name="makeupImgUrl"  />
                        <label for="makeupImgUrl">Product URL</label>
                        <input className="submit"type="submit" name="Submit" />
                    </div>
                </form>
                {theWishlist}
            </div>
        )
    }
}
export default WishList