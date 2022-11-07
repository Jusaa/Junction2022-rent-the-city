import React from 'react'
import axios from 'axios'

const OrderInfo = (props) => {
    
    const [item, setItem] = React.useState(null)
    const [order, setOrder] = React.useState(null)

    React.useEffect(() => {
        Promise.all([
            axios.get(`http://localhost:8080/api/bookable-items/${window.location.pathname.split("/")[2]}`),
            axios.post("http://localhost:8080/api/book-item", {
                "itemId": 1,
                "lenderId": 1,
                "borrowerId": 1
            })
        ]).then(res => {
            setItem(res[0].data)
            setOrder(res[1].data)
        })
    }, []);

    if (item && order) {
        const d = new Date();
        const formattedTime = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
        return (
            <div className="App">
                <div className='order-wrapper'>
                    <div className="body-small-txt">{formattedTime}</div>
                    <span className="page-header header1">Your Order</span>
                    <p className='line-break'></p>
                    <div className="order-row-details">
                        <div className="header3">Ordered Item</div>
                        <div className="body-txt"> {item.pricePerDay * 2},00</div>
                    </div>
                    <div className="order-row-details">
                        <div className="header3 item-listing"> {item.name}</div>
                        <div className="body-small-txt"> {item.pricePerDay},00</div>
                        <div className="body-small-txt"> 2</div>
                        <div className="body-txt"> {item.pricePerDay * 2},00</div>
                    </div>
                    <div className="tropical-blue line"></div>
                    <div className="header3 cerulean">Delivery Address</div>
                    <div className="body-txt cerulean">   {item.lender.user.address.street}, {item.lender.user.address.postalCode} {item.lender.user.address.city}</div>
                        <div className="order-row-details">
                        <div className="body-small-txt">  Basic Fee</div>
                        <div className="body-small-txt">  8,00</div>
                    </div>
                    <div className="tropical-blue line"></div>
                    <div className="order-row-details">
                        <div className="header3">Total:</div>
                        <div className="header2">{item.pricePerDay * 2 + 8},00</div>
                    </div>
                </div>
                <a href={order.url}>
                    <input className="action-btn  button-xxl" type="submit" value="Order!"></input>
                </a>
            </div>
        )
    }
}

export default OrderInfo
