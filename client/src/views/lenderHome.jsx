import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header.jsx'

class LenderHome extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="App">
                <Header logout={true} user={this.props.user} className='Nav'></Header>
                <p>List of my own items</p>
                <ul className="App">
                    <li>Item 1 - Available</li>
                    <li>Item 2 - Available</li>
                    <li>Item 3 - Lent until 7.11.2022</li>
                    <li>Item 4 - Lent until 8.11.2022</li>
                </ul>
            </div>
        )
    }
}

export default LenderHome
