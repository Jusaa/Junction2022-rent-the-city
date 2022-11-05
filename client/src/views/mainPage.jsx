import React from 'react'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
    render() {
        return (
            <div className="App">
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
