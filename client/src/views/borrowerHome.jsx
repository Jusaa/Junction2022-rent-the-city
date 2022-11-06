import React from 'react'
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
                <div className="App">
                    <div className="Search">
                        <p>Search for items to borrow:</p>
                        <input type="text" id="search" name="search" onChange={this.onSearch}/>
                        <div className="SearchBottom"></div>
                    </div>
                    <div className="ItemList">
                        {this.state && this.state.items && this.state.items.map((item) => {
                            if (item.name.includes(this.state.search)) {
                                return (
                                    <Link to={`/borrower/item/${item.id}`}>
                                        <div className="ItemListItem">
                                            <div className="ItemListItemPart Image">
                                                <img src={item.imageUrl} width="50" height="50" />
                                            </div>
                                            <div className="ItemListItemPart">{item.name}, {item.description}</div>
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
