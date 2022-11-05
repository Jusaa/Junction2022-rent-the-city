import React from 'react'
import Menu from './menu'

class BorrowerHome extends React.Component {
    render() {
        return (
            <div className="App">
                <Menu logout={true} className='Nav'></Menu>
                <div className="App">
                    <p>Items available to rent</p>
                    <ul >
                        <li>Item 1 - 5€ delivery in 30min - 10€/day</li>
                        <li>Item 2 - 7€ delivery in 40min - 25€/day</li>
                        <li>Item 3 - 10€ delivery in 50min - 5€/day</li>
                        <li>Item 4 - 12€ delivery in 1h - 20€/day</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BorrowerHome
