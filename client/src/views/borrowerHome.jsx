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
                <div className="page-wrapper">
                    <div className="Search">
                        <span class="page-header header1">Search</span>
                        <input className="form-box form-search" type="text" id="search" name="search" placeholder="Search term" onChange={this.onSearch}/>
                    
                        <div className="SearchBottom"></div>
                        <span className="result-txt body-txt">ALL RESULTS</span>
                    </div>
                    <div className="ItemList">
                        
                        {this.state && this.state.items && this.state.items.map((item) => {
                            if (item.name.includes(this.state.search)) {
                                return (
                                    <Link to={`/borrower/item/${item.id}`}>
                                        <table className="ItemList">
                                            <tr className="item-row">
                                                <td className="ItemListItemPart Image"> <img src={item.imageUrl} width="50" height="50" /></td>
                                                <td className="header2">{item.name}</td>
                                                <td className="body-txt">{item.description}</td>
                                            </tr>
                                        </table>
                                    </Link>
                                )
                            }
                            return null;
                        })}
                          <input className="action-btn button-xl" type="submit" value="Show more!">
                         </input>
                    </div>
                </div>
            </div>
        )
    }
}

export default BorrowerHome
