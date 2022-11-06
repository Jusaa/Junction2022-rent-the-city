import React from 'react'
import { Link } from 'react-router-dom'

class LenderHome extends React.Component {
    constructor(props) {
        super(props);
      }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        return (
            <div>
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
