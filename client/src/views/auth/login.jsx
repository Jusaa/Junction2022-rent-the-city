import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  
  constructor(props) {
    super(props);
  }

  setLender = () => {
    this.props.setRole('lender')
  };
  setBorrower = () => {
    this.props.setRole('borrower')
  };
  setUsername = (e) => {
    this.props.setUsername(e.target.value) 
  };
  getUser = () => {
    return this.props.getUser();
  }

  render () {
    return (
    <div className="App">
        <form className="page-wrapper">
          <span className="page-header header1">Log in</span>
          <input className="form-box" type="text" id="name" name="name" placeholder="User Name" onChange={this.setUsername}/>
          <input className="form-box" type="password" id="password" name="password" placeholder="Password"/>
              {this.getUser().role == 'borrower' &&
                <Link to="/borrower/home">
                  <input className="action-btn button-xl" type="submit" value="Log in!">
                  </input>
                </Link>
              }
        </form>
    </div>
    )
  }
}

export default Login
