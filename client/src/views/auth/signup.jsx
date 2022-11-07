import React from 'react'
import { Link } from 'react-router-dom'

const Signup = (props) => {

    const setUsername = (e) => {
      props.setUsername(e.target.value);
    }
    return (
    <div className="App">
        <form className="page-wrapper">
          <span className="page-header header1">Sign Up</span>
          <input className="form-box" type="text" id="username" name="username" placeholder="User Name" onChange={setUsername}/>
          <input className="form-box" type="password" id="password" name="password" placeholder="Password"/>
          <input className="form-box" type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password"/>

              {props.getUser.role == 'borrower' &&
                <Link to="/signup/userinfo">
                  <input className="action-btn button-xl" type="submit" value="Next">
                  </input>
                </Link>
              }
        </form>
    </div>
    )
}

export default Signup