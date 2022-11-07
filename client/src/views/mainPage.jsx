import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className="App">
            <div className="main-page-wrapper">
                <img className='logo' src='../img/Rently blue logo.png' />
                <p className='slogan header1'>Rent The City..</p>
                <div className="button-wrapper">
                    <Link to="/login">
                        <button className="button-xxl">Log in</button>
                    </Link>
                </div>
                <div className="button-wrapper">
                    <Link to="/signup">
                        <button className="button-xxl-inverted">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default MainPage
