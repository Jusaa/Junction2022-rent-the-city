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
                    
                    <div className="item-main-image">
                        {this.state && this.state.item && 
                            <div className="item-card">  
                                <img src={this.state.item.imageUrl} width="100" height="100" />
                                <p>{this.state.item.name}, {this.state.item.description}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BorrowableItem
