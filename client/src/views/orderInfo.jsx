import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null}
      }
    
    componentDidMount() {
        axios.get(`http://localhost:8080/api/bookable-items/${window.location.pathname.split("/")[2]}`)
            .then(res => this.setState({item: res.data}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        if (this.state && this.state.item) {
            console.log(this.state.item)
            const d = new Date();
            var formattedTime = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
            return (
                <div className="App">
                    <div className="body-small-txt">{formattedTime}</div>
                    <div className="tropical-blue line"></div>
                    <div className="header2">Ordered Item:</div>
                    <div className="body-small-txt">- {this.state.item.name}, {this.state.item.pricePerDay}€</div>
                    <div className="tropical-blue line"></div>
                    <div className="header2">Delivery:</div>
                    <div className="body-small-txt"> - Address: {this.state.item.lender.user.address.street}, {this.state.item.lender.user.address.postalCode} {this.state.item.lender.user.address.city}</div>
                    <div className="body-small-txt"> - Fee: 8€</div>
                    <div className="tropical-blue line"></div>
                    <div className="header2">Subtotal:</div>
                    <div>{this.state.item.pricePerDay + 8}€</div>
                    <a href="http://wolt.fi"> 
                        <input className="action-btn  button-xxl" type="submit" value="Order!"></input>
                    </a>
                </div>
            )
        }
    }
}

export default OrderInfo
