import React from 'react'
import { Link } from 'react-router-dom'

const BorrowerHome = () => {
    return (
        <div>
            <Link to="/">
                <button>Logout</button>
            </Link>
            <p>Items available to rent</p>
            <ul className="App">
                <li>Item 1 - 5€ delivery in 30min - 10€/day</li>
                <li>Item 2 - 7€ delivery in 40min - 25€/day</li>
                <li>Item 3 - 10€ delivery in 50min - 5€/day</li>
                <li>Item 4 - 12€ delivery in 1h - 20€/day</li>
            </ul>
        </div>
    )
}

export default BorrowerHome
