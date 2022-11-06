import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  
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
          <span className="page-header header1">Sign Up</span>
          <input className="form-box" type="text" id="username" name="username" placeholder="User Name" onChange={this.setUsername}/>
          <input className="form-box" type="password" id="password" name="password" placeholder="Password"/>
          <input className="form-box" type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password"/>

              {this.getUser().role == 'borrower' &&
                <Link to="/signup/userinfo">
                  <input className="action-btn button-xl" type="submit" value="Next">
                  </input>
                </Link>
              }
        </form>
    </div>
    )
  }
}

export default Signup