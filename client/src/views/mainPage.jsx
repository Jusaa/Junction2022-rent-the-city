import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className="App">
            <div className="App-header">
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
        </div>
    )
}

export default MainPage
