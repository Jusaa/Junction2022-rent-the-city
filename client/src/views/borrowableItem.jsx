import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BorrowableItem = (props) => {
    const [item, setItem] = React.useState(null)

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/bookable-items/${window.location.pathname.split("/")[3]}`).then((res) => {
            setItem(res.data);
        });
    }, []);
    
    return (
        <div className="App">
            <div className="App">
                <div>
                    {item &&
                        <div className="item-card">
                            <img src={item.imageUrl} width="100" height="100" />
                            <span className="header1">{item.name}</span>
                            <span className="header2">{item.location}</span>
                            <div className="item-info-block">
                                <div className="description-block">
                                    <p className="header3 description">Description</p>
                                    <p className="body-txt item-description">{item.description}</p>
                                </div>
                                <div className="description-block-row">
                                    <p className="header3 description">Rental Period</p>
                                    <p className="body-txt item-price">Up to 3 months</p>
                                </div>
                                <div className="description-block-row">
                                    <p className="header3 description">Price</p>
                                    <p className="body-txt item-price">{item.price} 10€ / week </p>
                                </div>
                                <div className="description-block-row">
                                    <p className="header3 description">Lender</p>
                                    <p className="body-txt item-price">{item.lender.merchantName} Jukka Pulkkinen, Espoo
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
                            <Link to={`/order/${window.location.pathname.split("/")[3]}`}>
                                <input className="action-btn  button-xxl" type="submit" value="Rent!"></input>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BorrowableItem
