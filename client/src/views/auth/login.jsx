import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  
    const setUsername = (e) => {
      props.setUsername(e.target.value);
    }

    return (
    <div className="App">
        <form className="page-wrapper">
          <span className="page-header header1">Log in</span>
          <input className="form-box" type="text" id="name" name="name" placeholder="User Name" onChange={setUsername}/>
          <input className="form-box" type="password" id="password" name="password" placeholder="Password"/>
              {props.getUser.role == 'borrower' &&
                <Link to="/borrower/home">
                  <input className="action-btn button-xl" type="submit" value="Log in!">
                  </input>
                </Link>
              }
        </form>
    </div>
    )
}

export default Login
