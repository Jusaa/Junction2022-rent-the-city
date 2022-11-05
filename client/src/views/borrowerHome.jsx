import React from 'react'
import Menu from './menu'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BorrowerHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], search: ''}
      }
    
    componentDidMount() {
        axios.get('http://localhost:8080/api/bookable-items')
            .then(res => this.setState({items: res.data, search: ''}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    onSearch = (e) => {
        this.setState({items: this.state.items, search: e.target.value})
    }
    render() {
        return (
            <div className="App">
                <Menu logout={true} user={this.getUser().name} className='Nav'></Menu>
                <div className="App">
                    <div className="Search">
                        <p>Search for items to borrow:</p>
                        <input type="text" id="search" name="search" onChange={this.onSearch} />
                    </div>
                    <div className="ItemList">
                        {this.state && this.state.items && this.state.items.map((item) => {
                            if (item.name.includes(this.state.search)) {
                                return (
                                    <Link to={`/borrower/item/${item.id}`}>
                                        <div>
                                            <img src={item.imageUrl} width="100" height="100" className="Image" />
                                            <p>{item.name}, {item.description}</p>
                                        </div>
                                    </Link>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default BorrowerHome
