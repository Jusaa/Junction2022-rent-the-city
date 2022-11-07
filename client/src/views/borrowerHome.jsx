import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BorrowerHome = () => {
    const [items, setItems] = React.useState([])
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        axios.get('http://localhost:8080/api/bookable-items').then((res) => {
            setItems(res.data);
        });
    }, []);
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="App">
            <div className="page-wrapper">
                <div className="Search">
                    <span className="page-header header1">Search</span>
                    <input className="form-box form-search" type="text" id="search" name="search" placeholder="Search term" onChange={changeSearch}/>
                    <div className="SearchBottom"></div>
                    <span className="result-txt body-txt">ALL RESULTS</span>
                </div>
                <div className="ItemList">
                    {items.map((item) => {
                        if (item.name.toLowerCase().includes(search.toLowerCase())) {
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

export default BorrowerHome
