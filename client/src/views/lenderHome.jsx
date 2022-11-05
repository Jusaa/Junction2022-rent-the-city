import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu.jsx'

class LenderHome extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
                <Menu logout={true} user={this.props.state.user} className='Nav'></Menu>
                <div className="App">
                    <p>List of my own items</p>
                    <ul className="App">
                        <li>Item 1 - Available</li>
                        <li>Item 2 - Available</li>
                        <li>Item 3 - Lent until 7.11.2022</li>
                        <li>Item 4 - Lent until 8.11.2022</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LenderHome
