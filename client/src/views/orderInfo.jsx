import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: null}
      }
    
    componentDidMount() {
        Promise.all([
            axios.get(`http://localhost:8080/api/bookable-items/${window.location.pathname.split("/")[2]}`),
            axios.post("http://localhost:8080/api/book-item", {
                "itemId": 1,
                "lenderId": 1,
                "borrowerId": 1
            })
        ]).then(res => this.setState({item: res[0].data, order: res[1].data}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        if (this.state && this.state.item && this.state.order) {
            const d = new Date();
            var formattedTime = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
            return (
                <div className="App">
                    <div className='order-wrapper'>
                        <div className="body-small-txt">{formattedTime}</div>
                        <span className="page-header header1">Your Order</span>
                        <p className='line-break'></p>
                        <div className="order-row-details">
                            <div className="header3">Ordered Item</div>
                            <div className="body-txt"> {this.state.item.pricePerDay * 2},00</div>
                        </div>
                        <div className="order-row-details">
                            <div className="header3 item-listing"> {this.state.item.name}</div>
                            <div className="body-small-txt"> {this.state.item.pricePerDay},00</div>
                            <div className="body-small-txt"> 2</div>
                            <div className="body-txt"> {this.state.item.pricePerDay * 2},00</div>
                        </div>
                        <div className="tropical-blue line"></div>
                        <div className="header3 cerulean">Delivery Address</div>
                        <div className="body-txt cerulean">   {this.state.item.lender.user.address.street}, {this.state.item.lender.user.address.postalCode} {this.state.item.lender.user.address.city}</div>
                            <div className="order-row-details">
                            <div className="body-small-txt">  Basic Fee</div>
                            <div className="body-small-txt">  8,00</div>
                        </div>
                        <div className="tropical-blue line"></div>
                        <div className="order-row-details">
                            <div className="header3">Total:</div>
                            <div className="header2">{this.state.item.pricePerDay * 2 + 8},00</div>
                        </div>
                    </div>
                    <a href={this.state.order.url}>
                        <input className="action-btn  button-xxl" type="submit" value="Order!"></input>
                    </a>
                </div>
            )
        }
    }
}

export default OrderInfo
