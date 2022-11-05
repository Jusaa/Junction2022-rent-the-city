import React from 'react'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
    render() {
        return (
            <div className="App">
                As a borrower
                <div>
                    <Link to="/borrower/login">
                        <button>Log in</button>
                    </Link>
                </div>
                <div>
                    <Link to="/borrower/signup">
                        <button>Sign up</button>
                    </Link>
                </div>
                As a lender
                <div>
                    <Link to="/lender/login">
                        <button>Log in</button>
                    </Link>
                </div>
                <div>
                    <Link to="/lender/signup">
                        <button>Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage
