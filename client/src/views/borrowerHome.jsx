import React from 'react'
import Menu from './menu'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BorrowerHome extends React.Component {
    constructor(props) {
        super(props);
      }
    
    componentDidMount() {
        axios.get('http://localhost:8080/api/bookable-items')
            .then(res => this.setState({items: res.data}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        return (
            <div className="App">
                <Menu logout={true} user={this.getUser().name} className='Nav'></Menu>
                <div className="App">
                    <p>Items available to rent</p>
                    <div>
                        {this.state && this.state.items && this.state.items.map((item) => {
                            return (
                                <Link to={`/borrower/item/${item.id}`}>
                                    <div>
                                        <img src={item.imageUrl} width="100" height="100" />
                                        <p>{item.name}, {item.description}</p>
                                    </div>
                                </Link>
                            )}
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default BorrowerHome
