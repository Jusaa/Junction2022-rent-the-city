import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BorrowableItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null}
      }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/bookable-items/${window.location.pathname.split("/")[3]}`)
            .then(res => this.setState({item: res.data}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        console.log(this.state.item)
        return (
            
            <div className="App">
                <div className="App">
                    
                    <div>
                        {this.state && this.state.item && 
                            <div className="item-card">  
                                <img src={this.state.item.imageUrl} width="100" height="100" />
                                <span className="header1">{this.state.item.name}</span>
                                <span className="header2">{this.state.item.location}</span>
                                <div className="item-info-block">
                                    <div className="description-block">
                                        <p className="header3 description">Description</p>
                                        <p className="body-txt item-description">{this.state.item.description} sdfhskdfha dfvbkdjfkja dhfgajsdfj</p>
                                    </div>
                                    <div className="description-block-row">
                                        <p className="header3 description">Rental Period</p>
                                        <p className="body-txt item-price">Up to 3 months</p>
                                    </div>
                                    <div className="description-block-row">
                                        <p className="header3 description">Price</p>
                                        <p className="body-txt item-price">{this.state.item.price} 10€ / week </p>
                                    </div>
                                    <div className="description-block-row">
                                        <p className="header3 description">Lender</p>
                                        <p className="body-txt item-price">{this.state.item.lender} Jukka Pulkkinen, Espoo
                                            <p className="raiting">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                                <Link to="/borrower/home">
                                    <input className="action-btn  button-xxl" type="submit" value="Rent"></input>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BorrowableItem
