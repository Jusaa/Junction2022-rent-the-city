import React from 'react'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="App">
                <img className='logo' src='../img/Rently blue logo.png' />
                <p className='header'>Rent The City..</p>
                <div>
                    <Link to="/login">
                        <button>Log in</button>
                    </Link>
                </div>
                <div>
                    <Link to="/signup">
                        <button>Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage
